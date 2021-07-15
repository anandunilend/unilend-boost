import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "context/themeContext";
import EthereumLogo from "assets/ethereumLogo.svg";
import { Modal, FormControl } from "react-bootstrap";
import "./coinModel.scss";
import { searchWord } from "Helpers";
import { coinList } from "common";

const SelectCoinModal = (props) => {
  const data: any = useContext(ThemeContext);
  const [searchCoin, setSearchCoin] = useState("");
  const [filteredList, setFilteredList] = useState<any>();
  useEffect(() => {
    if (searchCoin.trim().length > 0) {
      let filtered: any = coinList.filter((e: any) => {
        return searchWord(e.name, searchCoin);
      });
      console.log(filtered);
      setFilteredList(filtered);
    } else {
      setFilteredList(coinList);
    }
  }, [searchCoin]);
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
              onChange={(event) => {
                setSearchCoin(event.target.value);
              }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-coin-body">
          {filteredList &&
            filteredList.map((list) => (
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
