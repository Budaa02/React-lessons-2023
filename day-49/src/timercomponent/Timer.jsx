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
  runningtime,
}) {
  const [timerIsRunning, setTimerIsRunnig] = useState(false);
  const [runningTime, setRunningTime] = useState(0);
  const timer = renderElapsedString(elapsed, runningSince);

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
        >
          <h1>{runningtime}</h1>
        </Box>
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
          <DeleteIcon />
          <ModeEditIcon />
        </Box>
        <TimerActionButton
          isTimerRunning={timerIsRunning}
          onStartClick={() => {
            console.log("on start click");
            setTimerIsRunnig(true);
          }}
          onStopClick={() => {
            setTimerIsRunnig(false);
          }}
        />
      </Card>
    </Container>
  );
}
