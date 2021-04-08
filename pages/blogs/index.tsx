import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";

// custom css
import styles from "./index.module.scss";
import { connectToDatabase } from "../../functions/mongodb";

export interface BlogItem {
  id: number;
  title: string;
  description: string;
  picture: string;
  created_at: string;
}

export default function Blogs({ data }) {
  return (
    <>
      <Head>
        <title>Hashi Goc | Blogs</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'></meta>
      </Head>
      <NavBar isFixed={false} />
      <section className={`${styles.mainContainer}`}>
        <p className={`normalParagraph ${styles.mainHeading}`}>Blogs</p>
        <p className={`whiteText`}>
          Recent <span className={`goldenText`}>Blogs</span>
        </p>
        <div className={`${styles.blogListContainer}`}>
          <Row>
            {data.map((blog) => {
              return (
                <Col
                  lg='6'
                  sm='12'
                  className={`${styles.singleBlogItem}`}
                  key={blog.blog_id}>
                  <Link href={`/blogs/${blog.slug}`}>
                    <Image
                      src={`/assets/images/${blog.blog_image}`}
                      className={`${styles.blogImage}`}
                    />
                  </Link>
                  <p className={`${styles.createdAt}`}>
                    {blog.created_at.slice(0, 10)}
                  </p>
                  <Link href={`/blogs/${blog.slug}`}>
                    <p className={`${styles.blogTitle}`}>{blog.blog_title}</p>
                  </Link>
                  <Link href={`/blogs/${blog.slug}`}>
                    <a className={`${styles.viewMore}`}>View More</a>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
      <section className={`${styles.footerSection}`}>
        <Footer />
      </section>
    </>
  );
}
export const getServerSideProps = async (context) => {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("blogs")
    .find({})
    .sort({ created_at: -1 })
    .toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};
