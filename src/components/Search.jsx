import React from "react";
import Button from "./Button";
const Search = () => {
  return (
    <div className="search">
      <div className="search__title">
        <h2>Tra cứu vận đơn</h2>
      </div>
      <div className="search__input">
        <div className="search__input__title">
          <h5>Mã phiếu gửi</h5>
        </div>
        <div className="search__input__box">
          <input
            type="text"
            name="search"
            id="input__search"
            placeholder="VD: MD123456789"
          />
        </div>
        <div className="search__input__btn">
          <Button>
            <i class="bx bx-arrow-to-right"></i> Tra cứu
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
