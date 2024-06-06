import Proptypes from "prop-types";

function UserGreeting(props) {
  //   if (props.isLoggedin) {
  //     return <h2>Welcome {props.userName}</h2>;
  //   } else {
  //     return <h2>Please login to continue</h2>;
  //   }

  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.userName}</h2>
  );
  const LoginMessage = (
    <h2 className="Login-message">Please login to continue</h2>
  );

  return props.isLoggedin ? welcomeMessage : LoginMessage;

  //   return props.isLoggedin ? (
  //     <h2 className="welcome-message">Welcome {props.userName}</h2>
  //   ) : (
  //     <h2 className="Login-message">Please login to continue</h2>
  //   );
}

UserGreeting.Proptypes = {
  isLoggedin: Proptypes.bool,
  userName: Proptypes.string,
};

UserGreeting.defaultProps = {
  isLoggedin: false,
  userName: "Guest",
};

export default UserGreeting;
