import React from "react";
import Header from "./header";
import { motion } from "framer-motion"

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={styles.content}>
      <motion.main
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.1
        }}
      >
        {children}
      </motion.main>
    </div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © 2019 - {new Date().getFullYear()} Journey Cruz | All Rights Reserved <br /> Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
