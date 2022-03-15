import React from "react";
import Typical from "react-typical";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
      <div className="profile-details">
        <div className="colz">
        <div className="colz-icons">
          <a href="https://github.com/js449">
            <i className="fa fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/jsingh284/">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
        </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Jay</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Graduate Web-Developer 😍",
                    5000,
                    "Graduate Software-Developer ❤️",
                    5000,
                    "React/React Native Dev 🎶",
                    5000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knack of building application with front and back-end operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
            {""}
            Hire Me{" "}
            </button>
              <a href='cv.pdf' download='Jagdeep cv.pdf'>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
