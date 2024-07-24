import React, { useState } from "react";
import CafeContent from "./elements/CafeContent/CafeContent";
import Modal from "../../elements/Modal/Modal";
import { cafe } from "../../../data";
import "./style.scss";

export default function Cafe() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section className="cafe" id="cafe">
      <CafeContent />

      <div className="working-hours">
        <h4>Время работы кафе</h4>

        <ul>
          {cafe.workingHours.map((item, index) => {
            return (
              <li key={index}>
                <span className="title">{item.title}</span>

                {item.description ? (
                  <ul className="note">
                    {item.description.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
