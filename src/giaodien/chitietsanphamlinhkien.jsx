import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Lấy id từ URL
import '../css/chitietsanpham.css'
import Footer from './footer';
import { Link } from 'react-router-dom';

const ChitietSanpham = () => {
  const { id } = useParams();  // Lấy id từ URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://dientuonlineapi.byethost15.com/Api/getdsSanPhamLinhKien.php?id=${id}`);
        
        // Kiểm tra phản hồi từ API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("Dữ liệu sản phẩm trả về từ API:", data);

        // Kiểm tra nếu dữ liệu trả về là một mảng và tìm sản phẩm có mã MaSanPham
        if (Array.isArray(data) && data.length > 0) {
          const foundProduct = data.find(product => product.MaSanPham === parseInt(id));  // So sánh với MaSanPham
          console.log("Sản phẩm tìm thấy:", foundProduct);

          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError('Không tìm thấy sản phẩm với mã id này.');
          }
        } else {
          setProduct(data); // Nếu API trả về đối tượng, lưu trữ trực tiếp
        }
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy dữ liệu:', error);
        setError('Có lỗi xảy ra khi lấy dữ liệu.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Hiển thị Loading khi đang tải
  if (loading) {
    return <div>Loading...</div>;
  }

  // Hiển thị lỗi nếu có
  if (error) {
    return <div>{error}</div>;
  }

  // Hiển thị thông tin chi tiết sản phẩm khi dữ liệu đã có
  return (

      

    
    <div className="product-detail">
      <div className="top wow fadeInDown">
          <div className="top__inner">
            <div className="top__logo">
              <Link to="/">
                <img src="../image/logohh1.png" alt="Trang chủ SmartTV Store" title="Trang chủ SmartTV Store" />
              </Link>
            </div>
            <div className="top__content">
              <ul>
                <li className="menu">
                  <Link to="/">
                    <i className="fa-solid fa-house"></i>
                    Trang Chủ
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/tintuc">
                    <i className="fas fa-list"></i>
                    Danh Mục
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/tuyendung">
                    <i className="fa-solid fa-newspaper"></i>
                    Tuyển dụng
                  </Link>
                </li>
               
                <li className="menu">
                  <Link to="/baohanh">
                    <i className="fa-solid fa-wrench"></i>
                    Bảo hành
                  </Link>
                </li>
                {/* <li className="menu">
                  <Link to="/lienhe">
                    <i className="fa-solid fa-truck-fast"></i>
                    Liên hệ
                  </Link>
                </li> */}
                <li>
                <div className="search__member" style={{ marginBottom: '15px' }}>
                      <Link to="/login"> {/* Đổi đường dẫn đến trang Login */}
                        <i className="fa-solid fa-user"></i>
                        Tài khoản
                      </Link>
                      <div className="countSL"></div>
                    </div>
                </li>
                <li>
                          
                
                    {/* End Member */}
                    <div className="cart">
                      <Link to="/giohang">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Giỏ hàng</span>
                        <span className="cart-number"></span>
                      </Link>
                    </div>
            
                </li>
              </ul>
            </div>
          </div>
        </div>
 
      
      <div className="container">
        <h2>{product.TenSanPham}</h2>
        <div className="product-info">
        <img src={product.HinhAnh} alt={product.TenSanPham} className="product-image" />

          <div className="product-details">
            <p><strong>Loại sản phẩm:</strong> {product.TenLoai}</p>
            <p><strong>Thông tin sản phẩm</strong> {product.ThongTinSanPham}</p>
            <p><strong>Giá:</strong> {product.Gia}₫</p>
            <p><strong>Số lượng tồn:</strong> {product.SoLuongTon}</p>
            <p><strong>Số lượng đã bán:</strong> {product.SoLuongDaBan}</p>
            <p><strong>Đánh giá:</strong> {product.DanhGia}</p>
          </div>
        </div>
        <div className="purchase-section">
          <button className="add-to-cart">Thêm vào giỏ hàng</button>
          <button className="buy-now">Mua ngay</button>
        </div>
      </div>
      <Footer/>
    </div>
     
  );
};

export default ChitietSanpham;