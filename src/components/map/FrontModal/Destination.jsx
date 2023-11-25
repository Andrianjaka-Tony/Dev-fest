import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import SearchIcon from "../../../assets/svg/SearchIcon";
import MarkerIcon from "../../../assets/svg/MarkerIcon";

const data = ["Analakely", "Mahamasina", "Anosy", "Amsterdam", "Idk bro"];

const Destination = () => {
  const [resultMatched, setResultMatched] = useState([]);

  const handleInput = (e) => {
    let text = e.target.value.trim();
    if (text == "") {
      setResultMatched([]);
      return null;
    }
    const searchText = text.toLowerCase();
    const matches = data.filter((text) => text.toLowerCase().includes(searchText));
    setResultMatched(matches);
  };
  return (
    <>
      <div className="title">Where do you want to go ?</div>
      <div className="row">
        <div className="search_btn">
          <SearchIcon />
        </div>
        <input type="text" name="place" autoFocus onChange={handleInput} />
      </div>
      <div className="list">
        {resultMatched.map((res, i) => (
          <div className="row_result" key={i}>
            <div className="icon">
              <MarkerIcon />
            </div>
            <div className="text">{res}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Destination;
