import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me volví a renderizar");

  return <small>{value}</small>;
});
