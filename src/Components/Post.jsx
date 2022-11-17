
import { AccountCircle, CopyAll, Delete, Edit, Favorite, FavoriteBorder, FavoriteBorderOutlined, LocationCity, Logout, Map, MoreVert, PlaceRounded, Save, SettingsRounded, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Link, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import isl from "../Images/isl.jpg";
import user from "../Images/user.jpg";

const Post = () => {
const [open, setOpen] = useState(false);
  return (
    <Card sx={{marginTop:"10px"}}>
    <CardHeader sx={{backgroundImage: "linear-gradient(lightgrey, white)"}}
      avatar={
        <Avatar src={user}/>
      }
      action={
        <IconButton aria-label="settings" sx={{ p: 0 }}>
          <MoreVert onClick={(e) => setOpen(true)} />
        </IconButton>
      }
      title="Sajjad Saroya"
      subheader="November 16, 2022 - Islamabad"
      />
      <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      sx={{ mt: "45px" }}
      open={open}
      onClose={(e) => setOpen(false)}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
     
    >
      <MenuItem>
        <Delete />
        Delete
      </MenuItem>
      <MenuItem>
        <Edit />
        Edit
      </MenuItem>
      <MenuItem>
        <Save />
        Save
      </MenuItem>
      <MenuItem>
        <CopyAll/>
        Copy Link
      </MenuItem>
    </Menu>
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
     <Checkbox icon={<FavoriteBorderOutlined/>} checkedIcon={<Favorite sx={{color:"crimson"}}/>}/>
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post