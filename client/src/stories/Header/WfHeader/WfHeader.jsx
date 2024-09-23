import React from "react";
import "./style.css";

export const WfHeader = () => {
  return (
    <div className="WF-header">
      <div className="overlap">
        <div className="logo-nav-frame">
          <div className="nav-bar">
            <div className="nav-bar-button">
              <div className="button-text">About</div>
              <div className="dropdown-arrow-down">
                <div className="overlap-group">
                  <img className="line" alt="Line" src="line-16.svg" />
                  <img className="img" alt="Line" src="line-17.svg" />
                </div>
              </div>
            </div>
            <div className="div">
              <div className="text-wrapper">Products</div>
              <div className="dropdown-arrow-down">
                <div className="overlap-group">
                  <img className="line" alt="Line" src="line-16.svg" />
                  <img className="img" alt="Line" src="line-17.svg" />
                </div>
              </div>
            </div>
            <div className="div">
              <div className="text-wrapper">Services</div>
              <div className="dropdown-arrow-down">
                <div className="overlap-group">
                  <img className="line" alt="Line" src="line-16.svg" />
                  <img className="img" alt="Line" src="line-17.svg" />
                </div>
              </div>
            </div>
            <div className="button-text-wrapper">
              <div className="button-text-2">Locations</div>
            </div>
            <div className="div-wrapper">
              <div className="button-text-3">Contact&nbsp;&nbsp;Us</div>
            </div>
          </div>
          <div className="logo">
            <div className="text-wrapper-2">Tri-State Paper Inc.</div>
            <p className="p">Experts in Packaging and end of line machinery.</p>
          </div>
        </div>
        <div className="tagline-frame">
          <p className="text-wrapper-3">Expert Guidance. Tailored Solutions. One Trusted Source.</p>
        </div>
      </div>
    </div>
  );
};
