import React from "react";
import Button from "./Button";
const InforContact = () => {
  return (
    <div className="infor__contact">
      <div className="infor__contact__item__one">
        <div className="infor__contact__item__one__title">
          <h3>Tổng Công Ty Cổ Phần Miền Bắc Transport </h3>
        </div>
        <div className="infor__contact__item__one__content">
          <p>
            <strong>Trụ sở chính: </strong>Toà nhà Viettel Post, Ngõ 15 Duy Tân,
            Cầu Giấy, Hà Nội
          </p>
          <p>
            <strong>Số điện thoại: </strong>0999999999
          </p>
          <p>
            <strong>Email: </strong>mienbactransport@gmail.com
          </p>
          <p>
            <strong>Website: </strong>mienbactransport.com
          </p>
        </div>
      </div>
      <div className="infor__contact__item__two">
        <div className="infor__contact__item__two__title">
          <h3>Liên hệ ngay với Miền Bắc Transport</h3>
        </div>
        <div className="infor__contact__item__two__content">
          <form action="">
            <table>
              <tr>
                <td>Họ tên</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>Số điện thoại</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>Ghi chú</td>
                <td>
                  <input type="text" name="" id="" />
                </td>
              </tr>
              <tr>
                <td>
                  <Button>Gửi ngay</Button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InforContact;
