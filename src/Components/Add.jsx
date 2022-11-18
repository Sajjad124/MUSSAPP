import React, { useState } from "react";
import user from "../Images/user.jpg";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add New Post"
        sx={{
          backgroundColor: "#4267B2",
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={open} onClose={(e) => setOpen(false)}>
        <Box width={400} height={260} bgcolor={"background.default"} color="text.primary" borderRadius={5} p={3}>
          <Typography variant="h6" color="#4267B2" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={user} sx={{ width: 30, height: 30 }} />
            <Typography variant="span" fontWeight={500}>
              Sajjad Saroya
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={2}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" fullWidth>
            <Button sx={{ backgroundColor: "#4267B2" }}>Post</Button>
            <Button sx={{ backgroundColor: "#4267B2", width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
