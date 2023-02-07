import React from "react";
import Button from "../atoms/Button";
import ScreenCenter from "../layout/ScreenCenter";

export default function Intro() {
  return (
    <div>
      <ScreenCenter>
        <Button
          content="Check answers"
          className="text-secondary bg-bg_primary disabled:opacity-70"
        />
      </ScreenCenter>
    </div>
  );
}
