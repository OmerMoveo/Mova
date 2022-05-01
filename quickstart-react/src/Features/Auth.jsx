import React from "react";
import { useEffect } from "react";
import axios from "axios";
function Auth() {
  const afterAuth = () => {
    axios.post("https://auth.monday.com/oauth2/token").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <a href="https://auth.monday.com/oauth2/authorize?client_id=2a3766346b29fd19373ca3be37837ffa">
        Please Authenticate
      </a>
    </div>
  );
}

export default Auth;
