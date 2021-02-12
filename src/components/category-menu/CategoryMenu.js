import React, { useState } from "react";
import { ListItem, List, Divider, Box } from "@material-ui/core";
import "./CategoryMenu.scss";

function CategoryMenu(props) {
  const menuList = props.menuList;
  const [selected, setSelected] = useState(0);

  const onSelect = (index) => {
    setSelected(index);
    props.changeProgCount(index);
  };

  return (
    <Box component="div" className="menu-box" border="1px solid #184b69" mt={3}>
      <Box
        component="h4"
        mb={0}
        className="menu-title"
        px={2}
        py={2}
        color="white"
        bgcolor="#051821"
      >
        Program Categories
      </Box>
      <Divider />
      <div className="menu-items">
        <List component="nav">
          {menuList.map((category, index) => {
            return (
              <div key={category.id}>
                <ListItem
                  button
                  selected={selected == index}
                  onClick={() => onSelect(index)}
                >
                  <Box
                    component="div"
                    color={selected == index ? "#051821" : "#5c5c5c"}
                  >
                    <i className={category.attr.icon + " mr-2"}></i>{" "}
                    {category.attr.name} ({category.attr.programs_count})
                  </Box>
                </ListItem>
                {index !== menuList.length - 1 && <Divider />}
              </div>
            );
          })}
        </List>
      </div>
    </Box>
  );
}

export default CategoryMenu;
