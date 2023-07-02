import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="header_search">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to={!user && '/login'}>
          {/* <Link to="/Login"> */}
          <div             onClick={handleAuthenticaton}className="header_option">

            <span className="header_optionLineOne">
              {/* Hello Guest */}

              Hello {!user ? 'Guest' : user.email}
            </span>

            <span className="header_optionLineTwo">
              {/* Sign In */}
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
          </Link>
          <Link to='/orders' className="Header_clearlink">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
          </Link>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout" className="Header_clearlink">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="header">
        <span className="header_option">All</span>
        <span className="header_option">Clinic</span>
        <span className="header_option">Customer Service</span>
        <span className="header_option">Best Sellers</span>
        <span className="header_option">Amazon Basics</span>
        <span className="header_option">New Releases</span>
        <span className="header_option">Prime</span>
        <span className="header_option">Today's Deals</span>
        <span className="header_option">Music</span>
        <span className="header_option">Books</span>
        <span className="header_option">Registry</span>
        <span className="header_option">Fashion</span>
        <span className="header_option">Amazon Home</span>
        <span className="header_option">One Medical</span>
        <span className="header_option">Gift Cards</span>
        <br />
        <br />
        <br />
        <br />
        <span className="header_option">Shop Mother's Day</span>
      </div> */}
    </>
  );
}

export default Header;
