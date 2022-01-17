import React from "react";
import { CoinWrap } from "./CoinTable.styles";
import ClipLoader from "react-spinners/ClipLoader";

const CoinTable = () => {
  return (
    <CoinWrap>
      <ClipLoader width={200} color="#00FF5F" />
    </CoinWrap>
  );
};

export default CoinTable;
