import React, { useEffect } from "react";
import MyMapContainer from "./MyMapContainer/MyMapContainer";
import MenuMap from "./MenuMap/MenuMap";
import FrontModal from "./FrontModal/FrontModal";

const Map = () => {
  return (
    <>
      <MyMapContainer />
      <MenuMap />
      <FrontModal />
    </>
  );
};

export default Map;
