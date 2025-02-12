import { NavLink } from "react-router-dom";
import LogoIcon from "../../components/icons/LogoIcon";
import LogoText from "../../components/icons/LogoText";
import RulerAndPenIcon from "../../components/icons/RulerAndPenIcon";
import Signature from "../../components/Signature";
import "./../../core.css";
import "./styles.css";
import ClickIcon from "../../components/icons/ClickIcon";

function Index() {
  return (
    <div id="index-page-container">
      <RulerAndPenIcon fill="#fff" width={70} heigth={70} />
      <div id="index-page-group">
        <LogoIcon width={26} height={26} fill="#fff" />
        <LogoText height={20} fill="#fff" />
        <b>|3GI~G:B</b>
      </div>
      <p className="description">
        ✨ A place where you can find anything organized ✨
      </p>
      <div id="index-page-links-container">
        <NavLink to="/cpp" className="link-button-style-1">
          CPP
        </NavLink>
        <NavLink to="/java" className="link-button-style-1">
          JAVA
        </NavLink>
        <NavLink to="/php" className="link-button-style-1">
          PHP
        </NavLink>
        <NavLink to="/linux" className="link-button-style-1">
          Linux
        </NavLink>
        <NavLink to="/ro" className="link-button-style-1">
          RO
        </NavLink>
        <NavLink to="/bdd" className="link-button-style-1">
          Bases de donées
        </NavLink>
        <NavLink to="/art-et-culture" className="link-button-style-1">
          Art & Culture
        </NavLink>
        <NavLink to="/anglais" className="link-button-style-1">
          Anglais
        </NavLink>
        <NavLink to="/francais" className="link-button-style-1">
          Francais
        </NavLink>
      </div>

      <div id="index-page-search-field-container">
        <ClickIcon id="index-page-search-field-icon" />
        <form>
          <input
            type="search"
            id="index-page-search-field"
            placeholder="Search for anything..."
          />
        </form>
      </div>
      <p className="description" style={{ fontSize: 13 }}>
        Search feature will be available soon 🧙‍♂️
      </p>

      <Signature />
    </div>
  );
}

export default Index;
