import React, { useState } from "react";
import "./style.scss";
import ExtraItem from "../ExtraItem/ExtraItem";

export default function ExtrasList({ extras }) {
  const [openId, setId] = useState(null);

  return (
    <ul className="accordion">
      {extras.map((extra, id) => {
        return (
          <ExtraItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            extra={extra}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
}
