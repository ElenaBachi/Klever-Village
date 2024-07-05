import React from "react";
import { activities } from "../../../data";
import ActivityItem from "./elements/ActivityItem/ActivityItem";
import "./style.scss";

export default function Activities() {
  return (
    <section className="activities">
      <div className="wrap">
        <h2 className="activities__title">Чем заняться</h2>
        <p className="activities__description">
          <span>
            Klever Village - идеальное место для проведения активного отдыха на
            свежем воздухе.
          </span>
          У нас вы найдете интересные и разнообразные развлечения, чтобы сделать
          ваш отдых незабываемым и полным приключений.
        </p>

        <ul className="activities__list">
          {activities.map((activity) => {
            return <ActivityItem {...activity} key={activity.id} />;
          })}
        </ul>
      </div>
    </section>
  );
}
