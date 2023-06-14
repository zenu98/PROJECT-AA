import classes from "./CloseBtn.module.css";
import { IoClose } from "react-icons/io5";
const CloseBtn = (props) => {
  return (
    <div>
      <IoClose className={classes.closeBtn} onClick={props.onClick} />
    </div>
  );
};

export default CloseBtn;
