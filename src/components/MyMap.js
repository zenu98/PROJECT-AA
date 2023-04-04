import "./MyMap.css";
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";
import { useSelector, useDispatch } from "react-redux";
import { markerActions } from "../store/marker-slice";
import { useRef } from "react";

function MyMap() {
  const ref = useRef(null);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.mark.dummy);
  const markerType = useSelector((state) => state.mark.markerType);
  console.log(markerType);
  console.log(data);
  const navermaps = useNavermaps();
  const center = new navermaps.LatLng(37.4882, 126.8249);

  const sortSelectHandler = (name) => {
    dispatch(markerActions.markerListHandler({ name }));
  };

  const refHandler = (index) => {
    console.log(ref.current[index].title);
    ref.current[index].setIcon({
      content: `<div class="box" }>
      <img class="imgSize" alt="marker" src="img/cafe.png" />
      <span class="textSize">12345</span>
      </div>`,
    });
  };

  function markerClickEvent(marker, item) {
    navermaps.Event.addListener(marker, "click", (e) => {
      console.log(ref.current);
      // 클릭된 마커가 없고, click된 마커가 클릭된 마커가 아니라면
      // 마커의 이미지를 클릭 이미지로 변경합니다
      if (!ref.current || ref.current !== marker) {
        // 클릭된 마커 객체가 null이 아니면
        // 클릭된 마커의 이미지를 기본 이미지로 변경합니다.
        if (!!ref.current) {
          ref.current.setIcon({
            content: `<div class="box" }>
            <img class="imgSize" alt="marker" src="img/${item.img}.png" />
            <span class="textSize">${item.name}</span>
            </div>`,
          });
        }

        // 클릭했을때 마커에 하이라이트를 표시해줍니다.
        marker.setIcon({
          content: `<div class="box" }>
          <img class="imgSize" alt="marker" src="img/cafe.png" />
          <span class="textSize">12345</span>
          </div>`,
        });

        // 클릭된 마커를 현재 클릭된 마커로 설정합니다.
        ref.current = marker;
      }
    });
  }

  return (
    <NaverMap defaultCenter={center} defaultZoom={15}>
      {data.map((item) =>
        markerType === "All" ? (
          <Marker
            ref={ref}
            key={item.name}
            defaultPosition={
              new navermaps.LatLng(item.locationX, item.locationY)
            }
            title={item.title}
            onClick={() => {
              sortSelectHandler(item.name);
              markerClickEvent(ref, item);
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
