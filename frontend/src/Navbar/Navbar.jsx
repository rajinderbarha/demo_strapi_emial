
import "./Navbar.css";
import logo from "../asserts/images/logo.svg";
import search_icon from "../asserts/images/search.svg";

function Navbar() {
  
  return (
    <>
        <nav style={{display: 'flex', justifyContent: "space-between", padding:"20px 30px"}}>
         <div className="logo" >
          <img src={logo} alt="logo" />
         </div>
         <div className="links" style={{display: 'flex', padding: "10px 10px"}}>
          <div className="link" style={{ padding: "0 40px"}}><a href="/Location">Locations</a></div>
          <div className="link" style={{ padding: "0 40px"}}><a href="/Services">Services</a></div>
          <div className="link" style={{ padding: "0 40px"}}><a href="/About">About</a></div>
          <div className="link" style={{ padding: "0 40px"}}><a href="/Blog">Blog</a></div>
          <div className="link" style={{ padding: "0 40px"}}><a href="/contact">Contact US</a></div>
          <div className="link" style={{ padding: "0 40px"}}><img src={search_icon} alt="search-icon"/></div>
         </div>
        </nav>
      
    </>
  );
}

export default Navbar;
