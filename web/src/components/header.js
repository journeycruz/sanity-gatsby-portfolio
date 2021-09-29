import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import { Disclosure } from "@headlessui/react";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav }) => (
  <div className="relative z-100 bg-black text-white">
    <div className="box-border my-0 mx-auto max-w-screen-lg p-4 flex sm:p-6">
      <div className="font-semibold flex-1">
        <Link className="inline-block p-2 text-gray-300 no-underline hover:text-white" to="/">
          Home
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/archive/">See All Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
