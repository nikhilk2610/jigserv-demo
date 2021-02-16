import React from "react";
import { Box } from "@material-ui/core";
import "./Banner.scss";

function Banner() {
  return (
    <div>
      <Box >
        <div className="position-relative">
          <Box className="banner">
            <img src="https://jigservdigital.com/ae7a9a6ec02604266cc8ec3dcb358036.png" />
          </Box>
          <div className="first-text banner-text">
            <div className="text-center">Your Partner in</div>
            <div className="text-center">
              <span className="rounded font-weight-bold bg-danger px-1">
                Professional Learning
              </span>
            </div>
          </div>
          <div className="second-text banner-text">
            <div className="text-center">
              <span className="rounded font-weight-bold bg-danger px-1 text-center">
                Explore Executive Education Programs
              </span>
            </div>
            <div className="text-center">to Match Your Learning Needs</div>
          </div>
          <div className="third-text banner-text">
            <div className="text-center">
              <span className="rounded font-weight-bold bg-danger px-1">
                1-Click Comparison
              </span>{" "}
              for Multiple
            </div>
            <div className="text-center">
              Programs to Facilitate Decision Making
            </div>
          </div>
          <div className="fourth-text banner-text">
            <div className="text-center">
              <span className="rounded font-weight-bold bg-danger px-1 text-center">
                Profile-based
              </span>
            </div>
            <div className="text-center">Program Recommendations</div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Banner;
