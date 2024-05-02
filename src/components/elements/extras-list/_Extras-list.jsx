import React, { useState } from "react";
import "./style.scss";
import ExtraItem from "../extra-item/_Extra-item";

export default function ExtrasList({ extras }) {
  const [openId, setId] = useState(null);

  return (
    <ul className="accordion">
      {extras.map((item, id) => {
        return (
          <ExtraItem
            onClick={() => (id === openId ? setId(null) : setId(id))}
            item={item}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
}
