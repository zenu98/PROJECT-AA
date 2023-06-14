import "./Board.scss";
import { useDispatch, useSelector } from "react-redux";
import { getReviewData } from "../../../store/http-action";
import { BsChatDots, BsPencilSquare } from "react-icons/bs";

const Board = ({ name }) => {
  const dispatch = useDispatch();

  const review = useSelector((state) => state.mark.review);

  const placeName = name;
  console.log(placeName);
  console.log(review, name);
  const data = review
    .filter((item) => item.placeName === placeName)
    .map((element) => ({ id: element.id, comment: element.comment }));
  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.review.value);
    const comment = event.target.review.value;

    fetch("http://localhost:4000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
        placeName,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit review");
        }
        return response.json();
      })
      .then((result) => {
        console.log("Review submitted successfully:", result);

        dispatch(getReviewData());
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
  };

  return (
    <div className="comment_section_container">
      <div className="comment_section_contents">
        <ul className="comment_section">
          {data.map((item) => (
            <li key={item.id} className="comment_section border">
              <p>
                <span>익명{item.id}</span>
                {item.comment}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <p className="submit">
          <BsPencilSquare className="icon_a" />

          <textarea
            name="review"
            maxlength="19"
            placeholder="한줄 평 작성"
          ></textarea>
          <button type="submit">
            <BsChatDots className="icon" />
          </button>
        </p>
      </form>
    </div>
  );
};

export default Board;
