import { navigationItems } from "../../../data";
import NavigationItem from "../navigation-item/_Navigation-item";
import "./style.scss";

function Subnav() {
  const subnavList = navigationItems.map((item) => {
    return item.isSubnav ? <NavigationItem {...item} /> : "";
  });

  return (
    <div className="subnav__container">
      <ul className="subnav">{subnavList}</ul>
    </div>
  );
}

export default Subnav;
