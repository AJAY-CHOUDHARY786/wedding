import { Outlet, Link } from "react-router-dom";
import '../Style/Header.css'

const Layout = () => {
  return (
    <>
      <header className="head">
        <div className="containere">
          <nav className="navbar">
            <div className="right">
             
              <Link className="link" to="/Home">Home</Link>

              
              <Link className="link" to="/Ourwork"> Ourwork</Link>

            
              <Link className="link" to="/Services"> Service</Link>
            </div>
            <a href="" className="logo">
              <img
                src="https://image1.jdomni.in/storeLogo/24062021/02/36/3E/03E515B753E7AD405316CABEE4_1624521005211.png?output-format=webp"
                alt=""
                style={{ height: "100px" }}
              />
            </a>
            <div className="left">
              <Link className="link" to="/About"> About Us</Link>
              <a href="" className="link">
              Testimoniols
              </a>
              <Link className="link" to="/Contact"> Contact</Link>

            </div>
           
          </nav>
          <div className="ham-icon">
            <div className="ham-icon-lines">
            <div className="ham-line1"></div>
              <div className="ham-line1"></div>
              <div className="ham-line1"></div>
            </div>
              
            </div>
        </div>
      </header>

      <Outlet />
    </>
  )
};

export default Layout;