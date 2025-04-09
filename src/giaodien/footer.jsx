import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap

import '../css/base.css'; // Thêm Base CSS
import '../css/style.css'; // Thêm Style CSS
import '../css/load.css'; // Thêm Load CSS

import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome từ CDN


const Footer = () => {
  return (
    <footer id="dk-footer" className="dk-footer" style={{ color: '#ccc' }}>
      <div>
        <div className="row">
          <div className="a col-md-4 col-lg-4 col-sm-4">
            <div className="dk-footer-box-info">
              <Link to="/" className="footer-logo">
                <img
                  src="/image/logohh.png"
                  alt="footer_logo"
                  className="img-fluid"
                  style={{
                    marginLeft: '30px',
                    textAlign: 'center',
                    height: '160px',
                    width: '158px',
                    borderRadius: '45px',
                  }}
                />
              </Link>
              <p className="footer-info-text">Hay mua hang cua chung toi</p>
              <div className="footer-social-link">
                <h3>Follow us</h3>
                <ul className="ul">
                  <li>
                    <a href="#" className="innerIcon">
                      <i className="fa-brands fa-facebook icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="innerIcon">
                      <i className="fa-brands fa-tiktok icon"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="innerIcon">
                      <i className="fa-brands fa-instagram icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Social link */}
            </div>
            {/* End Footer info */}
            <div className="footer-awarad">
              <p style={{ zIndex: 3 }}>Best SmartTV Store</p>
            </div>
          </div>
          {/* End Col */}
          <div className="col-md-8 col-lg-8 col-sm-8">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="contact-us">
                  {/* End contact Icon */}
                  <div className="contact-info">
                    <h3>Tạ Tương Hiếu DH52106187</h3>
                    <h3>Nguyên Hoàng Huy DH52105093</h3>
                  </div>
                  {/* End Contact Info */}
                </div>
                {/* End Contact Us */}
              </div>
              {/* End Col */}
              <div className="col-md-6 col-sm-6">
                <div className="contact-us contact-us-last">
                  <div className="contact-icon">
                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                  </div>
                  {/* End contact Icon */}
                  <div className="contact-info">
                    <h3>23 09 023902</h3>
                    <p>Gọi cho chúng tôi qua</p>
                  </div>
                  {/* End Contact Info */}
                </div>
                {/* End Contact Us */}
              </div>
              {/* End Col */}
            </div>
            {/* End Contact Row */}
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget footer-left-widget">
                  <div className="section-heading">
                    <h3>Thông Tin</h3>
                  </div>

                  <ul>
                    <li>
                      <Link to="/">Trang Chủ</Link>
                    </li>
                    <li>
                      <Link to="/tintuc">Tin Tức</Link>
                    </li>
                    <li>
                      <Link to="/tuyendung">Tuyển dụng</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/gioithieu">Giới thiệu</Link>
                    </li>
                    <li>
                      <Link to="/baohanh">Bảo hành</Link>
                    </li>
                    <li>
                      <Link to="/lienhe">Liên hệ</Link>
                    </li>
                  </ul>
                </div>
                {/* End Footer Widget */}
              </div>
              {/* End col */}
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget subscribe">
                  <div className="section-heading ">
                    <h3>Subscribe</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <p>Liên Hệ qua email cho chung toi thông qua</p>
                  <form action="#">
                    <div className="form-row">
                      <div className="col dk-footer-form">
                        <input type="email" className="form-control" placeholder="Email Address" />
                        <button type="submit" style={{ height: '40px' }}>
                          <i className="fa fa-send"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* End form */}
                </div>
                {/* End footer widget */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Col */}
        </div>
        {/* End Widget Row */}
      </div>
      {/* End Contact Container */}

      <div className="copyright" style={{ textAlign: 'center' }}>
        <div className="">
          <div className="row">
            <div className="col-lg-12">
              <span>Tạ Tương Hiếu & Nguyễn Hoàng Huy &ensp;  &ensp; D21_TH04</span>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Copyright Container */}
      </div>
      {/* End Copyright */}
      {/* Back to top */}
      <div id="back-to-top" className="back-to-top">
        <button className="btn btn-dark" title="Back to Top" style={{ display: 'block' }}>
          <i className="fa fa-angle-up"></i>
        </button>
      </div>

      {/* End Back to top */}
    </footer>
  );
};

export default Footer;
