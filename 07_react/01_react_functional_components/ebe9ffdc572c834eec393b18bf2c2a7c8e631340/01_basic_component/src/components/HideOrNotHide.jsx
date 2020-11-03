import React from "react";

export const HideOrNotHide = () => {
  const [visibility, setVisibility] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        {visibility ? "Hide content" : "Reveal content"}
      </button>
      {visibility ? <p>Some text</p> : null}
    </div>
  );
};
