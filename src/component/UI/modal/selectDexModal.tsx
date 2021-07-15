import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "context/themeContext";
import VectorImg from "assets/Vector.svg";
import { Modal, Row, FormControl } from "react-bootstrap";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./dexModel.scss";
import { dexList } from "common";
import { searchWord } from "Helpers";

const SelectDexModal = (props) => {
  const data: any = useContext(ThemeContext);
  const [searchDex, setSearchDex] = useState("");
  const [filteredList, setFilteredList] = useState<any>();
  useEffect(() => {
    if (searchDex.trim().length > 0) {
      let filtered: any = dexList.filter((e: any) => {
        return searchWord(e.name, searchDex);
      });
      setFilteredList(filtered);
    } else {
      setFilteredList(dexList);
    }
  }, [searchDex]);

  return (
    <div>
      <Modal className={`model-switch-${data.theme}`} {...props} centered>
        <Modal.Header
          className="custom-coin-modal"
          style={{ borderBottom: "0" }}
        >
          <FormControl
            className="custom-search"
            type="text"
            placeholder="Search Dex"
            onChange={(event) => {
              setSearchDex(event.target.value);
            }}
          />
        </Modal.Header>
        <Modal.Body className="custom-row-body">
          <Row className="custom-row">
            {filteredList &&
              filteredList.map((list) => (
                <div
                  key={list.id}
                  className="list-col"
                  onClick={() => {
                    props.handleDexChange(list.id);
                    setSearchDex("");
                  }}
                >
                  <img src={VectorImg} alt="" />
                  {list.name}
                </div>
              ))}
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SelectDexModal;
