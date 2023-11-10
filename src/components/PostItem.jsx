import MyButton from "./UI/button/MyButton";
import './../styles/App.css'
import { useNavigate } from "react-router-dom";

function PostItem(props) {

  const router = useNavigate()
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div className="description">{props.post.body}</div>
      </div>

      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
