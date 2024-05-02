import React, { useState } from "react";
import "./style.scss";
import SurroundingItem from "../surrounding-item/_Surrounding-item";

export default function SurroundingsList({ surroundings }) {
  const [openId, setId] = useState(null);

  return (
    <ul className="accordion">
      {surroundings.map((item, id) => {
        return (
          <SurroundingItem
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
