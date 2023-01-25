import { Card, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";

export default function Timer({
  title,
  project,
  elapsed,
  runningSince,
  id,
  onTrashClick,
  onStartClick,
  onStopClick,
  onEditClick,
}) {
  const [timerIsRunning, setTimerIsRunnig] = useState(false);
  const timer = renderElapsedString(elapsed, runningSince);

  function handleEditClick() {
    onEditClick(id);
  }

  function handleStartClick() {
    onStartClick(id);
  }

  function handleDelete() {
    onTrashClick(id);
  }

  function handleStopClick() {
    onStopClick(id);
  }
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345 }}>
        <Typography
          sx={{ fontSize: 28 }}
          color="text.secondary"
        >
          {title}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <DeleteIcon onClick={handleDelete} />

          <ModeEditIcon onClick={handleEditClick} />
        </Box>
        <TimerActionButton
          isTimerRunning={runningSince}
          onStartClick={handleStartClick}
          // onStartClick={() => {
          //   console.log("on start click");
          // }}
          onStopClick={handleStopClick}
        />
      </Card>
    </Container>
  );
}
