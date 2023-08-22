import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem({ id, name, description, price }) {
  const cartCtx = useContext(CartContext);

  const newPrice = price.toFixed(2);

  const addToCartHandler = (amount) => {
    const itemToAdd = {
      id: id,
      name: name,
      amount: amount,
      price: price,
    };

    cartCtx.addItem(itemToAdd);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${newPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
