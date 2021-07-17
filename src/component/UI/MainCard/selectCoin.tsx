import { FC, useState } from "react";
import { Button } from "react-bootstrap";
import SelectCoinModal from "../modal/selectCoinModal";
import { coinList } from "common";
import EthereumLogo from "assets/ethereumLogo.svg";

const SelectCoin: FC = (props) => {
  const [showCoinModal, setShowCoinModal] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<any>();

  const handleCoinChange = (id: number) => {
    setSelectedCoin(coinList.find((item) => item.id === id) );
    setShowCoinModal(false);
    
  };

  return (
    <>
      <div className={`selectCoin`}>
        <Button className="switch-btn" onClick={() => setShowCoinModal(true)}>
          {selectedCoin ? (
            <span>
              <img
                alt="Logo"
                src={EthereumLogo}
                className="custom-selectdex-logo"
              />
              {selectedCoin.name}{" "}
            </span>
          ) : (
            "Select Coin"
          )}
        </Button>
        <div></div>
        <div className="liquidity">Liquidity: 00.00</div>
      </div>
      <SelectCoinModal
        show={showCoinModal}
        handleHide={() => setShowCoinModal(false)}
        handleCoinChange={(id) => handleCoinChange(id)}
      />
    </>
  );
};

export default SelectCoin;
