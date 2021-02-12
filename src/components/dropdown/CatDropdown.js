import React, { useState } from "react";
import { Box } from "@material-ui/core";
import "./Dropdown.scss";
import { Categories } from "./../util-lists/UtilList";

function CDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const clickHandler = (prog) => {
    setClick(!click);
    alert(`${prog} category is clicked`);
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click
            ? "dropdown-menus category-dropdown clicked"
            : "dropdown-menus category-dropdown"
        }
      >
        {Categories.map((item) => {
          return (
            <Box
              borderBottom="1px solid whitesmoke"
              component="li"
              key={item.id}
              className="dropdown-link"
              onClick={() => clickHandler(item.attr.name)}
            >
              <i className={item.attr.icon + " mr-2"}></i>
              {item.attr.name} ({item.attr.programs_count})
            </Box>
          );
        })}
      </ul>
    </>
  );
}

export default CDropdown;
