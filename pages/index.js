import React from "react";
import { PostCard, PostWidget, Categories } from "../components";
// import FixedBottomNavigation from '../components';
import { getPosts } from "../services";

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
import Link from "next/link";

// grid grid-cols-2 gap-0
export default function Home({ posts }) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  return (
    <div className="container mx-auto lg:px-6 px-2 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 lg:grid-cols-2 lg:grid gap-5">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node}  author Categories />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8" id="recents">
            <PostWidget />
            <Categories />
            
          </div>
        </div>
      </div>
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />

        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            className="lg:absolute "
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link
              href="#recents"
              className="flex flex-col text-center text-xs pb-2"
            >
              <BottomNavigationAction
                // onClick={() => {
                //   window.scrollTo(PostWidget);
                // }}

                // label="Recents"
                icon={<RestoreIcon />}
              />
              Recents
            </Link>
            <BottomNavigationAction
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              label="Collections"
              icon={<FavoriteIcon />}
            />
            <Link
              href="#recents"
              className="flex flex-col text-center text-xs pb-2"
            >
              <BottomNavigationAction
                // onClick={() => {
                //   window.scrollTo(PostWidget);
                // }}

                // label="Recents"
                icon={<CategoryIcon />}
              />
              Categories
            </Link>
            <BottomNavigationAction label="Authors" icon={<GroupIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
