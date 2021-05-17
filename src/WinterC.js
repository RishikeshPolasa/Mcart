import React, { useState } from "react";
import Header from "./Header";
import Product from "./Product";

const products = [
  {
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff3%2F7a%2Ff37aee371f02fe06744019c8bac509c1d17d8e2a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    discount: "30% OFF",
    productName: "T-shirt Long Fit",
    productPrice: "699",
    id: "90985632",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa2%2Fd0%2Fa2d023e6aea3a21ea69c93b351fdcb3368a95611.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    discount: "30% OFF",
    productName: "Printed T-shirt",
    productPrice: "599",
    id: "87564325",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F91%2Fa0%2F91a050fbaecd1caba940f6adfc631fb84dbecccc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    discount: "30% OFF",
    productName: "Round-neck T-shirt Regular Fit",
    productPrice: "399",
    id: "78923632",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F65%2Fab%2F65ab70bf06b0c7b71880daf30a44ec7b1d9c16a7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    discount: "30% OFF",
    productName: "Round-neck T-shirt Regular Fit",
    productPrice: "399",
    id: "56325632",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4d%2Fe5%2F4de5ed0a018981a9b3072dd91672be3cc00d4088.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    discount: "30% OFF",
    productName: "Jerey top Silm Fit",
    productPrice: "799",
    id: "12988932",
  },
];

function WinterC() {
  return (
    <div>
      <Header />
      <div className="winter">
        <h3 className="t-shirts-title">MENS'S T-SHIRTS & VESTS</h3>
        <div className="shirts">
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WinterC;
