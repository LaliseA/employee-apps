import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../App";

function SearchBar() {
  const [searchKey, setSearchKey] = useState();
  const { setSearchInput } = useContext(EmployeeContext);
  return (
    <div>
      <input
        className="search-input"
        type="text"
        placehoder="search"
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <span
        style={{ marginLeft: "-50px" }}
        onClick={() => setSearchInput(searchKey)}
      >
        <img
          src="https://www.freepnglogos.com/uploads/search-png/search-png-design-web-design-6.png"
          style={{ width: "50px", marginBottom: "-10px" }}
        />
      </span>
    </div>
  );
}

export default SearchBar;
