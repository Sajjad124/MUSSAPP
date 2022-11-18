import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import isl from "../Images/isl.jpg";
import user from "../Images/user.jpg";
import user2 from "../Images/umair.jpeg";
import user3 from "../Images/mz.jpeg";
import user4 from "../Images/user4.jpeg";
import shez from "../Images/shez.JPG";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={400} color=" #4267B2" mb={2}>
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
        <Typography
          variant="h6"
          fontWeight={400}
          color=" #4267B2"
          mt={2}
          mb={2}
        >
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={120}>
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
          <ImageListItem>
            <img src={shez} alt="sah" loading="lazy" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={400} color=" #4267B2" mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={user2} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={user3} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={user4} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
