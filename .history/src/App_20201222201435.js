import React from 'react';
import './App.css';
import './ProductData.js'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <nav class="topbar">
          <img src="https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png" alt="amazon"/>
        </nav>
      </header>

      <div class="mainContainer">
        <div class="productPreview">
          <img src="https://imgur.com/iOeUBV7.png" alt="watch img"/>
        </div>
        <div class="ProductData">
          <h1 class="productTitle">FitBit 19 - The Smartest Watch</h1>
          <p class="productDesc">Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
