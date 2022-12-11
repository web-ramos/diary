import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import TopNav from '../TopNav/TopNav';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={styles.headerContainer}>
        <TopNav />        
      </header>
      <main className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <section className={styles.contentContainer}>
          <Outlet />        
        </section>
      </main>
      <footer className={styles.footerContainer}>
        <Footer />
      </footer>
    </>
  )
}
