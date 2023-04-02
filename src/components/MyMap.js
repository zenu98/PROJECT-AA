import "./MyMap.css";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import { useSelector, useDispatch } from "react-redux";
import { markerActions } from "../store/marker-slice";

function MyMap() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mark.dummy);
  const markerType = useSelector((state) => state.mark.markerType);
  console.log(markerType);
  console.log(data);
  const navermaps = useNavermaps();
  const center = new navermaps.LatLng(37.4882, 126.8249);

  const sortSelectHandler = (name) => {
    dispatch(markerActions.markerListHandler({ name }));
    console.log(name);
  };

  return (
    <NaverMap defaultCenter={center} defaultZoom={15}>
      {data.map((item) =>
        markerType === "All" ? (
          <Marker
            key={item.name}
            defaultPosition={
              new navermaps.LatLng(item.locationX, item.locationY)
            }
            title={item.title}
            onClick={() => {
              sortSelectHandler(item.name);
            }}
            icon={{
              content: `<div class="box" }>
          <img class="imgSize" alt="marker" src="img/${item.img}.png" />
          <span class="textSize">${item.name}</span>
          </div>`,
            }}
          ></Marker>
        ) : (
          markerType === item.title && (
            <Marker
              key={item.name}
              defaultPosition={
                new navermaps.LatLng(item.locationX, item.locationY)
              }
              title={item.title}
              onClick={() => {
                sortSelectHandler(item.name);
              }}
              icon={{
                content: `<div class="box">
            <img class="imgSize" alt="marker" src="img/${item.img}.png" />
            <span class="textSize">${item.name}</span>
            </div>`,
              }}
            ></Marker>
          )
        )
      )}
    </NaverMap>
  );
}

export default MyMap;
