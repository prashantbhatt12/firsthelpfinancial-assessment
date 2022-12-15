import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Bookings</h2>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
    </Fragment>
  );
};
export default Header;
