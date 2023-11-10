import { useState } from "react"
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"

function PostForm({create}) {

const [post, setPost] = useState({ title: '', body: '' })


function addNewPost(e) {
    e.preventDefault()

    const newPost = {
        ...post,
        id: Date.now()
    }

    if (post.title == '' || post.body == '') {
      alert("Пустая строка!")
    } else {
      create(newPost)
      setPost({ title: '', body: '' })
    }
  
  }
  return (
    <div>
      <form>
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Название"
        />
        <MyInput
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          value={post.body}
          type="text"
          placeholder="Описание"
        />
        <MyButton onClick={addNewPost}>Добавить</MyButton>
      </form>
    </div>
  );
}

export default PostForm;
