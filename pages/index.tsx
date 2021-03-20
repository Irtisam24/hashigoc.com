import Head from "next/head";

import { AboutUs } from "../components/aboutUs";
import { OurVision } from "../components/ourVision";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { OurProjects } from "../components/ourProjects";
import { OurMission } from "../components/ourMission";
import { Location } from "../components/location";
import { Message } from "../components/message";
import { NavBar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hashi Goc | Home</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <NavBar isFixed={true} />
        <Hero />
        <AboutUs />
        <OurVision />
        <OurMission />
        <OurProjects />
        <Location />
        <Message />
        <Footer />
      </section>
    </>
  );
}
