import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volví a renderizar");
  return (
    <button
      onClick={() => {
        increment(5);
      }}
      className="btn btn-primary"
    >
      Incrementar
    </button>
  );
});
