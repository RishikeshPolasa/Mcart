import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import { isCompositeComponent } from "react-dom/test-utils";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const useStyles = makeStyles({
  heart: {
    position: "relative",
    left: "-120px",
    top: "-12px",
    //     padding: "3px 5px",
    fontSize: "30px",
    border: "white",
  },
  colored: {
    position: "relative",
    left: "-120px",
    top: "-12px",
    //     padding: "3px 5px",
    fontSize: "30px",
    color: "red",
  },
});

export default function Product(props) {
  const [{}, dispatch] = useStateValue();
  const { img, discount, productName, productPrice, id } = props;
  const [flag, setFlag] = useState(true);
  const classes = useStyles();
  const change = () => {
    setFlag(!flag);
  };

  const addToBag = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        productName: productName,
        image: img,
        productPrice: productPrice,
        discount: discount,
      },
    });
  };

  return (
    <div className="shirt">
      <img src={img} alt="t-shirt" />
      <span className="off">{discount}</span>
      <FavoriteBorderIcon
        onClick={change}
        className={flag ? classes.heart : classes.colored}
      />
      <h6 className="shirt-name">{productName}</h6>
      <span className="price">Rs.{productPrice}</span>
      <h6 className="buy" onClick={addToBag}>
        Add
      </h6>
    </div>
  );
}
