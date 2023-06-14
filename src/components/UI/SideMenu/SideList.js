import { useState } from "react";
import classes from "./SideList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { markerActions } from "../../../store/marker-slice";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useRouteLoaderData } from "react-router-dom";

const SideList = () => {
  const [tab, setTab] = useState("장소");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mark.data);
  const markerType = useSelector((state) => state.mark.markerType);
  const selectedMarker = useSelector((state) => state.mark.selectedMarker);
  const isClicked = useSelector((state) => state.mark.markerIsClicked);
  const token = useRouteLoaderData("Home");
  let sortPrice = data.slice().sort((a, b) => a.price - b.price);

  const tabHandler = (e) => {
    setTab(e.target.id);
    dispatch(markerActions.selectedTabHandler(e.target.id));
  };

  const itemSelectHandler = (name) => {
    dispatch(markerActions.selectedItemHandler({ name }));
  };
  return (
    <div className={classes.listBox}>
      <div className={classes.tab_container}>
        <ul className={classes.tab_list}>
          <li className={classes.tab_item}>
            <button
              onClick={tabHandler}
              id="장소"
              className={`${
                tab === "장소" ? classes.tab_active : classes.tab_btn
              }`}
            >
              장소
            </button>
          </li>
          <li className={classes.tab_item}>
            <button
              onClick={tabHandler}
              id="가격비교"
              className={`${
                tab === "가격비교" ? classes.tab_active : classes.tab_btn
              }`}
            >
              가격비교
            </button>
          </li>
        </ul>
      </div>
      <div className={classes.h2Box}>
        <h2>{tab}</h2>
      </div>
      <div className={classes.scroll}>
        {tab === "장소" &&
          data.map((item) =>
            isClicked ? (
              selectedMarker === item.name && (
                <div
                  key={item.name}
                  className={classes.mainContainer}
                  onClick={() => itemSelectHandler(item.name)}
                >
                  <div className={classes.thumbnailBox}>
                    {token && (
                      <div className={classes.bookmark}>
                        <AiOutlineStar className={classes.bookmark_star} />
                      </div>
                    )}
                    <img src={`img/${item.thumbnail}`} alt="dummy" />
                  </div>

                  <h3 className={classes.nameText}>{item.name}</h3>
                  <h4 className={classes.descriptionText}>
                    {item.description}
                  </h4>
                </div>
              )
            ) : markerType === "all" ? (
              <div
                key={item.name}
                className={classes.mainContainer}
                onClick={() => itemSelectHandler(item.name)}
              >
                <div className={classes.thumbnailBox}>
                  {token && (
                    <div className={classes.bookmark}>
                      <AiOutlineStar className={classes.bookmark_star} />
                    </div>
                  )}
                  <img src={`img/${item.thumbnail}`} alt="dummy" />
                </div>

                <h3 className={classes.nameText}>{item.name}</h3>
                <h4 className={classes.descriptionText}>{item.description}</h4>
              </div>
            ) : (
              markerType === item.title && (
                <div
                  key={item.name}
                  className={classes.mainContainer}
                  onClick={() => itemSelectHandler(item.name)}
                >
                  <div className={classes.thumbnailBox}>
                    {token && (
                      <div className={classes.bookmark}>
                        <AiOutlineStar className={classes.bookmark_star} />
                      </div>
                    )}
                    <img src={`img/${item.thumbnail}`} alt="dummy" />
                  </div>

                  <h3 className={classes.nameText}>{item.name}</h3>
                  <h4 className={classes.descriptionText}>
                    {item.description}
                  </h4>
                </div>
              )
            )
          )}
        {tab === "가격비교" && (
          <ul className={classes.listContainer}>
            {sortPrice.map(
              (item) =>
                item.title === "cafe" && (
                  <li
                    key={item.name}
                    onClick={() => itemSelectHandler(item.name)}
                  >
                    <span>{item.name}</span>
                    <span>{item.price}￦</span>
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideList;
