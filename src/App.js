/** @jsx jsx */
import { useState, Fragment } from "react";
import { jsx, Global } from "@emotion/core";

import { useInterval } from "./useInterval";
import { time } from "./time";

const DAY_IN_MILLISECONDS = 86400000;
const HOUR_IN_MILLISECONDS = 3600000;
const MINUTE_IN_MILLISECONDS = 60000;
const SECOND_IN_MILLISECONDS = 1000;

function App() {
  const [now, setNow] = useState(new Date());
  useInterval(() => {
    setNow(new Date());
  }, 1000);

  const passed = now - time;

  const days = Math.floor(passed / DAY_IN_MILLISECONDS);
  const passedUpToHours = passed - days * DAY_IN_MILLISECONDS;
  const hours = Math.floor(passedUpToHours / HOUR_IN_MILLISECONDS);
  const passedUpToMinutes = passedUpToHours - hours * HOUR_IN_MILLISECONDS;
  const minutes = Math.floor(passedUpToMinutes / MINUTE_IN_MILLISECONDS);
  const passedSeconds = passedUpToMinutes - minutes * MINUTE_IN_MILLISECONDS;
  const seconds = Math.floor(passedSeconds / SECOND_IN_MILLISECONDS);

  return (
    <Fragment>
      <Global
        styles={{
          "html, body, #root": {
            height: "100%",
            margin: 0,
            backgroundColor: "#0d1015"
          }
        }}
      />
      <div
        css={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div css={{
          fontSize: 48,
          fontFamily: "Arial",
          color: "#E84855"
        }}>
          {days}:{hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
