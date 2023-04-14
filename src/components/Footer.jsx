import React from "react";
import Grid from "./Grid";
import { Link } from "react-router-dom";
const footerAboutLinks = [
  {
    dislay: "Trang chủ",
    path: "/",
  },
  {
    dislay: "Giới thiệu",
    path: "/",
  },
  {
    dislay: "Dịch vụ vận chuyển",
    path: "/",
  },
  {
    dislay: "Tin tức",
    path: "/",
  },
  {
    dislay: "Liên hệ",
    path: "/",
  },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Grid col={3} mdCol={2} smCol={1} gap={50}>
          <div>
            <div className="footer__title">Miền Bắc Transport</div>
            <div className="footer__content">
              <p>
                VP giao dịch: Toà nhà Viettel Post, Ngõ 15 Duy Tân, Cầu Giấy, Hà
                Nội
              </p>
              <p>hquanganh123@gmail.com</p>
              <p>0367805247</p>
            </div>
          </div>
          <div>
            <div className="footer__title">Menu</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.dislay}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Đăng ký nhận tin</div>
            <div className="footer__content">
              <p>
                VP giao dịch: Toà nhà Viettel Post, Ngõ 15 Duy Tân, Cầu Giấy, Hà
                Nội
              </p>
              <p>hquanganh123@gmail.com</p>
              <p>0367805247</p>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
