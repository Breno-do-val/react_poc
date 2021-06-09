import NavigationLink from "./NavigationLink";

const VerticalNavigation = (props) => {
  return (
    <nav className="nav flex-column">
      {props.menus.map((menu, index) => <NavigationLink key={index} link={menu} />)}
    </nav>
  );
}

export default VerticalNavigation;