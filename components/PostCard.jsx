import React from "react";
import { useState, useRef } from "react";
import Link from "next/link";
import moment from "moment";
import { saveAs } from 'file-saver'
// material ui
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DownloadIcon from '@mui/icons-material/Download';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: ".5rem",
  p: 4,
};

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
// const href = window.location.href;

// copyToClipboard = (e) => {

// };

const PostCard = ({ post }) => {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const [Modalopen, setModalOpen] = React.useState(false);
  const ModalhandleOpen = () => setModalOpen(true);
  const ModalhandleClose = () => setModalOpen(false);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  console.log(post);
  const downloadImage = () => {
    saveAs( post.featuredImage.url) // Put your image url here.
  }

  return (
    <div className="">
      {post.excerpt ? (
        <div className="bg-white rounded-lg shadowed p-0 lg:p-2 lg:pb-5 pb-5 mb-8">
          {/* post image holder */}
          <div className="flex relative overflow-hidden pb-80 mb-6">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-t-lg"
            />
          </div>
          <h1 className="transition duration-600 text-center hover:text-green-500 truncate mb-8 cursor-pointer text-3xl font-semibold">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h1>
          <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
            <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
              <img
                src={post.author.photo.url}
                alt={post.author.name}
                height="40"
                width="40"
                className="rounded-full align-middle "
              />
              <div className="   ">
                <p className="inline ml-2 align-middle text-gray-700 font-semibold">
                  {post.author.name}
                </p>
                <p className="text-gray-500 ">author</p>
              </div>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <Tooltip title="created date">
                <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
              </Tooltip>
              <p className="text-black">{post.categories.name}</p>
            </div>
          </div>
          <p className="text-center text-lg text-gray-700 font-normal px-4  lg:px-5 truncate ">
            {post.excerpt}
          </p>

          <div className="text-center">
            <Link href={`/post/${post.slug}`}>
              <span className="transition duration-600 transform hover:-translate-y-1 hover:-translate-x-1 inline-block bg-green-500 font-medium rounded-lg text-white px-8 py-3 mt-4 cursor-pointer">
                Continue reading
              </span>
            </Link>
          </div>
          <IconButton
            className=" z-40 right-0"
            aria-label="share"
            onClick={ModalhandleOpen}
          >
            <ShareIcon className="transition duration-600 hover:text-green-500 text-gray-500" />
          </IconButton>
          <IconButton
            className=" z-40 right-0 hover:text-green-500"
            aria-label="settings"
            onClick={handleClick(TransitionUp)}
          >
            <BookmarkIcon className="transition duration-600 hover:text-green-500 text-gray-500" />
          </IconButton>
          <Snackbar
            open={open}
            onClose={handleClose}
            TransitionComponent={transition}
            message="Post saved as bookmark"
            key={transition ? transition.name : ""}
            autoHideDuration={6000}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Post saved as bookmark
            </Alert>
          </Snackbar>
          <Modal
            open={Modalopen}
            onClose={ModalhandleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Copy Post Link
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {/* <input type="text" value={`/post/${post.slug}`} /> */}
                <a href={`/post/${post.slug}`}>
                  localhost:3000{`/post/${post.slug}`}
                </a>
              </Typography>
            </Box>
          </Modal>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadowed p-0 lg:p-0 lg:pb-1 pb-2 mb-8">
          {/* post image holder */}
          <div className="flex relative overflow-hidden pb-80 mb-6">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-t-lg"
            />
          </div>

          <div className="block lg:flex text-center items-center justify-around mb-8 w-full">
            <div className="flex items-center justify-center mb-0 lg:mb-0 w-full lg:w-auto mr-8">
              <img
                src={post.author.photo.url}
                alt={post.author.name}
                height="40"
                width="40"
                className="rounded-full align-middle "
              />
              <div className="   ">
                <p className="inline ml-2 align-middle text-gray-700 font-semibold">
                  {post.author.name}
                </p>
                <p className="text-gray-500 ">author</p>
              </div>
            </div>

            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <Tooltip title="created date">
                <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
              </Tooltip>
              <p className="text-black">{post.categories.slug}</p>
            </div>

            <Tooltip title="download quote image">
              
              <IconButton>
                <DownloadIcon onClick={downloadImage} />
              </IconButton>
            </Tooltip>
          </div>
          
        </div>

      )}
    </div>
  );
};

export default PostCard;
