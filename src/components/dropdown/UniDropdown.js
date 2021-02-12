import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import "./Dropdown.scss";
import { TopUniversities, OtherUniversities } from "./../util-lists/UtilList";

function UniDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const clickHandler = (prog) => {
    setClick(!click);
    alert(`${prog} university is clicked`);
  };

  return (
    <>
      <Box
        onClick={handleClick}
        display="flex"
        p={1}
        className={
          click
            ? "dropdown-menus university-dropdown clicked"
            : "dropdown-menus university-dropdown"
        }
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box component="div" borderRight="1px solid lightgray">
              <Box component="div" fontWeight="bold" m={1}>
                Top Universities/B-Schools
              </Box>
              {TopUniversities.map((item) => {
                return (
                  <Box
                    ml={1}
                    mb={1}
                    component="div"
                    key={item.id}
                    className="uni-dropdown-link"
                    onClick={() => clickHandler(item.attr.name)}
                  >
                    {item.attr.name}
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="other-uni">
              <Box component="div" fontWeight="bold" mx={1} my={1}>
                Other Universities/B-Schools
              </Box>
              {OtherUniversities.map((item) => {
                return (
                  <Box
                    ml={2}
                    mb={1}
                    component="div"
                    key={item.id}
                    className="uni-dropdown-link"
                    onClick={() => clickHandler(item.attr.name)}
                  >
                    {item.attr.name}
                  </Box>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UniDropdown;
