import "./MyMap.css";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import { useSelector, useDispatch } from "react-redux";
import { markerActions } from "../store/marker-slice";
import { useEffect, useState } from "react";
import { getData, getReviewData } from "../store/http-action";

function MyMap() {
  const dispatch = useDispatch();
  const navermaps = useNavermaps();
  const center = new navermaps.LatLng(37.4882, 126.8249);
  const [map, setMap] = useState(null);
  const data = useSelector((state) => state.mark.data);

  const markerType = useSelector((state) => state.mark.markerType);

  const panHandler = (item) => {
    if (map) {
      console.log(map);
      map.panTo(new navermaps.LatLng(item.locationX, item.locationY));
    }
  };

  useEffect(() => {
    dispatch(getReviewData());
    dispatch(getData());
  }, [dispatch]);

  const sortSelectHandler = (name) => {
    dispatch(markerActions.markerListHandler({ name }));
  };

  return (
    <NaverMap defaultCenter={center} defaultZoom={15} ref={setMap}>
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
              panHandler(item);
            }}
            icon={{
              content: `<div class="box" }>
          <img class="imgSize" alt="marker" src="img/${item.img}.png" />
          <span class="textSize">${item.name}</span>
          </div>`,
            }}
          ></Marker>
        ) : markerType === "all" ? (
          <Marker
            key={item.name}
            defaultPosition={
              new navermaps.LatLng(item.locationX, item.locationY)
            }
            title={item.title}
            onClick={() => {
              sortSelectHandler(item.name);
              panHandler(item);
            }}
            icon={{
              content: `<div class="box">
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
                panHandler(item);
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
