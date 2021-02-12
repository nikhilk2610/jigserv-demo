import React from "react";
import { Box, Grid, Button, withStyles } from "@material-ui/core";
import "./Programcard.scss";
import moment from "moment";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "#0d4b68",
    "&:hover": {
      backgroundColor: "#051821",
    },
    borderRadius: "25px",
    padding: "8px 30px",
  },
}))(Button);

function ProgramCard(props) {
  const sDate = moment(props.startDate).format("ll");
  const eDate = moment(props.endDate).format("ll");
  const applyBy = moment(props.applyBy).format("ll");
  return (
    <Box component="div" position="relative">
      <Box component="div" className="program-card" m={3} pb={1}>
        <Box className="program-img">
          {props.isNew && (
            <Box
              position="absolute"
              left={0}
              top="2%"
              component="span"
              borderRadius="0 25px 25px 0px"
              p={1}
              pr={2}
              bgcolor="#e42525"
              color="white"
              fontWeight="bold"
              fontSize="14px"
              mt={3}
            >
              New
            </Box>
          )}
        </Box>
        <Box className="logo-img">
          <img src="https://download.logo.wine/logo/Massachusetts_Institute_of_Technology/Massachusetts_Institute_of_Technology-Logo.wine.png" />
        </Box>
        <Box
          className="program-info"
          display="flex"
          justifyContent="space-between"
          color="white"
          px={2}
          py={1}
          mb={5}
          fontSize="12px"
          fontWeight="bold"
        >
          <div>
            <i className="fas fa-user-graduate mr-1"></i> {props.delivery}
          </div>
          <div>
            <i className="far fa-money-bill-alt mr-1"></i> {props.programFee}
          </div>
        </Box>
        <Box className="program-name" component="h5" textAlign="center" mx={2}>
          {props.name}{" "}
        </Box>
        <Box component="div" textAlign="center">
          {props.universityName}
        </Box>
        <Box color="grey" fontSize="12px" textAlign="center" mt={1} px={3}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <i className="far fa-calendar-check mr-2"></i>
              {sDate} - {eDate}
            </Grid>
            <Grid item xs={12} sm={6}>
              <i className="far fa-hourglass mr-2"></i>
              Apply By: {applyBy}
            </Grid>
          </Grid>
        </Box>
        <Box textAlign="center" my={2}>
          <ColorButton variant="contained" color="primary">
            <span className="font-weight-bold">
              View Details <i className="fas fa-arrow-right ml-2"></i>
            </span>
          </ColorButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ProgramCard;
