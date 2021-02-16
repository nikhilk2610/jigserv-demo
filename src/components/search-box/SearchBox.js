import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./SearchBox.scss";
import { Box, Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Select from "react-select";
import { Categories, Location } from "../util-lists/UtilList";
import Fade from "react-reveal/Fade";

const CatOptions = Categories.map((category) => {
  return {
    value: category.id,
    label: category.attr.name,
  };
}).slice(1);

const LocOptions = Location.map((location) => {
  return {
    label: location,
    value: location,
  };
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#49b3cd",
    "&:hover": {
      backgroundColor: "#42a3ba",
    },
    height: "100%",
    width: "100%",
    borderRadius: 0,
  },
}))(Button);

const colourStyles = {
  control: (styles) => ({
    ...styles,
    borderRadius: "0",
  }),
  input: (styles) => ({
    ...styles,
    height: "2.4rem",
    width: "9rem",
  }),
};

function SearchBox() {
  const [isBackdrop, setBackdrop] = useState(false);
  const openBackdrop = () => {
    setBackdrop(true);
  };
  const closeBackdrop = () => {
    setBackdrop(false);
  };

  const [advSearch, setAdvSearch] = useState(false);

  const toggleAdvSearch = () => {
    setAdvSearch(!advSearch);
  };

  return (
    <div className="position-relative">
      <div className={isBackdrop ? "backdrop" : ""}></div>
      {isBackdrop && (
        <i
          className={
            advSearch
              ? "adv-close-button fas fa-times-circle fa-2x close-button"
              : "fas fa-times-circle fa-2x close-button"
          }
          onClick={closeBackdrop}
        ></i>
      )}
      <Box
        className="search-box"
        pt={3}
        pb={2}
        px={1}
        width={advSearch ? "60%" : "50%"}
      >
        <div></div>
        <Container py={3}>
          <Grid container>
            <Grid item xs={12} sm={9} className="input-box">
              <form className="search-input">
                {advSearch && (
                  <Fade right duration={100}>
                    <Box className="search-input">
                      <Box>
                        <Select
                          placeholder="Category"
                          styles={colourStyles}
                          options={CatOptions}
                        />
                      </Box>
                      <Box className="sec-search">
                        <Select
                          placeholder="Location"
                          styles={colourStyles}
                          options={LocOptions}
                        />
                      </Box>
                    </Box>
                  </Fade>
                )}
                <input
                  placeholder="Search for Courses/Programs"
                  onFocus={openBackdrop}
                />
              </form>
            </Grid>
            <Grid item xs={12} sm={3}>
              <ColorButton
                variant="contained"
                color="primary"
                className="search-button"
              >
                <span className="font-weight-bold">Search</span>
              </ColorButton>
            </Grid>
          </Grid>
          <Box
            component="div"
            mt={1}
            textAlign="end"
            color="white"
            onClick={toggleAdvSearch}
          >
            <span className="cursor-pointer">
              {advSearch ? "Keyword Search" : "Advance Search"}
            </span>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default SearchBox;
