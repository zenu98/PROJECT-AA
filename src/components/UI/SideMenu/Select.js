import Select from "react-select";
import "./Select.css";
import { useDispatch, useSelector } from "react-redux";
import { markerActions } from "../../../store/marker-slice";
import { useState } from "react";
const customStyles = (value, priceIsClicked) => ({
  control: (provided) => ({
    ...provided,
    border:
      value === "mart" || value === "atm" || value === "cinema"
        ? "2px solid #0475f4"
        : "1px solid #ededed",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: priceIsClicked === "가격비교" ? "rgb(173, 173, 173)" : "inherit",
  }),
});

let options = [
  { value: "mart", label: "마트" },
  { value: "atm", label: "ATM" },
  { value: "cinema", label: "영화관" },
];

const SelectBox = ({ setClickedTab, clickedTab }) => {
  const priceIsClicked = useSelector((state) => state.mark.selectedTab);
  const dispatch = useDispatch();
  const markerType = useSelector((state) => state.mark.markerType);
  const [selected, setSelected] = useState("");
  const sortSelectHandler = (title) => {
    setClickedTab(title);
    setSelected(title);
    console.log(title);

    dispatch(markerActions.markerTypeHandler({ title }));
  };
  return (
    <Select
      styles={customStyles(markerType, priceIsClicked)}
      className={
        "selectBox-container" +
        (priceIsClicked === "가격비교" ? " priceComparison" : "")
      }
      classNamePrefix="selectBox"
      defaultValue={{ label: "기타", value: 0 }}
      options={options}
      onChange={(item) => sortSelectHandler(item.value)}
      isSearchable={false}
    />
  );
};
export default SelectBox;
