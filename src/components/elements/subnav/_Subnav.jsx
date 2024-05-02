import { subnavItems } from "../../../data";
import SubnavItem from "../subnav-item/_Subnav-item";
import "./style.scss";

function Subnav() {
  const subnavList = subnavItems.map((item) => {
    return <SubnavItem {...item} />;
  });

  return (
    <div className="subnav__container">
      <ul className="subnav">{subnavList}</ul>
    </div>
  );
}

export default Subnav;
