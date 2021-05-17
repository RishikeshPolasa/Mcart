import React from "react";
import Header from "./Header";
import Product from "./Product";

const products = [
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/03/b8/03b892db92635631006cea14c25454cfebe0028f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    discount: "20% OFF",
    productName: "Printed T-shirt",
    productPrice: "599",
    id: "123345621",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/8c/76/8c763e7b8fe99de28f76a657615514aa6f462a86.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    discount: "20% OFF",
    productName: "Relaxed Fit T-shirt",
    productPrice: "799",
    id: "189345986",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/1f/58/1f58432d30ad8cb60a85b0b0dc17aa35139dada6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    discount: "20% OFF",
    productName: "Mesh short",
    productPrice: "1499",
    id: "435433456",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/00/98/00986cff9f542778a7a8f00af04892805b772006.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    discount: "20% OFF",
    productName: "Pyjama and T-shirt and shorts",
    productPrice: "1499",
    id: "671233123",
  },
  {
    img: "https://lp2.hm.com/hmgoepprod?set=source[/ba/ca/bacac0226446ca747f17cc4c9661a79556fde9e6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
    discount: "20% OFF",
    productName: "Pique shirt Muscle Fit",
    productPrice: "1299",
    id: "765378456",
  },
];

function Clothes() {
  return (
    <div>
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

export default Clothes;
