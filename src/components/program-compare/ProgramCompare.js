import React from "react";
import "./ProgramCompare.scss";
import { Box } from "@material-ui/core";

function ProgramCompare(props) {
  const progList = props.progList;
  return (
    <div>
      <Box component="div" className="compare-box" p={2}>
        <Box componen="div">
          {progList.map((el) => {
            return (
              <Box key={el.id} component="div" width={80} height={80}>
                <img src="https://download.logo.wine/logo/Massachusetts_Institute_of_Technology/Massachusetts_Institute_of_Technology-Logo.wine.png" />
                <Box bgcolor="white">
                    {props.name}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}

export default ProgramCompare;
