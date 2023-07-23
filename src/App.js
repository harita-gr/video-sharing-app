import { useState } from "react";

import { Grid, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import youtube from "./api/youtube";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  const handleSubmit = async (searchItem) => {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: searchItem,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  return (
    <>
      <Typography variant="h3" textAlign="center" p={5}>
        Video Sharing App
      </Typography>
      <Grid sx={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            {/* Search Bar */}
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            {/* Video Detail */}
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            {/* Video List */}
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
