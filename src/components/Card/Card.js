import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({
  missionName,
  rocketName,
  flightNumber,
  launchStatus,
  image,
  upcoming,
  details,
  launchYear,
}) {
  console.log(upcoming);
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300vh"
        image={image}
        alt="spacex image"
      />
      <CardContent alighnItems="left" sx={{ mt: 2 }}>
        <Typography variant="h6">Flight Number - {flightNumber}</Typography>
        <Typography variant="h6">Mission Name -{missionName}</Typography>
        <Typography variant="h6">Rocket Name -{rocketName}</Typography>
        <Typography variant="h6">Launch Year -{launchYear}</Typography>
        <Typography variant="h6">
          Launch Status -{!launchStatus ? <b>Success</b> : "Failed"}
        </Typography>
        <Typography variant="h6">
          Upcoming -{upcoming ? "Yes" : "No"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
