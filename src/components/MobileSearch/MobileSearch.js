import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "store/global/actions";
import ExitButton from "assets/Images/xbutton.svg";
import SearchIcon from "assets/Images/SearchIcon.svg"
import { Top, Mid, Bottom, Containment, SearchWrap } from "./MobileSearch.styles";
import { Link } from "react-router-dom";



const MobileSearch = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const {coins} = useSelector(state => state.global);
  const handleChange = (e) => {
    const {value} = e.target;
    setText(value);
    dispatch(getSearch(value));
  }
  return (
    <Containment>
      <Top>
        <img width="20" src={ExitButton} alt="exit" />
        <h1>Close</h1>
      </Top>
      <Mid>
        <SearchWrap>
        <img width={15} height={15} src={SearchIcon} alt="search" />
    <input className="search" onChange={handleChange} value={text} placeholder="Search..."/>
    </SearchWrap>
      </Mid>
      <Bottom>
          {coins?.map(coin => {
            return (
              <div className="coinlist">
              <Link className="coinlist-link" to={`coin/${coin.id}`}>{coin.name}</Link>
              <img src={coin.thumb} alt="alt"/>
              </div>
            )
          })}
      </Bottom>
    </Containment>
  );
};

export default MobileSearch;
