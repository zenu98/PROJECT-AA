import classes from "./SideMenu.module.css";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import SideTypeBtn from "./SideTypeBtn";
import SideList from "./SideList";
import Detail from "./Detail";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const [toggle, setToggle] = useState(false);
  const itemIsClicked = useSelector((state) => state.mark.itemIsClicked);
  
  const clickHandler = () => {
    setToggle((prev) => !prev);
    console.log(itemIsClicked);
  };

  return (
    <div
      className={`${
        itemIsClicked
          ? toggle
            ? classes["baseCardClose"]
            : classes["baseCard"]
          : toggle
          ? classes["baseCardClose"]
          : classes["baseCard"]
      }`}
    >
      <div className={`${classes["menuContainer"]} `}>
        <nav className={`${classes["sideMenu"]} `}>
          <SideTypeBtn />
          <SideList />
        </nav>
        {!itemIsClicked && (
          <div className={`${classes["toggleBtn"]} `} onClick={clickHandler}>
            {toggle ? <SlArrowRight /> : <SlArrowLeft />}
          </div>
        )}
      </div>
      {itemIsClicked && <Detail />}
      {itemIsClicked && (
        <div
          className={`${classes["toggleBtn-detail-isShown"]} `}
          onClick={clickHandler}
        >
          {toggle ? <SlArrowRight /> : <SlArrowLeft />}
        </div>
      )}
    </div>
  );
};

export default SideMenu;
