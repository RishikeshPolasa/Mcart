import React from "react";
import Header from "./Header";
import Product from "./Product";

const products = [
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/82/f9/82f9a0d1871d98ec4b991112a4008094c8c3c595.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[z],hmver[3]&call=url[file:/product/main]",
    discount: "10% OFF",
    productName: "Relaxed Fit Hoodie",
    productPrice: "1499",
    id: "30563287",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F88%2F0a%2F880a3148c00aa2ff50a8c70929ce235f40d54bed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    discount: "10% OFF",
    productName: "Relaxed Fit Hoodie",
    productPrice: "1499",
    id: "37563212",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F19%2F9f%2F199fdc92e45eaccf8536092a25b4d0e65938c0d9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_hoodies%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    discount: "10% OFF",
    productName: "Relaxed Fit Hoodie",
    productPrice: "2299",
    id: "29566587",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F06%2Fab%2F06ab3b2ea544adcedd5394f31bcfb34fe84713d9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_sweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    discount: "10% OFF",
    productName: "Sweatshirt Relaxed Fit",
    productPrice: "799",
    id: "88758239",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/1e/b3/1eb38d39131a36c05933c4485b675106b137aba3.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]",
    discount: "10% OFF",
    productName: "Hoodie",
    productPrice: "1999",
    id: "47563229",
  },
];

function Hoodies() {
  return (
    <div className="hoodies">
      <Header />
      <h3 className="t-shirts-title">HOODIES & SWEATSHIRTS FOR MEN</h3>
      <div className="shirts">
        {products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    </div>
  );
}

export default Hoodies;
