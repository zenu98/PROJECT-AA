import classes from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { markerActions } from "../../../store/marker-slice";
import CloseBtn from "../Button/CloseBtn";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import DetailPlaceSection from "./DetailPlaceSection";
import DetailMenuSection from "./DetailMenuSection";
import Board from "./Board";
import { getReviewData } from "../../../store/http-action";

const cx = classNames.bind(classes);

const Detail = () => {
  console.log("Detail 렌더링");
  const dispatch = useDispatch();
  const selectedItemName = useSelector((state) => state.mark.selectedItem);

  const data = useSelector((state) => state.mark.data);

  const detailItem = data.find((element) => element.name === selectedItemName);
  console.log(detailItem);
  const name = detailItem.name;

  const [clickedDetailTab, setClickedDetailTab] = useState("개요");
  const sortSelectHandler = (e) => {
    const tabType = e.currentTarget.id;
    setClickedDetailTab(tabType);
    dispatch(markerActions.tabTypeHandler({ tabType }));
  };

  const foldDetail = () => {
    dispatch(markerActions.itemIsNotClicked());
  };
  return (
    <div className={classes.detailCard}>
      <div className={classes.header}>
        <CloseBtn onClick={foldDetail} />
      </div>

      <div className={classes.thumbnailBox}>
        <img src={`img/${detailItem.thumbnail}`} alt="dummy" />
      </div>

      <div className={classes.infoSection_title}>
        <h1>{detailItem.name}</h1>
        <h4>{detailItem.title}</h4>
      </div>
      <nav className={classes.infoSection_tablist_container}>
        <ul className={classes.infoSection_tablist}>
          <li
            className={`${
              clickedDetailTab === "개요"
                ? cx("tablist_isClicked")
                : cx("infoSection_tablist_li")
            }`}
            id="개요"
            onClick={sortSelectHandler}
          >
            <span
              className={`${
                clickedDetailTab === "개요" ? cx("spanWhite") : cx("spanGray")
              }`}
            >
              개요
            </span>
          </li>
          <li
            className={`${
              clickedDetailTab === "메뉴"
                ? cx("tablist_isClicked")
                : cx("infoSection_tablist_li")
            }`}
            id="메뉴"
            onClick={sortSelectHandler}
          >
            <span
              className={`${
                clickedDetailTab === "메뉴" ? cx("spanWhite") : cx("spanGray")
              }`}
            >
              메뉴
            </span>
          </li>
          <li
            className={`${
              clickedDetailTab === "리뷰"
                ? cx("tablist_isClicked")
                : cx("infoSection_tablist_li")
            }`}
            id="리뷰"
            onClick={sortSelectHandler}
          >
            <span
              className={`${
                clickedDetailTab === "리뷰" ? cx("spanWhite") : cx("spanGray")
              }`}
            >
              리뷰
            </span>
          </li>
        </ul>
      </nav>

      {clickedDetailTab === "개요" && (
        <DetailPlaceSection detailItem={detailItem} />
      )}
      {clickedDetailTab === "메뉴" && (
        <DetailMenuSection detailItem={detailItem} />
      )}
      {clickedDetailTab === "리뷰" && <Board name={name} />}
    </div>
  );
};

export default Detail;
