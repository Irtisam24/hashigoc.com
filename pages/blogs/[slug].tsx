import React from "react";
import Image from "next/image";

import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import Head from "next/head";

//
import styles from "./slug.module.scss";
import { connectToDatabase } from "../../functions/mongodb";
import DisqusComments from "./DisqusComments";

const createMarkUp = (content) => {
  return { __html: content };
};

export default function SingleBlog({ data }) {
  return (
    <>
      <Head>
        <title>{data.blog_title}</title>
      </Head>
      <NavBar isFixed={false} />
      <section className={`${styles.mainContainer}`}>
        <h3 className={`${styles.title}`}>
          {data.blog_title} <br></br>
          <small className={`${styles.createdAt}`}>
            {data.created_at.slice(0, 10)}
          </small>
        </h3>
        <Image
          src={`/assets/images/${data.blog_image}`}
          layout='responsive'
          width={100}
          height={40}
        />
        <div className={`${styles.bodySection}`}>
          <div dangerouslySetInnerHTML={createMarkUp(data.blog_content)} />
        </div>
      </section>
      <DisqusComments post={data} />
      <Footer />
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "live-chat-for-real-estate-businesses" } },
//       { params: { slug: "pakistan-independence-day" } },
//       { params: { slug: "kamyab-jawan-program" } },
//       { params: { slug: "pakistan-defense-day" } },
//       { params: { slug: "hashi-group-of-companies" } },
//       { params: { slug: "Property-Management-Services" } },
//     ],
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const { db } = await connectToDatabase();

  const data = await db.collection("blogs").find({ slug: slug }).toArray();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        data: JSON.parse(JSON.stringify(data[0])),
      },
    };
  }
}
