import InstagramIcon from "../InstagramIcon/InstagramIcon";
import VkIcon from "../VkIcon/VkIcon";
import TelegramIcon from "../TelegramIcon/TelegramIcon";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";

import "./style.scss";

export default function Contacts() {
  return (
    <ul className="contacts">
      <li className="instagram">
        <a
          href="https://www.instagram.com/klever__village/?igsh=b2RkMnBkbWc3eXZw"
          target="_blank"
        >
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/79812710703?text=Здравствуйте! Хотел бы забронировать номер в вашем отеле на два человека с 15 по 20 мая. Какие есть варианты размещения и цены?"
          target="_blank"
        >
          <WhatsAppIcon />
        </a>
      </li>
      <li>
        <a href="https://t.me/klevervillage" target="_blank">
          <TelegramIcon />
        </a>
      </li>
      <li>
        <a href="https://vk.com/klevervillage" target="_blank">
          <VkIcon />
        </a>
      </li>
      <li className="tel">
        <a href="tel:+79812710703" className="tel-num">
          Позвоните нам <br /> +7 981 271-07-03
        </a>
      </li>
    </ul>
  );
}
