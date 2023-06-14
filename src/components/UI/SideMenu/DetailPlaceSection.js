import "./DetailPlaceSection.scss";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import {
  AiOutlineClockCircle,
  AiOutlineLink,
  AiOutlineProfile,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const DetailPlaceSection = ({ detailItem }) => {
  const index = detailItem.index;
  console.log(index);
  return (
    <div className="place_section_container">
      <div className="place_section_contents">
        <div className="place_section">
          <GrLocation className="place_section_icon" />
          {index && index.address ? index.address : ""}
        </div>
        <div className="place_section border">
          <IoCallOutline className="place_section_icon" />
          {index && index.call ? index.call : ""}
        </div>
        <div className="place_section border">
          <AiOutlineClockCircle className="place_section_icon" />
          {index && index.영업시간 ? index.영업시간 : ""}
        </div>
        <div className="place_section border">
          <div className="link">
            <AiOutlineLink className="place_section_icon" />
            <a
              href={index && index.link ? index.link : ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              {index && index.link ? index.link : ""}
            </a>
          </div>
        </div>
        <div className="place_section border">
          <AiOutlineProfile className="place_section_icon" />
          {detailItem.description}
        </div>
      </div>
    </div>
  );
};

export default DetailPlaceSection;
