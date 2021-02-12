import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import {
  TrendingProgs,
  FeaturedProgs,
  Categories,
} from "../util-lists/UtilList";
import Zoom from "react-reveal/Zoom";
import "./Footer.scss";

const ProgramList = [
  { name: "Trending Programs", list: TrendingProgs },
  { name: "Featured Programs", list: FeaturedProgs },
  { name: "Program Categories", list: Categories },
];

function ProgramComp() {
  return (
    <Box component="div" bgcolor="whitesmoke" pb={3}>
      <Container maxWidth="lg">
        <Grid container>
          {ProgramList.map((programName) => {
            return (
              <Grid key={programName.name} item xs={12} sm={4}>
                <Zoom duration={1000}>
                  <Box component="div" m={3}>
                    <Box
                      component="h3"
                      fontWeight="bold"
                      display="flex"
                      justifyContent="center"
                    >
                      {programName.name}
                    </Box>
                    <Box display="flex" justifyContent="center" mt={3}>
                      <Grid container spacing={2}>
                        {programName.list.map((prog) => {
                          return (
                            <Grid item key={prog.id} item xs={6}>
                              <Box
                                component="span"
                                fontSize="13px"
                                pl={2}
                                className="program-name-2-line"
                                onClick={() =>
                                  alert(`${prog.attr.name} is clicked`)
                                }
                              >
                                {prog.attr.name}
                              </Box>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Box>
                  </Box>
                </Zoom>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProgramComp;
