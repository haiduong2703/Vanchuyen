import React, { useRef, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Tin tức",
    path: "/news",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
  {
    display: "Bưu cục",
    path: "/buucuc",
  },
  {
    display: "Đăng nhập",
    path: "/dangnhap",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  const menuCenter = useRef(null);

  const menuToggle = () => menuCenter.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <h2>Mien Bac Transport</h2>
        </div>
        <div className="header__menu">
          <div className="header__menu__center" ref={menuCenter}>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__center__item ${
                  index === activeNav ? "active" : ""
                }`}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <input type="text" placeholder="Tìm kiếm" />
            <i class="bx bx-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
