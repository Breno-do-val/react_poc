const Description = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button className={`btn btn-outline-${props.btnType}`} onClick={e => props.handleClick()}>Get</button>
    </>
  );
}

export default Description;