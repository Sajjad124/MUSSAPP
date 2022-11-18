import { Box } from "@mui/material";
import Post from "./Post";
import React from "react";
import Add from "./Add";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
    
  );
};

export default Feed;
