import React from "react";
// import Image from "next/image";
import Image from "react-bootstrap/Image";

import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import Head from "next/head";

//
import styles from "./slug.module.scss";
import { connectToDatabase } from "../../functions/mongodb";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";

const createMarkUp = (content) => {
  return { __html: content };
};

export default function SingleBlog({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.loader}>
        <Spinner animation='grow' variant='warning' />
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{data.blog_title}</title>
        <meta
          property='og:title'
          content={`${data.blog_title}`}
          key='ogtitle'
        />
        <meta
          property='og:url'
          content={`https://www.hashigoc.com/blogs/${data.slug}/`}
          key='ogurl'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content={data.blog_content.replace(/<[^>]*>?/gm, "").slice(0, 50)}
          key='ogdesc'
        />
        <meta
          property='og:image'
          content={`/assets/images/${data.blog_image}`}
          key='ogimg'
        />
        <meta
          property='og:image:alt'
          content={`https://www.hashigoc.com/assets/images/${data.blog_image}`}
          key='ogimgalt'
        />
      </Head>
      <NavBar isFixed={false} />
      <section className={`${styles.mainContainer}`}>
        <h1 className={`${styles.title}`}>
          {data.blog_title} <br></br>
          <small className={`${styles.createdAt}`}>
            {data.created_at.slice(0, 10)}
          </small>
        </h1>

        <Image
          src={`/assets/images/${data.blog_image}`}
          fluid
          className='w-100'
          alt={data.blog_title}
        />
        <div className={`${styles.bodySection}`}>
          <div dangerouslySetInnerHTML={createMarkUp(data.blog_content)} />
        </div>
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
