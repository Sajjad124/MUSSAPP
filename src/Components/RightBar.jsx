import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import isl from "../Images/isl.jpg";
import user from "../Images/user.jpg";
import user2 from "../Images/umair.jpeg";
import user3 from "../Images/mz.jpeg";
import user4 from "../Images/user4.jpeg";

const RightBar = () => {
  return (
    <Box flex={2} p={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" sx={{ padding: "10px" }}>
        <Typography variant="h6" fontWeight={200} color=" #4267B2">
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src={user} />
          <Avatar alt="Travis Howard" src={user2} />
          <Avatar alt="Cindy Baker" src={user3} />
          <Avatar alt="Agnes Walker" />
          <Avatar alt="Trevor Henderson" src={user} />
          <Avatar alt="Trevor Henderson" />
          <Avatar alt="Trevor Henderson" src={user} />
          <Avatar alt="Trevor Henderson" src={user} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={300} color=" #4267B2">
          Latest Photos
        </Typography>
        <ImageList cols={3}>
          <ImageListItem>
            <img src={isl} alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={user} alt="" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={user2} alt="sah" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={user3} alt="sah" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src={user4} alt="sah" loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default RightBar;
