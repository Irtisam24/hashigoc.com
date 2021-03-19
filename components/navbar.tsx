import React from "react";
import Link from "next/link";

import { Container, Nav, Navbar } from "react-bootstrap";

// custom css import
import styles from "./navbar.module.scss";

interface navbarProps {
  isFixed: boolean;
}
const renderNavbar = (isFixed: boolean) => {
  if (isFixed) {
    return (
      <Navbar
        className={`${styles.navBar} p-3`}
        expand='lg'
        variant='dark'
        fixed='top'>
        <Container fluid='sm'>
          <Link href='/'>
            <Navbar.Brand className={styles.navbarBrand} href='/'>
              <img
                src='/assets/images/60x60.png'
                width='60'
                height='60'
                className='d-inline-block align-top'
                alt='Hashi Group of Companies'
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className={styles.navBarButton}
          />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className={`${styles.navbarCollapseSectionMobile} animated bounceInDown`}>
            <Nav className='mr-lg-auto'>
              <Link href='/services'>
                <Nav.Link className={`${styles.navLink} mx-lg-4`} href='#home'>
                  Services
                </Nav.Link>
              </Link>
              <Link href='/careers'>
                <Nav.Link className={`${styles.navLink} mx-lg-4`} href='#link'>
                  Careers
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className='ml-lg-auto'>
              <Link href='/blogs'>
                <Nav.Link className={`${styles.navLink} mx-lg-4`} href='#home'>
                  Blogs
                </Nav.Link>
              </Link>
              <Link href='/contacts'>
                <Nav.Link className={`${styles.navLink} mx-lg-4`} href='#link'>
                  Contact Us
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar className={`${styles.navBar} p-3`} expand='lg' variant='dark'>
        <Container fluid='sm'>
          <Link href='/'>
            <Navbar.Brand className={styles.navbarBrand} href='/'>
              <img
                src='/assets/images/60x60.png'
                width='60'
                height='60'
                className='d-inline-block align-top'
                alt='Hashi Group of Companies'
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className={styles.navBarButton}
          />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className={`${styles.navbarCollapseSectionMobile} animated bounceInDown`}>
            <Nav className='mr-lg-auto'>
              <Link href='/services'>
                <Nav.Link className={`${styles.navLink} mx-lg-4`} href='#home'>
                  Services
                </Nav.Link>
              </Link>
              <Link href='/careers'>
                <Nav.Link className={`${styles.navLink} mx-lg-4`} href='#link'>
                  Careers
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className='ml-lg-auto'>
              <Link href='/blogs'>
                <Nav.Link className={`${styles.navLink} mx-lg-4`} href='#home'>
                  Blogs
                </Nav.Link>
              </Link>
              <Link href='/contacts'>
                <Nav.Link className={`${styles.navLink} mx-lg-4`} href='#link'>
                  Contact Us
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};
export const NavBar: React.FC<navbarProps> = ({ isFixed }) => {
  return <>{renderNavbar(isFixed)}</>;
};
