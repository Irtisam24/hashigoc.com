import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import Head from "next/head";

//
import styles from "./slug.module.scss";
import mysql from "mysql2/promise";

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
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  // create the connection to database
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "hashpkhr_hashigoc",
    password: "System32.bits",
    database: "hashpkhr_hashi_goc",
  });
  const [
    rows,
  ] = await connection.execute("SELECT * FROM blogs WHERE `blog_id`= ?", [
    slug,
  ]);

  connection.end();
  if (!rows) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        data: JSON.parse(JSON.stringify(rows[0])),
      },
    };
  }
}
