import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {

  const navigate = useNavigate();

  
  const user = props.user;
  const setUser = props.setUser;


  const [eusername, setEUsername] = useState();
  const [epassword, setEPassword] = useState();

  function handleUsername(e) {
    setEUsername(e.target.value);
  }

  function handlePassword(e) {
    setEPassword(e.target.value);
  }

  function addUser() {
    setUser([...user, { username: eusername, password: epassword }]);
    navigate("/");
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>Sign Up here :)</p>

        <div className="flex flex-col gap-2 my-2">
          <input onChange={handleUsername}
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"
          />

          <input onChange={handlePassword}
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
          />

          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Confirm Password"
          />

          <button onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md">Sign Up</button>

          <p>
            Already have an account?{" "}
            <Link className="underline" to={"/"}>
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
