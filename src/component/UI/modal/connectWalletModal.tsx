import React, { useContext } from "react";
import { ThemeContext } from "context/themeContext";
import { Modal, Button } from "react-bootstrap";
import "./index.scss";
import "../../../theme.scss";
import { walletList } from "common";
import { WalletContext } from "context/connectWallet/connectWalletContext";

const ConnectWalletModal = (props) => {
  const data: any = useContext(ThemeContext);
  const { handleConnect } = useContext(WalletContext);
  return (
    <div className={`${data.theme}`}>
      <Modal
        className={`model-switch-${data.theme}`}
        {...props}
        centered
        size="md"
      >
        <Modal.Body className="custom-modalBody">
          {walletList(1).map((wallet: any) => (
            <Button
              key={wallet.id}
              className="custom-modal-btn"
              onClick={() => {
                handleConnect(wallet);
                props.onHide();
              }}
            >
              <img src={wallet.logo} alt="" />
              <div>{wallet.walletName.toUpperCase()}</div>
            </Button>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ConnectWalletModal;
