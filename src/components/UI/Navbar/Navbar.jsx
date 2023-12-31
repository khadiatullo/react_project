import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

const Navbar = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <div className="navbar__items">
        <Link className="links" to="/about">О сайте</Link>
        <Link className="links" to="/">Посты</Link>
        <MyButton onClick={logout}>Выйти</MyButton>
      </div>
    </div>
  );
};

export default Navbar;
