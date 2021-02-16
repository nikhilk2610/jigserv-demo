import React, { useState } from "react";
import "./ProgramCompare.scss";
import { Box, Grid } from "@material-ui/core";
import { ZERO_CONSTANT } from "../config/config";
import Fade from "react-reveal/Fade";

function ProgramCompare({ data, progList, closePopup, removeSelectedProg }) {
  let newProgList = data.filter(
    (obj) => progList.indexOf(obj.id) >= ZERO_CONSTANT
  );

  const [isCollapsed, setCollapse] = useState(false);
  const toggleCollapse = () => {
    setCollapse(!isCollapsed);
  };

  return (
    <div>
      <Box component="div" className="compare-box" p={3}>
        <i
          onClick={toggleCollapse}
          className={
            (isCollapsed ? "fa-chevron-circle-up" : "fa-chevron-circle-down") +
            " fas toggle-compare fa-lg  cursor-pointer"
          }
        ></i>
        <Box component="div" className="program-list">
          {!isCollapsed ? (
            <Grid container spacing={2}>
              {newProgList.map((el) => {
                return (
                  <Grid
                    item
                    key={el.id}
                    xs={12}
                    sm={
                      progList.length == 3 ? 4 : progList.length == 2 ? 6 : 12
                    }
                  >
                    <Fade up duration={100}>
                      <Grid container className="prog-box position-relative">
                        <i
                          className="fas fa-times-circle close-but position-absolute bg-white"
                          onClick={() => removeSelectedProg(el.id)}
                        ></i>
                        <Grid item xs={4} sm={12}>
                          <img
                            width="100%"
                            height={80}
                            src="https://img.emg-services.net/HtmlPages/HtmlPage12273/untitled-design-10.jpg"
                          />
                        </Grid>
                        <Grid item xs={8} sm={12}>
                          <Box
                            bgcolor="white"
                            display="flex"
                            textAlign="center"
                            justifyContent="center"
                            alignItems="center"
                            padding={1}
                            fontWeight="bold"
                            height="100%"
                          >
                            <span className="program-name-2-line">
                              {el.attr.name}
                            </span>
                          </Box>
                        </Grid>
                      </Grid>
                    </Fade>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Box
              component="h5"
              textAlign="center"
              py={1}
              border="1px solid white"
              color="white"
              borderRadius="5px"
              onClick={toggleCollapse}
              className="cursor-pointer"
            >
              Selected Programs ({newProgList.length})
            </Box>
          )}
        </Box>

        <Box component="div" className="but-group" mt={3} mb={1}>
          <Box
            component="span"
            className="cursor-pointer"
            px={3}
            py={1}
            fontWeight="bold"
            color="white"
            onClick={() => closePopup()}
          >
            Remove All
          </Box>
          <Box
            className="cursor-pointer"
            component="span"
            borderRadius="25px"
            fontWeight="bold"
            px={3}
            py={1}
            my={2}
            mx={4}
            bgcolor="white"
          >
            Compare
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ProgramCompare;
