import React from "react";
import { activities } from "../../../data";
import ActivityItem from "../activity-item/_Activity-item";
import "./style.scss";

function ActivitiesList() {
  return (
    <section className="activities">
      <div className="wrap">
        <h2 className="activities__title">Чем заняться</h2>
        <p className="activities__description">
          Наши загородные домики - идеальное место для проведения активного
          отдыха на свежем воздухе. <br /> В Klever Village вы найдете
          интересные и разнообразные развлечения, чтобы сделать ваш отдых
          незабываемым и полным приключений.
        </p>

        <ul className="activities__list">
          {activities.map((activity) => {
            return <ActivityItem {...activity} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default ActivitiesList;
