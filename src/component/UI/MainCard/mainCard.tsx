import { FC, useContext } from "react";
import { Card } from "react-bootstrap";
import SelectCoin from "./selectCoin";
import { WalletContext } from "context/connectWallet/connectWalletContext";
import SelectDex from "./selectDex";
import TransactionCard from "./transactionCard";

const MainCard: FC = (props) => {
  const { networkError } = useContext(WalletContext);

  return (
    <Card className={`paper`}>
      <div className={`network-message`}>{networkError}</div>
      <Card.Body className={`custom-card-body`}>
        <Card className={`custom-card`}>
          <Card.Body>
            <SelectDex />
          </Card.Body>
        </Card>
        <Card className={`custom-card`}>
          <Card.Body>
            <SelectCoin />
          </Card.Body>
        </Card>
        <Card className={`custom-card`}>
          <Card.Body>
            <TransactionCard />
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
};

export default MainCard;
