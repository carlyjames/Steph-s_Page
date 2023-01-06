import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CategoryIcon from "@mui/icons-material/Category";
import GroupIcon from "@mui/icons-material/Group";

import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import PostWidget from "./PostWidget";

// function refreshMessages() {
//   const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

//   return Array.from(new Array(50)).map(
//     () => messageExamples[getRandomInt(messageExamples.length)],
//   );
// }

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  //   const [messages, setMessages] = React.useState(() => refreshMessages());

  //   React.useEffect(() => {
  //     ref.current.ownerDocument.body.scrollTop = 0;
  //     setMessages(refreshMessages());
  //   }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          className="lg:absolute text-green-500"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => {
              window.scrollTo(PostWidget);
            }}
            label="Recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            label="Favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            label="Categories"
            icon={<CategoryIcon />}
          />
          <BottomNavigationAction label="Authors" icon={<GroupIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
