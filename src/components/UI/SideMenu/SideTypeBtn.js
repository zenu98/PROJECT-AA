import classes from "./SideTypeBtn.module.css";
import { BiCoffeeTogo, BiDesktop } from "react-icons/bi";
import { GiMicrophone } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { markerActions } from "../../../store/marker-slice";
import { useEffect, useState } from "react";
import { Form, Link, useRouteLoaderData } from "react-router-dom";
import SelectBox from "./Select";
import { GoPerson } from "react-icons/go";
import { TbLogout } from "react-icons/tb";

const SideTypeBtn = () => {
  const dispatch = useDispatch();
  const token = useRouteLoaderData("Home");
  const priceIsClicked = useSelector((state) => state.mark.selectedTab);
  console.log(priceIsClicked);

  const [clickedTab, setClickedTab] = useState("all");
  useEffect(() => {
    if (priceIsClicked === "가격비교") {
      setClickedTab("cafe");
      dispatch(markerActions.markerTypeHandler({ title: "cafe" }));
    }
  }, [priceIsClicked, dispatch]);
  const sortSelectHandler = (e) => {
    const title = e.currentTarget.id;

    if (clickedTab !== title) {
      // 클릭한 탭이 현재 선택된 탭과 같지 않을 때만 업데이트
      dispatch(markerActions.markerTypeHandler({ title }));
      setClickedTab(title);
    }
  };
  return (
    <div className={classes.listContainer}>
      <div className={classes.profile_container}>
        {token ? (
          <GoPerson className={` ${classes.profile_isLogin}`} />
        ) : (
          <Link to="/auth?mode=login">
            <GoPerson className={`${classes.profile_to_login} `} />
          </Link>
        )}

        {token && (
          <Form action="/logout" method="post">
            <button className={classes.logoutBtn}>
              <TbLogout className={classes.logoutBtn_icon} />
            </button>
          </Form>
        )}
        {/* <Link>
          <TbLogout className={classes.logoutBtn} />
        </Link> */}
      </div>
      <ul className={classes.list}>
        <li
          className={`${
            clickedTab === "all"
              ? classes["iconContainer-clicked"]
              : priceIsClicked === "가격비교"
              ? classes.iconContainer +
                " " +
                classes["iconContainer-priceComparison"]
              : classes.iconContainer
          }`}
          onClick={sortSelectHandler}
          id="all"
        >
          <div className={classes["icon-name-container"]}>
            <BiDesktop
              className={`${
                clickedTab === "all" ? classes["icon-clicked"] : classes.icon
              }`}
            />
            <span
              className={`${
                clickedTab === "all"
                  ? classes["tabName-clicked"]
                  : classes.tabName
              }`}
            >
              전체
            </span>
          </div>
        </li>
        <li
          className={`${
            clickedTab === "cafe"
              ? classes["iconContainer-clicked"]
              : classes.iconContainer
          }`}
          onClick={sortSelectHandler}
          id="cafe"
        >
          <div className={classes["icon-name-container"]}>
            <BiCoffeeTogo
              className={`${
                clickedTab === "cafe" ? classes["icon-clicked"] : classes.icon
              }`}
            />
            <span
              className={`${
                clickedTab === "cafe"
                  ? classes["tabName-clicked"]
                  : classes.tabName
              }`}
            >
              카페
            </span>
          </div>
        </li>
        <li
          className={`${
            clickedTab === "karaoke"
              ? classes["iconContainer-clicked"]
              : priceIsClicked === "가격비교"
              ? classes.iconContainer +
                " " +
                classes["iconContainer-priceComparison"]
              : classes.iconContainer
          }`}
          onClick={sortSelectHandler}
          id="karaoke"
        >
          <div className={classes["icon-name-container"]}>
            <GiMicrophone
              className={`${
                clickedTab === "karaoke"
                  ? classes["icon-clicked"]
                  : classes.icon
              }`}
            />
            <span
              className={`${
                clickedTab === "karaoke"
                  ? classes["tabName-clicked"]
                  : classes.tabName
              }`}
            >
              노래방
            </span>
          </div>
        </li>

        <SelectBox setClickedTab={setClickedTab} />
      </ul>
    </div>
  );
};

export default SideTypeBtn;
