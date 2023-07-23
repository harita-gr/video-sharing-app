import { Grid, Paper, Typography } from "@mui/material";

const VideoItem = ({ onVideoSelect, video }) => {
  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", padding: "5px" }}
        >
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
