import React, { useEffect, useState} from "react";
import App from "../../App";
import logoSplash from "../../assets/imgs/splash-logo.svg";
import { Override } from "./styled";

const Splash = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Override>
      <img
        src={logoSplash}
        alt={"Logo da 4food"}
      />
    </Override>
  ) : (
    <App />
  );
};

export default Splash;