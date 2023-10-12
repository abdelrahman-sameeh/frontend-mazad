import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterComponent = () => {
  return (
    <div
      className=" bg-dark text-light w-100 p-3 fw-bold footer"
    >
      <div className="container between">
        <span>
          جميع الحقوق محفوظة 
          <FontAwesomeIcon icon={faCopyright} />
        </span>
        <div>
          <a href="https://www.linkedin.com/in/abdelrahman-gadallah-384508231" target="_blank" className="fs-5 text-light ms-2">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/abdelrahman-sameeh" target="_blank" className="fs-5 text-light ms-2">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
