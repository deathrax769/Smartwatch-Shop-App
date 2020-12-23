import React from 'react';
import classes from './Header.module.css';

function Header(props) {
  return (
    <header>
      <nav className={classes.topbar}>
          <img src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png" alt="amazon"/>
        </nav>
    </header>
  );
}

export default Header;