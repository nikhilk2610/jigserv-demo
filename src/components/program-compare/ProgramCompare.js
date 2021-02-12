import React from "react";
import "./ProgramCompare.scss";
import { Box, Grid } from "@material-ui/core";
import { ZERO_CONSTANT } from "../config/config";
import Fade from "react-reveal/Fade";

function ProgramCompare({ data, progList, closePopup }) {
  let newProgList = data.filter(
    (obj) => progList.indexOf(obj.id) >= ZERO_CONSTANT
  );
  return (
    <div>
      <Box component="div" className="compare-box" p={3}>
        <i
          onClick={closePopup}
          className="fas fa-times-circle close-compare fa-lg cursor-pointer"
        ></i>
        <Grid container spacing={2}>
          {newProgList.map((el) => {
            return (
              <Grid
                item
                key={el.id}
                xs={12}
                sm={progList.length == 3 ? 4 : progList.length == 2 ? 6 : 12}
              >
                <Fade right duration={200}>
                  <Grid container className="prog-box">
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
        <Box component="div" className="but-group" mt={3} mb={1}>
          <Box
            component="span"
            className="cursor-pointer"
            px={3}
            py={1}
            fontWeight="bold"
            color="white"
            onClick={closePopup}
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
