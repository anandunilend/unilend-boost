import React, { useContext } from "react";
import { ThemeContext } from "context/themeContext";

import { Modal, Row, Col } from "react-bootstrap";
import "./index.scss";
import { chainList } from "common";
import { WalletContext } from "context/connectWallet/connectWalletContext";

const SelectChainModal = (props) => {
  const data: any = useContext(ThemeContext);
  const { handleChainChange } = useContext(WalletContext);
  return (
    <div>
      <Modal className={`model-switch-${data.theme}`} {...props} centered>
        <Modal.Header closeButton style={{ borderBottom: "0" }}>
          <Modal.Title className="selectchain-title">Select Chain</Modal.Title>
          {/* <div >X</div> */}
        </Modal.Header>
        <Modal.Body className="custom-selectchain-body">
          {chainList.map((list) => (
            <div
              key={list.id}
              className="selectchain-list"
              onClick={() => {
                handleChainChange(list.id);
                props.onHide();
              }}
            >
              <img alt="Logo" src={list.logo} className="network-logo" />
              <span className="network-title">{list.name}</span>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectChainModal;
