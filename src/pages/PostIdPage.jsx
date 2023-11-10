import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";
import PostServise from "../API/PostServise";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchingPostById, isLoaging, error] = useFetching(async () => {
    const response = await PostServise.getById(params.id);
    setPost(response.data);
  });

  const [fetchingComments, commLoaging, commError] = useFetching(async () => {
    const response = await PostServise.getCommentByIdPost(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchingPostById();
    fetchingComments();
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста с ID {params.id}</h1>

      {error && <h1>Произошла ошибка {error}</h1>}
      {isLoaging 
        ? <Loader />
        : <div>
            {post.id}. {post.title}
          </div>
      }

      <h1>Комментарии</h1>

      {commError && <h1>Произошла ошибка {commError}</h1>}  

      {commLoaging 
        ? <Loader />
        : <div>

          {comments.map(comm => 
            <div key={comm.id} style={{marginTop: 15}}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
            </div>
          )}

          </div>}

    </div>
  );
};

export default PostIdPage;
