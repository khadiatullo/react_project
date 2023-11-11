import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/github.io/react_project', element: <Posts/>},
    {path: '/', element: <Posts/>},
    {path: '/about', element: <About/>},
    {path: '/posts/:id', element: <PostIdPage/>}
]

export const publicRoutes = [
    {path: '/github.io/react_project', element: <Login/>},
    {path: '/', element: <Login/>},
    {path: '/posts/:id', element: <Login/>},
    {path: '/about', element: <Login/>},
]
