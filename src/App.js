import React, { useState, useEffect } from 'react';  // Đảm bảo import React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import HomePage from './giaodien/trangchu'; // Import component HomePage từ trangchu.js
import Login from './giaodien/Login'; // Import component Login
import Register from './giaodien/dangky'; // Import component Register
import ChitietSanpham from './giaodien/chitietsanpham'; // Import component ChitietSanpham
import Chitietsanphamlinhkien from './giaodien/chitietsanphamlinhkien'; // Import component Chitietsanphamlinhkien
import './css/style.css'; // Import file CSS của bạn

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');  // Lấy từ sessionStorage
    if (storedUsername) {
      setUsername(storedUsername);  // Cập nhật username nếu đã có trong sessionStorage
    } else {
      console.log('Không có username trong sessionStorage');
    }
  }, []); 

  return (
    <Router>
      <Routes>
        {/* Route cho trang chủ, truyền username vào HomePage */}
        <Route path="/" element={<HomePage username={username} />} />
        {/* Route cho trang đăng nhập, truyền setUsername vào Login */}
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/dangky" element={<Register />} />
        <Route path="/chitietsanpham/:id" element={<ChitietSanpham />} />
        <Route path="/chitietsanphamlinhkien/:id" element={<Chitietsanphamlinhkien />} />
      </Routes>
    </Router>
  );
}

export default App;
