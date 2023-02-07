import React from "react";
import Button from "../atoms/Button";

export default function Intro() {
  return (
    <div className="">
      <Button
        content="Check answers"
        className="text-secondary bg-bg_primary disabled:opacity-70"
        isDisabled={true}
      />
      <Button
        content="Check answers"
        className="text-secondary bg-bg_primary disabled:opacity-70"
      />
      <Button />
      <Button
        content="Check answers"
        className="text-primary bg-bg_select"
      />
      <Button
        content="Check answers"
        className="text-primary border-btn_border"
      />
      <Button
        content="Check answers"
        className="text-primary bg-bg_success"
      />
      <Button
        content="Check answers"
        className="text-primary bg-bg_error opacity-50"
      />
      <Button
        content="Check answers"
        className="text-primary border-btn_border opacity-50"
      />
    </div>
  );
}
