import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "context/themeContext";
import EthereumLogo from "assets/ethereumLogo.svg";
import { Modal, FormControl, Button } from "react-bootstrap";
import "./coinModel.scss";
import { searchWord } from "Helpers";
import { coinList } from "common";
import { WalletContext } from "context/connectWallet/connectWalletContext";
import axios from "axios";

const SelectCoinModal = (props) => {
  const data: any = useContext(ThemeContext);
  const { setSearchCustomToken,searchCustomToken ,setAddress,searchToken,setCustomCoin} = useContext(WalletContext);

  const [searchCoin, setSearchCoin] = useState("");
  const [filteredList, setFilteredList] = useState<any>();
  const [isExist, toggleIsExist] = useState<boolean>(false);
  const [searchedTokenText, setSearchedTokenText] = useState<string>("");

  useEffect(() => {
      if (searchCoin.trim().length > 0) {
        let filtered: any = coinList.filter((e: any) => {
          return (searchWord(e.name, searchCoin) || searchWord(e.symbol, searchCoin) || searchWord(e.address, searchCoin ));
        });
        console.log(filtered);
        setFilteredList(filtered);
      } else {
        setSearchCoin("");
        setFilteredList(coinList);
      }
  }, [searchCoin]);

  const handleSetSearchCoin = (event) => {
    setSearchCoin(event?.target.value);
    setAddress(event?.target.value)
  }

  useEffect(() => {
    return () => console.log("close");
  }, []);

  useEffect(() => {
    if (searchedTokenText.length > 0) {
      searchToken(searchedTokenText);
      handleSearchToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedTokenText]);

  const handleSearchToken = async () => {
    let isAlreadyExist = await coinList.some((item: any) => {
      return item.address === searchedTokenText;
    });
    toggleIsExist(isAlreadyExist);
  };

  const handleImport = async () => {
    setCustomCoin(
      {
        ...searchCustomToken,
        address: searchedTokenText,
        isCustomToken: true,
      },
      "add"
    );
    searchToken("");
  };

  // useEffect(() => {
  //   const data = {
  //     "jsonrpc":"2.0",
  //     "method":"alchemy_getTokenMetadata",
  //     "params":[`${searchCoin}`],
  //     "id":1
  // };
  // axios.post("https://eth-mainnet.alchemyapi.io/v2/maI7ecducWmnh8z5s2B1H2G4KzHkHMtb",JSON.stringify(data))
  // .then((res) => {
  //   setSearchCustomToken(res.data.result);
  // })
  // }, [searchCoin]);

  

  return (
    <div>
      <Modal
        size="xl"
        className={`modal-coin-${data.theme}`}
        onHide={() => {
          props.handleHide();
          setFilteredList(coinList);
        }}
        show={props.show}
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: "0" }}>
          <Modal.Title>
            <FormControl
              className="custom-coin-search"
              type="text"
              placeholder="Search by name or address"
              value={searchCoin}
              // onChange={(event) => {setSearchCoin(event.target.value);}}
              onChange={(event) => handleSetSearchCoin(event)}
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
                  // setSearchCustomToken("");
                }}
              >
                <div className="custom-coinlist-div">
                  <img alt="Logo" src={EthereumLogo} className="coin-logo" />
                  <span className="coin-title">{list.name}</span>
                </div>
                <div>
                  <span>$ 2020</span>
                </div>
              </div>
            ))} 

          {searchCustomToken ? 
          <div
                className="selectcoin-list"
                onClick={() => {
                  props.handleCoinChange(searchCustomToken.id);
                  setSearchCoin("");
                }}
              >
                <div className="custom-coinlist-div">
                  <img alt="Logo" src={searchCustomToken.logo} className="coin-logo" />
                  <span className="coin-title">{searchCustomToken.symbol}</span>
                </div>
                <div>
                  <Button 
                  onClick={() => handleImport()}
                  >Import</Button>
                </div>
              </div> : <div></div>}
             
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectCoinModal;
