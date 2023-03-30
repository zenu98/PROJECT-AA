import classes from "./UI/SideMenu.module.css";

import { BiCoffeeTogo, BiCameraMovie, BiDesktop } from "react-icons/bi";
import { GiMicrophone } from "react-icons/gi";

import { useDispatch } from "react-redux";
import { markerActions } from "../store/marker-slice";

const SideTypeBtn = () => {
  const dispatch = useDispatch();
  const sortSelectHandler = (e) => {
    const title = e.currentTarget.id;
    console.log(title);
    dispatch(markerActions.markerTypeHandler({ title }));
  };
  return (
    <div className={classes.list}>
      <div
        className={classes.iconContainer}
        onClick={sortSelectHandler}
        id="cafe"
      >
        <BiCoffeeTogo className={classes.icon} />
      </div>
      <div
        className={classes.iconContainer}
        onClick={sortSelectHandler}
        id="cinema"
      >
        <BiCameraMovie className={classes.icon} />
      </div>
      <div className={classes.iconContainer}>
        <BiDesktop className={classes.icon} />
      </div>
      <div className={classes.iconContainer}>
        <GiMicrophone className={classes.icon} />
      </div>
    </div>
  );
};

export default SideTypeBtn;
