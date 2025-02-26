import { useState } from "react";
import "./Comments.css";
import SingleComment from "./SingleComment";

const Comments = () => {
  const [comments, setComments] = useState([
    { author: "Іван", time: "2025-02-26 14:30", text: "Текст коментаря 1!" },
    { author: "Анна", time: "2025-02-26 14:35", text: "Текст коментаря 2!" },
    { author: "Сергій", time: "2025-02-26 14:40", text: "Текст коментаря 3!" },
    { author: "Марія", time: "2025-02-26 14:45", text: "Текст коментаря 4!" },
    { author: "Олексій", time: "2025-02-26 14:50", text: "Текст коментаря 5!" },
  ]);

  const [newComment, setNewComment] = useState({ author: "", text: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newComment.author || !newComment.text) return;

    const newCommentWithTime = {
      ...newComment,
      time: new Date().toISOString().slice(0, 16).replace("T", " "), // Генеруємо поточну дату
    };

    setComments((prevComments) => [newCommentWithTime, ...prevComments]);
    setNewComment({ author: "", text: "" });
  };

  const handleDelete = (index) => {
    setComments((prevComments) => prevComments.filter((_, i) => i !== index));
  };

  return (
    <div className="comments">
      <h2>Коментарі</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Автор:
            <input
              type="text"
              name="author"
              value={newComment.author}
              onChange={handleInputChange}
              placeholder="Ваше ім'я"
            />
          </label>
        </div>
        <div>
          <label>
            Текст:
            <textarea
              name="text"
              value={newComment.text}
              onChange={handleInputChange}
              placeholder="Ваш коментар"
            />
          </label>
        </div>
        <button type="submit">Додати коментар</button>
      </form>

      {comments.map((comment, index) => (
        <div key={index}>
          <SingleComment
            author={comment.author}
            time={comment.time}
            text={comment.text}
          />
          <button onClick={() => handleDelete(index)}>Видалити</button>
        </div>
      ))}
    </div>
  );
};

export default Comments;
