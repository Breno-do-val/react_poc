const Column = (props) => {
  return (
    <div className={"col-" + props.size}>
      {props.children}
    </div>
  );
}

export default Column;