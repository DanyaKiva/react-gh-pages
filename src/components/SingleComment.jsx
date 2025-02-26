import "./Comments.css";

const SingleComment = ({ author, time, text }) => {
  return (
    <div className="comment">
      <div className="author">{author}</div>
      <div className="time">{time}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default SingleComment;
