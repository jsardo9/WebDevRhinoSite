import { Link } from "react-router-dom";

// this is our navigation bar so we can jump between sections
// css was used to make it look nice and also flexible for its environment
const Nav = () => (
  // <!-- Navigation bar to jump between website sections -->
  <nav>
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/rhinocountries">Countries with Rhinos</Link>
      </li>
      <li>
        <a href="addYourOwn">Blog Page</a>
      </li>
      <li>
        <a href="moreInfo">Zoo Locations</a>
      </li>
      <li>
        <a href="featuredRhinos">Featured Rhinos</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
