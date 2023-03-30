import classes from "./SideMenu.module.css";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SideTypeBtn from "../SideTypeBtn";
import SideList from "../SideList";

const SideMenu = () => {
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className={classes.menuContainer}>
      <nav
        className={`${
          toggle ? classes["sideMenuClose"] : classes["sideMenu"]
        } `}
      >
        <SideTypeBtn />
        <SideList />
      </nav>
      <div
        className={`${
          toggle ? classes["toggleOpenBtn"] : classes["toggleCloseBtn"]
        } `}
        onClick={clickHandler}
      >
        {toggle ? <SlArrowRight /> : <SlArrowLeft />}
      </div>
    </div>
  );
};

export default SideMenu;
