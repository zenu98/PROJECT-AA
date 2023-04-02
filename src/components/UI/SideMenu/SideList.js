import classes from "./SideList.module.css";
import { useSelector } from "react-redux";

const SideList = () => {
  const data = useSelector((state) => state.mark.dummy);
  const markerType = useSelector((state) => state.mark.markerType);
  const selectedMarker = useSelector((state) => state.mark.selectedMarker);
  const isClicked = useSelector((state) => state.mark.markerIsClicked);
  return (
    <div className={classes.listBox}>
      <h2>장소</h2>
      {data.map((item) =>
        isClicked
          ? selectedMarker === item.name && (
              <div key={item.name}>
                <div className={classes.thumbnailBox}>
                  <img src={`img/${item.thumbnail}`} alt="dummy" />
                </div>

                <h3 className={classes.nameText}>{item.name}</h3>
                <h4 className={classes.descriptionText}>{item.description}</h4>
              </div>
            )
          : markerType === item.title && (
              <div key={item.name}>
                <div className={classes.thumbnailBox}>
                  <img src={`img/${item.thumbnail}`} alt="dummy" />
                </div>

                <h3 className={classes.nameText}>{item.name}</h3>
                <h4 className={classes.descriptionText}>{item.description}</h4>
              </div>
            )
      )}
    </div>
  );
};

export default SideList;
