import React, { useContext,useState } from "react";
import { ThemeContext } from "context/themeContext";
import EthereumLogo from "assets/ethereumLogo.svg";
import { Modal, FormControl } from "react-bootstrap";
import "./coinModel.scss";
import { coinList } from "common";

const SelectCoinModal = (props) => {
  const data: any = useContext(ThemeContext);
  const[searchCoin,setSearchCoin]=useState("");
const searchCoinHandler=(event)=>{
  setSearchCoin(event.target.value);
}
  return (
    <div>
      <Modal
        size="xl"
        className={`modal-coin-${data.theme}`}
        {...props}
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "0" }}>
          <Modal.Title>
            <FormControl
              className="custom-coin-search"
              type="text"
              placeholder="Search by name or address"
              onChange={searchCoinHandler}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-coin-body">
          {coinList.filter((list)=>{
            if(searchCoin==""){
              return list;
            }else if(list.name.toLowerCase().includes(searchCoin.toLowerCase())){
              return list;
            }
          }).map((list) => ( 
            <div
              className="selectcoin-list"
              onClick={() => {
                props.handleCoinChange(list.id);
                setSearchCoin("");
              }}
            >
              <div className="custom-coinlist-div">
                <img alt="Logo" src={EthereumLogo} className="coin-logo" />
                <span className="coin-title">{list.name}</span>
              </div>
              <div>
                <span>$ {list.cost}</span>
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectCoinModal;
