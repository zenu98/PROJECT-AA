import classes from "./SideList.module.css";
import { useSelector } from "react-redux";

const SideList = () => {
  const data = useSelector((state) => state.mark.dummy);
  const markerType = useSelector((state) => state.mark.markerType);
  return (
    <div className={classes.listBox}>
      <h2>장소</h2>
      {data.map(
        (item) =>
          markerType === item.title && (
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
