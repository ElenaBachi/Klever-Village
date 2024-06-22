import React, { useState } from "react";
import SurroundingItem from "../SurroundingItem/SurroundingItem";
import { surroundings } from "../../../../../data";
import "./style.scss";

export default function SurroundingsList() {
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
