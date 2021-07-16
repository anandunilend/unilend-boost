import { FC } from "react";
import { Button, Card } from "react-bootstrap";

const TransactionCard: FC = (props) => {
  return (
    <>
      <div className={`transactionCard`}>
        <h3 className="transactionHeader">Amount</h3>
        <Card className={`input-card`}>
          <Card.Body>
            <div className={`transactionBody`}>
              <input type="text" placeholder="0.0" />
              <Button className={`max-button`}>Max</Button>
            </div>
          </Card.Body>
        </Card>
        <div className={`main-action`}>
          <Button className="switch-btn selected main-action-btn">Make a flash Transfer</Button>
        </div>
      </div>
    </>
  );
};

export default TransactionCard;
