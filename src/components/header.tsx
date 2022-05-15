import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faDollar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
function Header() {
  return (
    <header>
      <div className="header-main">
        <div className="header">
          <div className="contacts">
            <div>
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <a href="tel: +998902455060">+998902455060</a>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <a href="mailto: ismatovsanjarbek@yandex.ru">
                ismatovsanjarbek@yandex.ru
              </a>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faMapMarker} />
              <a href="#">Surxondaryo, Muzrabot</a>
            </div>
          </div>
          <div className="profile">
            <div>
              <FontAwesomeIcon className="icon" icon={faDollar} />
              <p>USD</p>
            </div>
            <div>
              <FontAwesomeIcon className="icon" icon={faUser} />
              <p>My accaunt</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-input">
        <div className="header-content">
          {" "}
          <img src={logo} alt="Logo" />
          <div className="full-input">
            <select>
              <option value="all">Barchasi</option>
              <option value="Smartfontlar">Smartfonlar</option>
            </select>
            <input />
            <button>Qidirish</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
