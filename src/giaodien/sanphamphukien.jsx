import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap

import '../css/base.css';
import '../css/style.css';
import '../css/load.css';



const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/backendWebbandodientu/Api/getdsSanPham.php")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Lỗi lấy sản phẩm:", err));
  }, []);

  return (
    <div>
      <div className="title">
        <div className="container">
          <h2>Phụ kiện điện thoại</h2>
        </div>
      </div>

      <div className="sectionOne" style={{ color: 'black' }}>
        <div className="container">
          <div className="row">
            {products.map(product => (
              <div key={product.MaSanPham} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow bounceInLeft" data-wow-duration="1s" data-wow-offset="200">
                <div className="box product-link" data-id={product.MaSanPham}>
                  <div className="image">
                    <Link to={`/chitietsanpham/${product.MaSanPham}`} target="_blank">
                      <img src={product.HinhAnh} alt={product.TenSanPham} />
                    </Link>
                  </div>
                  <div className="title">{product.TenSanPham}</div>
                  <div className="price">
                    <p className="old">{parseInt(product.Gia) * 1.2}<span> ₫</span></p>
                    <p className="new">{product.Gia}<sup> ₫</sup></p>
                  </div>
                  <div className="description">{product.MoTa}</div>
                  <div className="rating">
                    <i className="fa-solid fa-star fa-beat" style={{ color: '#74C0FC' }}></i>
                    <i className="fa-solid fa-star fa-beat" style={{ color: '#74C0FC' }}></i>
                    <i className="fa-solid fa-star fa-beat" style={{ color: '#74C0FC' }}></i>
                    <i className="fa-solid fa-star fa-beat" style={{ color: '#74C0FC' }}></i>
                    <i className="fa-solid fa-star fa-beat" style={{ color: '#74C0FC' }}></i>
                  </div>
                  <div className="discount">-{Math.floor(100 - (product.Gia / (parseInt(product.Gia) * 1.2)) * 100)}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
