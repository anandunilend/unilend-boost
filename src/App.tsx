import BigNumber from "bignumber.js";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";

import { ThemeContext } from "context/themeContext";
import Layout from "component/UI/layout";
import MainCard from "component/UI/MainCard/mainCard";

import "./App.scss";
import { WalletContext } from "context/connectWallet/connectWalletContext";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

function App() {
  const data: any = useContext(ThemeContext);
  const { handleConnect } = useContext(WalletContext);

  useEffect(() => {
    let wallet = Cookies.getJSON("wallet");
    if (wallet) {
      handleConnect(wallet);
    }
  }, []);

  return (
    <div className={`App ${data.theme}`}>
      <Layout>
        <MainCard />
      </Layout>
    </div>
  );
}

export default App;
