import Head from "next/head";
import React from "react";
import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";
import { SingleService } from "../../components/singleService";

import styles from "./services.module.scss";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'></meta>
      </Head>
      <NavBar isFixed={false} />
      <section className={`${styles.servicesSection}`}>
        <h3 className={`${styles.mainHeading}`}>Our Services</h3>
        <SingleService
          mainImage='mimars.png'
          logoImage='mimarsLogo.png'
          title='ARCHITECHTURAL SERVICES'
          altImageDescription='Mimaars Architectures'
          details='Mimaar understands designing your home is a very personal act and choosing the right architect to assist you in that process is extremely important. Our perspective is developing optimal solutions designed to identify the best answers and create new value to your property. We are working to create masterpieces in the form of designer house.

          We approach each project collaboratively and without presumption to customize solutions for the owner, the site, and all users. Mimaar co-creates with each client throughout planning, programming, schematic design, design development, construction documents, and construction administration to design environments that definitely impact people’s lives. Our ability to deliver complete end-to-end solutions creates places that improve communal amenities..
          '
        />
        <div className='mt-3 animated fadeInLeft'>
          <SingleService
            mainImage='shr.png'
            logoImage='shrLogo.png'
            title='DIGITAL MARKETING'
            altImageDescription='Shr Makrketing 360'
            details={`SHR Marketing 360o is Brilliant in Terms of Digital Marketing , SHR has Digital Marketing Magicians.

            Our mission is to deliver the WOW factor through measurable results to our clients & to do the magic of marketing to addict the audience.
            
            We create a path to success stories. We adopt strategies where business goes viral.
            
            We are Digital Marketing KINGS having a long journey & deep-rooted heritage of digital marketing through different channels. Our specialized team has brought many resolutions in the Digitized Marketing World as you can see our classic profile. We believe that quality is more important than the quantity.
             `}
          />
        </div>
        <div className='my-3 animated fadeInRight'>
          <SingleService
            mainImage='hash.png'
            logoImage='hashLogo.png'
            altImageDescription='Hash Real Estate And Builders'
            title='REALESTATE AND BUILDERS'
            details='Hash real estate and builders is a premium and prominent name in the profession of constructional services. It provides the free approach to customers to develop their own desired house, villa, bunglaow, shopping mall and any kind of residential community. The grey and finished structure will be exactly as according to the customer needs and there will be no compromise in it and this is the assurity of Hash RealEstate and Builders.

            Hash Real Estate and Construction believes in providing all retentive and satisfactory dealings with public contentment. It provides on site-visit with the customer’s family along through providing its best agents who are well known of the economical worth and rates. Off site visit is also offering through providing a venue of our official office ; Hashi Group of companies. not only this, Hash real esate and builders is also providing a feasible platform that every customer has an easement access to buy / Sale and rental owning by login or Register his/her account without paying a single penny.!
            '
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
