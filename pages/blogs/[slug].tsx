import React from "react";
import Image from "next/image";

import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import Head from "next/head";

//
import styles from "./slug.module.scss";
import { connectToDatabase } from "../../functions/mongodb";
import DisqusComments from "./DisqusComments";
import { useRouter } from "next/router";
import { Loader } from "react-full-page-loader-overlay";

const createMarkUp = (content) => {
  return { __html: content };
};

export default function SingleBlog({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader show={true} design={2} />;
  }
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
        <DisqusComments post={data} />
        <div></div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase();

  const data = await db.collection("blogs").find({}).toArray();
  const paths = data.map((path) => ({
    params: { slug: path.slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
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
      revalidate: 1,
    };
  }
}
