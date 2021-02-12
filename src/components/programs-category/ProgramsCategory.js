import React, { useState, useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import "./ProgramCategory.scss";
import ProgramCard from "../program-card/ProgramCard";
import CategoryMenu from "../category-menu/CategoryMenu";
import { Categories, ProgramsList } from "../util-lists/UtilList";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProgramCardSkeleton from "../program-card/ProgramCardSkeleton";
import ProgramCompare from "../program-compare/ProgramCompare";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProgramsCategory() {
  const [progCount, setProgCount] = useState(Categories[0].attr.programs_count);
  const [showSkl, setSkl] = useState(false);

  const changeProgCount = (event) => {
    setProgCount(Categories[event].attr.programs_count);
  };

  useEffect(() => {
    setSkl(false);
    setTimeout(() => setSkl(true), 1000);
  }, [progCount]);

  const [selectedProg, setSelectedProg] = useState([]);
  const changeSelectedProg = (event) => {
    setSelectedProg([...selectedProg, ProgramsList[event]]);
  };


  return (
    <Box component="div" className="program-body" mb={3}>
      <Box component="h3" fontWeight="bold">
        Explore Programs by Category
      </Box>
      <Box component="div" mb={1}>
        Explore Executive Education Programs to match your learning needs
      </Box>
      <Box fontWeight="bold" mb={1}>
        Choose from {progCount} programs
      </Box>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Box>
            <CategoryMenu
              menuList={Categories}
              changeProgCount={changeProgCount}
            />
          </Box>
        </Grid>
        <Grid className="card-show-desktop" item xs={12} md={9}>
          <Grid container>
            {ProgramsList.map((el) => {
              return (
                <Grid key={el.id} item xs={12} sm={6}>
                  <Box>
                    {showSkl ? (
                      <ProgramCard
                        name={el.attr.name}
                        applyBy={el.attr.apply_by}
                        startDate={el.attr.start_date}
                        endDate={el.attr.end_date}
                        delivery={el.attr.delivery}
                        isNew={el.attr.new}
                        universityName={el.attr.university_name}
                        programFee={el.attr.program_fee}
                      />
                    ) : (
                      <ProgramCardSkeleton />
                    )}
                  </Box>
                </Grid>
              );
            })}
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box component="div" className="card-show-mobile">
        <Carousel
          className="pb-3"
          responsive={responsive}
          showDots={true}
          infinite={true}
        >
          {ProgramsList.map((el) => {
            return (
              <Grid key={el} item xs={12} md={6}>
                <Box>
                  {showSkl ? (
                    <ProgramCard
                      name={el.attr.name}
                      applyBy={el.attr.apply_by}
                      startDate={el.attr.start_date}
                      endDate={el.attr.end_date}
                      delivery={el.attr.delivery}
                      isNew={el.attr.new}
                      universityName={el.attr.university_name}
                      programFee={el.attr.program_fee}
                    />
                  ) : (
                    <ProgramCardSkeleton />
                  )}
                </Box>
              </Grid>
            );
          })}
        </Carousel>
      </Box>
      <Box textAlign="center" mt={3}>
        <Box
          component="span"
          className="cursor-pointer"
          fontWeight="bold"
          bgcolor="#0d4b68"
          px={2}
          py={2}
          borderRadius="4px"
          color="white"
        >
          View All ({progCount} Programs)
        </Box>
      </Box>
      <Box>
        <ProgramCompare
          progList={[ProgramsList[0], ProgramsList[1], ProgramsList[2]]}
        />
      </Box>
    </Box>
  );
}

export default ProgramsCategory;
