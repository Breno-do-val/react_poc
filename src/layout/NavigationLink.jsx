import { Link } from "react-router-dom";

const NavigationLink = (props) => {
  return (
    <>
      <Link className="nav-link" to={props.link.url}>{props.link.title}</Link>
    </>
  );
}

export default NavigationLink;