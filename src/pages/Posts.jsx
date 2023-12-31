import './../styles/App.css';
import { useState } from 'react';
import PostForm from './../components/PostForm';
import PostFilter from './../components/PostFilter';
import PostList from './../components/PostList';
import MyModal from './../components/UI/MyModal/MyModal';
import MyButton from './../components/UI/button/MyButton';
import { usePost } from './../hooks/usePosts';
import { useEffect } from 'react';
import PostServise from './../API/PostServise';
import Loader from './../components/UI/Loader/Loader';
import useFetching from './../hooks/useFetching';
import { getPageCount} from './../utils/pages';
import Pagination from './../components/UI/pagination/Pagination';


function Posts() {

  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedAndSearchedPost = usePost(posts, filter.sort, filter.query)
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostServise.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className='App'>

      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>Создавать</MyButton>

      <MyModal visible={modal} setVisible={setModal}>

        <PostForm create={createPost} />

      </MyModal>

      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка {postError}</h1>}
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}><Loader /></div>
        : <PostList
          remove={removePost}
          posts={sortedAndSearchedPost}
          title={"Посты про Js"}
        />
      }

      <Pagination page={page} totalPages={totalPages} changePage={changePage}/>


    </div>
  )

}

export default Posts;