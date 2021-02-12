import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
  },
  media: {
    height: 180,
  },
}));

function ProgramCardSkeleton() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card} xs={12} sm={6}>
        <Skeleton animation="wave" variant="rect" className={classes.media} />
        <CardContent className="text-center">
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={25} width="100%" />
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={20} width="100%" />
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={35} width="100%" />
            <Box display="flex" justifyContent="space-between">
              <Skeleton animation="wave" height={10} width="30%" />
              <Skeleton animation="wave" height={10} width="30%" />
            </Box>
            <Skeleton
              className="m-auto"
              animation="wave"
              height={40}
              width="50%"
            />
          </React.Fragment>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProgramCardSkeleton;
