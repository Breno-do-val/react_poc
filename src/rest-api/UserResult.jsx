const UserResult = (props) => {
  return (
    <>
      <img src={props.user.picture.medium} alt={props.user.login.email} /><br />
      <span>Login: {props.user.login.username}</span><br />
      <span>Email: {props.user.email}</span><br />
      <span>Gender: {props.user.gender}</span><br />
      <span>Cell: {props.user.cell}</span><br />
      <span>Date of Birth: {new Date(props.user.dob.date).toLocaleDateString("pt-BR")} Age: {props.user.dob.age}</span><br />
      <span>Name: {props.user.name.title} {props.user.name.first} {props.user.name.last}</span><br />
      <span>Phone: {props.user.phone}</span><br />
    </>
  );
}

export default UserResult;