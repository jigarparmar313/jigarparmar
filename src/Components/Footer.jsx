import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
              <footer className="my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#home" end>
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#experience"
                    >
                      Experience
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#skills">
                      Skills
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="#projects"
                    >
                      Projects
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <p className="text-center text-white">
                  Created By Jigar Parmar with {"\t"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                </p>
              </footer>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
