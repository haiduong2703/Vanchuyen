import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Button from "./Button";
const tabs = [
  {
    id: 1,
    title: "Ước tính cước phí",
  },
  {
    id: 2,
    title: "Tìm kiếm bưu cục",
  },
  {
    id: 3,
    title: "Cập nhập trạng thái giao hàng",
  },
];
const Tabs = () => {
  const [activeTabs, setActiveTabs] = useState(tabs[0].id);

  const handleClickTab = (tabId) => {
    setActiveTabs(tabId);
  };
  const tabContent = useRef(null);
  // const handleClickContent = (event, item) => {
  //   const content = document.getElementById(item.id);

  //   event.preventDefault();
  //   document.getElementById(item.id).scrollIntoView();

  //   if (content) {
  //     content.classList.toggle("active");
  //   } else {
  //     content.classList.remove("active");
  //   }
  // };

  const menuTabs = useRef(null);
  const myDiv1 = "1";
  const myDiv2 = "2";
  const myDiv3 = "3";
  return (
    <div className="tabs">
      <div className="tabs__nav" ref={menuTabs}>
        {tabs.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClickTab(item.id)}
            className={`tabs__nav__item ${
              index + 1 === activeTabs ? "active" : ""
            }`}
          >
            <Link
              to={`#${item.id}`}
              // onClick={(event) => handleClickContent(event, item)}
            >
              <span>{item.title}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="tabs__contents">
        <div
          id={myDiv1}
          className={`tabs__contents__item ${
            myDiv1 == activeTabs ? "active" : ""
          }`}
        >
          <form action="">
            <table>
              <tr>
                <td>Điểm bắt đầu:</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>Quận, huyện:</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>Điểm giao đến:</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>Quận, huyện:</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>Trọng lượng gram:</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>Số tiền thu hộ (VNĐ):</td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Button>
                    <i class="bx bx-arrow-to-right"></i> Tra cứu
                  </Button>
                </td>
              </tr>
              <tr>
                <td>(Vui lòng ghi đầy đủ thông tin vào phiếu tra cứu)</td>
              </tr>
            </table>
          </form>
        </div>
        <div
          id={myDiv2}
          className={`tabs__contents__item ${
            myDiv2 == activeTabs ? "active" : ""
          }`}
        >
          block2
        </div>
        <div
          id={myDiv3}
          className={`tabs__contents__item ${
            myDiv3 == activeTabs ? "active" : ""
          }`}
        >
          block3
        </div>
      </div>
    </div>
  );
};

export default Tabs;
