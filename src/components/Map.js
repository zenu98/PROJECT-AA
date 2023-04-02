import MyMap from "./MyMap";
import classes from "./Map.module.css";
import SideMenu from "./UI/SideMenu/SideMenu";
import { Container as MapDiv } from "react-naver-maps";
const Map = () => {
  return (
    <div className={classes.container}>
      <SideMenu />
      <MapDiv
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <MyMap />
      </MapDiv>
    </div>
  );
};

export default Map;
