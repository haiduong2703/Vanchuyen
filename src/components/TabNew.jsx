import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
const tabsNew = [
  {
    id: 1,
    title: "News",
    active: "c1",
    path: "./news/1",
  },
  {
    id: 2,
    title: "Tất cả",
    active: "c2",
    path: "./news/1",
  },
  {
    id: 3,
    title: "Tin khuyến mãi",
    active: "c3",
    path: "./news/1",
  },
  {
    id: 4,
    title: "Hướng dẫn",
    active: "c4",
    path: "./news/1",
  },
];
const img1 = require("../assets/image/n1.jpg");
const img2 = require("../assets/image/n2.jpg");

const listNews = [
  {
    title: "KẾT QUẢ TRÚNG THƯỞNG GAME BĂNG CHUYỀN KÌ DIỆU",
    time: "16/02/23",
    detail:
      "Kết quả trúng thưởng game băng chuyền kỳ diệu Viettel Post xin công bố danh sách thuê bao khách hàng trúng các giải thưởng cao nhất của game tương tác...",
    img: img1,
  },
  {
    title: "KẾT QUẢ TRÚNG THƯỞNG GAME BĂNG CHUYỀN KÌ DIỆU",
    time: "16/02/23",
    detail:
      "Kết quả trúng thưởng game băng chuyền kỳ diệu Viettel Post xin công bố danh sách thuê bao khách hàng trúng các giải thưởng cao nhất của game tương tác...",
    img: img2,
  },
  {
    title: "KẾT QUẢ TRÚNG THƯỞNG GAME BĂNG CHUYỀN KÌ DIỆU",
    time: "16/02/23",
    detail:
      "Kết quả trúng thưởng game băng chuyền kỳ diệu Viettel Post xin công bố danh sách thuê bao khách hàng trúng các giải thưởng cao nhất của game tương tác...",
    img: img2,
  },
];
const TabNew = (props) => {
  const [activeTabNew, setActiveTabNew] = useState(1);
  const [activeNew, setActiveNew] = useState("c1");
  const handleClickActive = (id, active) => {
    setActiveTabNew(id);
    setActiveNew(active);
  };
  console.log(activeNew);
  const myId1 = "c1";
  const myId2 = "c2";
  const myId3 = "c3";
  const myId4 = "c4";
  return (
    <div className="tabnews">
      {props.display === 0 ? (
        <div className="tabnews__txt">
          <h3>Tin tức</h3>
        </div>
      ) : (
        <div className="tabnews__title">
          {tabsNew.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClickActive(item.id, item.active)}
              className={`tabnews__title__item ${
                index + 1 === activeTabNew ? "active" : ""
              }`}
            >
              <Link>{item.title}</Link>
            </div>
          ))}
        </div>
      )}
      <div
        id={myId1}
        className={`tabnews__contents ${myId1 === activeNew ? "active" : ""}`}
      >
        {listNews.map((news, index) => (
          <div className="tabnews__contents__item">
            <div className="tabnews__contents__item__image">
              <img src={news.img} alt="" />
            </div>
            <div className="tabnews__contents__item__content">
              <div className="tabnews__contents__item__content__title">
                <Link to={news.path}>
                  <h2>{news.title}</h2>
                </Link>
              </div>
              <div className="tabnews__contents__item__content__time">
                <h4>{news.time}</h4>
              </div>
              <div className="tabnews__contents__item__content__detail">
                <p>{news.detail}</p>
              </div>
            </div>
          </div>
        ))}
        <Button>Xem chi tiết</Button>
      </div>
      <div
        id={myId2}
        className={`tabnews__contents ${myId2 === activeNew ? "active" : ""}`}
      >
        block2
      </div>
      <div
        id={myId3}
        className={`tabnews__contents ${myId3 === activeNew ? "active" : ""}`}
      >
        block3
      </div>
      <div
        id={myId4}
        className={`tabnews__contents ${myId4 === activeNew ? "active" : ""}`}
      >
        block4
      </div>
    </div>
  );
};

export default TabNew;
