import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { Navbar, Nav, Button, Row, Col } from "react-bootstrap";
import UboostLogo from "assets/uLogo.svg";
import "./index.scss";
import { ThemeContext } from "context/themeContext";
import ConnectWalletModal from "component/UI/modal/connectWalletModal";
import SelectChainModal from "component/UI/modal/selectChainModal";
import { WalletContext } from "context/connectWallet/connectWalletContext";
import { shortenAddress } from "Helpers";

const NavBar = () => {
  const data: any = useContext(ThemeContext);
  const { connectedAccount, selectedChain, isConnecting } =
    useContext(WalletContext);
  const [modalShow, setModalShow] = useState(false);
  const [selectChainModalShow, setSelectChainModalShow] = useState(false);

  return (
    <div>
      <div className="custom-container">
        <Row>
          <Navbar className="custom-Navbar" collapseOnSelect expand="lg">
            <Col xs={12} sm={12} md={4} lg={4}>
              <Navbar.Brand className="custom-header" href="#home">
                <img alt="Logo" src={UboostLogo} className="header-logo" />
                <span className="header-title">Uboost</span>
              </Navbar.Brand>
            </Col>

            <Col xs={12} sm={12} md={8} lg={8}>
              <Nav className="custom-navLink">
                <Button
                  className="header-btn"
                  onClick={() => setSelectChainModalShow(true)}
                >
                  {selectedChain ? selectedChain.name : "Select Chain"}
                </Button>
                {connectedAccount ? (
                  <Button className="header-btn">
                    {shortenAddress(connectedAccount)}
                  </Button>
                ) : (
                  <Button
                    className="header-btn"
                    onClick={() => setModalShow(true)}
                  >
                    {isConnecting ? "loading" : "Connect wallet"}
                  </Button>
                )}
                <Switch
                  checked={data.theme === "light" ? true : false}
                  onChange={data.handleToggleTheme}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#fff"
                  offColor="#215355"
                  onHandleColor="#FED330"
                  offHandleColor="#071F21"
                  height={30}
                  width={55}
                  className="switch"
                />
              </Nav>
            </Col>
          </Navbar>
        </Row>
        <ConnectWalletModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <SelectChainModal
          show={selectChainModalShow}
          onHide={() => setSelectChainModalShow(false)}
        />
      </div>
    </div>
  );
};

export default NavBar;
