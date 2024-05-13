import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const Token = () => {
  const [token, setToken] = useState<any>();
  const [dataDecode, setdataDecode] = useState<any>();

  useEffect(() => {
    setToken(localStorage.getItem("token"))
    setdataDecode(jwtDecode(localStorage.getItem("token") as string))
  }, []);

  return { dataDecode, token };
};

export default Token;
