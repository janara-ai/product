import { FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Login = () => {
  const [userAuthData, setuserAuthData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setuserAuthData({ ...userAuthData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (userAuthData.email && userAuthData.password) {
      localStorage.setItem("loggedIn", true);
    } else {
      navigate("/products");
    }
  };
  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <div className="col-sm-4">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="enter your email"
            type="email"
            style={{ padding: "10px" }}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="type your password"
            type="password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};
