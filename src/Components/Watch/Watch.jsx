import React from "react";

export default function Watch({ watch }) {
  const { name, price } = watch;
  return (
    <div>
      <h3>Watch Name:{name}</h3>
      <h3>Watch Price:{price}</h3>
    </div>
  );
}
