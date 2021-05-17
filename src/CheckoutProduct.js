import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/core/styles";

import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const useStyles = makeStyles({
  heart: {
    position: "relative",
    left: "30px",
    top: "-80px",
    padding: "3px 5px",
    fontSize: "30px",
    border: "1px solid black",
  },
  colored: {
    position: "relative",
    left: "30px",
    top: "-80px",
    padding: "3px 5px",
    fontSize: "30px",
    color: "red",
    border: "1px solid black",
  },
});

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const { image, discount, productName, productPrice, id } = props;
  const [flag, setFlag] = useState(true);
  const classes = useStyles();
  const change = () => {
    setFlag(!flag);
  };
  const remove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="image" className="checkoutProduct__image" />
      <span className="checkoutProduct__off">{discount}</span>
      <h6 className="checkoutProduct__shirt_name">{productName}</h6>
      <span className="checkoutProduct__price">Rs.{productPrice}</span>
      <span className="checkProduct__id">Art.no. {id}</span>
      <FavoriteBorderIcon
        onClick={change}
        className={flag ? classes.heart : classes.colored}
      />
      <button className="checkoutProduct__remove" onClick={remove}>
        Remove from Bag
      </button>
    </div>
  );
}

export default CheckoutProduct;
