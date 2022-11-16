import {  Favorite, LocationCity, Map, MoreVert, PlaceRounded, Share } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import isl from "../Images/isl.jpg";
import user from "../Images/user.jpg";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
    <Card>
      <CardHeader sx={{backgroundImage: "linear-gradient(lightgrey, white)"}}
        avatar={
          <Avatar sx={{ bgcolor: "red" }} src={user}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Sajjad Saroya"
        subheader="November 16, 2022 - Islamabad"
        />
      {/* <CardContent sx={{display:"flex", alignItems:"center"}}><PlaceRounded/>Islamabad</CardContent> */}
      <CardMedia
        component="img"
        height="275"
        image={isl}
        alt="No Image found"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Always be yourself, express yourself, have faith in yourself,
        do not go out and look for a successful personality and duplicate it.
        <br/>
        <Link>#personality #love #fashion #enneagram #instagram #photography #style 
        #instagood #attitude #motivation #personalitytypes #follow #model #life #type 
        #like #psychology #introvert #quotes #lifestyle #personalities</Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{backgroundImage: "linear-gradient(white, lightgrey)"}}>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  );
};

export default Feed;
