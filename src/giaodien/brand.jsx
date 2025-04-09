import React from 'react';
import { Link } from 'react-router-dom'; // Dùng React Router để điều hướng thay vì thẻ <a> thuần túy
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap


import '../css/base.css'; // Thêm Base CSS
import '../css/style.css'; // Thêm Style CSS
import '../css/load.css'; // Thêm Load CSS

import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome từ CDN

const BrandSection = () => {
  return (
    <div className="brand">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="box box__brand">
              <a href="#">
                <img src="/image/brand/logo-samsung-to.png" alt="Samsung" />
              </a>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="box box__brand">
              <a href="#">
                <img src="/image/brand/logomsi.png" alt="LG" style={{ height: '30px', width: '100px' }} />
              </a>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="box box__brand">
              <a href="#">
                <img src="/image/brand/logoasus.png" alt="Asus" style={{ height: '30px' }} />
              </a>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="box box__brand">
              <a href="#">
                <img src="/image/brand/sony-logo-35.png" alt="Sony" />
              </a>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="box box__brand">
              <a href="#">
                <img src="/image/brand/logonvdia.png" alt="Nvdia"style={{ height: '30px', width: '150px' }}  />
              </a>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <div className="box box__brand">
              <a href="#">
                <img src="/image/brand/lenovo.png" alt="Lenovo"style={{ height: '30px', width: '100px' }}  />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BrandSection;
