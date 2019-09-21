import React from "react";

export default function HistoryPush() {
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}>change path</button>
    </div>
  );
}
