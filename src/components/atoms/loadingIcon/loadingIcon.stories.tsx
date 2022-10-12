import React from "react";
import ProgressBar from "./ProgressBar";

export const LoadingIcons = () => (
  <div style={{ display: "flex", gap: "30px" }}>
    <ProgressBar />
  </div>
);

export default {
  title: "Atoms/Loading icons",
  subcomponent: { ProgressBar },
};
