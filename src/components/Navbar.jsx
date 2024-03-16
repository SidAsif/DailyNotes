import {
  AddCircleOutline,
  Delete,
  Menu,
  Notes,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
const Searching = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
// const StyledTypo = styled(Menu)(({ theme }) => ({
//   display: "none",
//   [theme.breakpoints.up("sm")]: {
//     display: "block",
//   },
// }));

export default function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const navbar = {
    backgroundColor: "purple",
  };

  return (
    <AppBar sx={{ ...navbar }} position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          aria-label="logo"
          onClick={() => setDrawerOpen(true)}
        >
          <Menu />
        </IconButton>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => {
            setDrawerOpen(false);
          }}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {["Notes", "Add Notes", "Reminders", "Trash"].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {text === "Notes" ? (
                          <Link to={"/"}>
                            <Notes />
                          </Link>
                        ) : text === "Add Notes" ? (
                          <Link to={"/Create"}>
                            <AddCircleOutline />
                          </Link>
                        ) : text === "Reminders" ? (
                          <Notifications />
                        ) : (
                          <Link to={"/Delete"}>
                            <Delete />
                          </Link>
                        )}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
        <Typography
          variant="h6"
          component={"div"}
          sx={{ display: { xs: "none", sm: "block", flexGrow: 1 } }}
        >
          DAILY NOTES
        </Typography>
        <Searching>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Searching>
        <Typography sx={{ mr: 2 }} variant="h6">
          Asif
        </Typography>
        <Avatar alt="avatar-asif" />
      </Toolbar>
    </AppBar>
  );
}
