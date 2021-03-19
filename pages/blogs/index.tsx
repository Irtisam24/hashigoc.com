import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";

import mysql from "mysql2/promise";

// custom css
import styles from "./index.module.scss";

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
                  <Image
                    src={`/assets/images/${blog.blog_image}`}
                    className={`${styles.blogImage}`}
                  />
                  <p className={`${styles.createdAt}`}>
                    {blog.created_at.slice(0, 10)}
                  </p>
                  <p className={`${styles.blogTitle}`}>{blog.blog_title}</p>
                  <Link href={`/blogs/${blog.blog_id}`}>
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
export const getStaticProps = async (context) => {
  // create the connection to database
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hashi_goc",
  });

  const [rows, fields] = await connection.execute(
    "SELECT blog_id,blog_title,blog_image,slug,created_at FROM blogs Order BY created_at Desc"
  );

  connection.end();

  if (!rows) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: JSON.parse(JSON.stringify(rows)),
    },
  };
};
