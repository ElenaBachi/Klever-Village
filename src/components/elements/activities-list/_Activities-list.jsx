import React from "react";
import { activities } from "../../../data";
import ActivityItem from "../activity-item/_Activity-item";
import "./style.scss";

function ActivitiesList() {
  return (
    <section className="activities">
      <div className="wrap">
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
