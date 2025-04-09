import React from 'react';
import { Link } from 'react-router-dom'; // Dùng React Router để điều hướng thay vì thẻ <a> thuần túy
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap

import '../css/base.css'; // Thêm Base CSS
import '../css/style.css'; // Thêm Style CSS
import '../css/load.css'; // Thêm Load CSS

import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome từ CDN
const SearchSection = () => {
  return (
    <div className="search">
      <div className="container">
        <div className="search__inner">
          <div className="search__search wow slideInLeft" data-wow-delay="0.5s">
            <form className="header__search--input" action="/index.html">
              <input
                id="search-box"
                name="search"
                autoComplete="off"
                type="text"
                placeholder="Tim gi thi tim......"
              />
              <button type="submit" className="btn">
                <i className="fa-solid fa-magnifying-glass"></i>
                Tìm kiếm
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchSection;
