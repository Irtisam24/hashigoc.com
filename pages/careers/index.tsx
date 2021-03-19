import Head from "next/head";
import React from "react";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { CareersAbout } from "../../components/careersAbout";
import { CareersHero } from "../..//components/careersHero";
import { Postings } from "../../components/postings";

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'></meta>
      </Head>
      <NavBar isFixed={false} />
      <section>
        <CareersHero />
        <CareersAbout />
        <Postings />
      </section>
      <Footer />
    </>
  );
}
