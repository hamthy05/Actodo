import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [eusername, setEUsername] = useState();
  const [epassword, setEPassword] = useState();
  const [ruser, setRUser] = useState(true);

  const user = props.user;

  function handleUsername(e) {
    setEUsername(e.target.value);
  }

  function handlePassword(e) {
    setEPassword(e.target.value);
  }

  function checkUser() {
    var userFound = false;

    user.forEach((item) => {
      if (item.username === eusername && item.password === epassword) {
        console.log("Login Successful");
        userFound = true;
        navigate("/landing", { state: { user: eusername } });
      }
    });

    if (userFound === false) {
      console.log("Login Failed");
      setRUser(false);
    }
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {ruser ? (
          <p>I help you manage your activities after login :)</p>
        ) : (
          <p className="text-red-500">Please Sign Up Before you Login</p>
        )}

        <div className="flex flex-col gap-2 my-2">
          <input
            onChange={handleUsername}
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"
          />

          <input
            onChange={handlePassword}
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
          />

          <button
            onClick={checkUser}
            className="bg-[#8272DA] w-24 p-1 rounded-md"
          >
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <Link className="underline" to={"/signup"}>
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
