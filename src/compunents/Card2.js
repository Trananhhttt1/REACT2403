import React from "react";
import "./Card1.css";

const Card1 = () => {
  const data = [
    {
      title: "Học lập trình JavaScript",
      sub_title: "Đây là tiêu đề bài viết",
      img: "https://mikotech.vn/wp-content/uploads/2023/10/ngon-ngu-lap-trinh-web-pho-bien-nhat-JavaScript.png",
      desc: `Ngôn ngữ thường được coi là một công cụ để giao tiếp. Lập trình là một
    loại ngôn ngữ máy tính được sử dụng để giao tiếp với máy tính. Đó là một
    tập lệnh được viết để thực hiện các hành động cụ thể. Bằng
    cách sử dụng ngôn ngữ lập trình, các nhà phát triển cung cấp cho máy
    tính các hướng dẫn ở định dạng mà máy có thể hiểu và làm theo. Mỗi ngôn
    ngữ lập trình có cú pháp, cấu trúc và quy tắc cụ thể phải được tuân thủ
    để chạy mã mà không gặp lỗi.`,
    },
    {
      title: "Học lập trình Python",
      sub_title: "Đây là tiêu đề bài viết",
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/163640/Originals/cac-ngon-ngu-lap-trinh-2.jpg",
      desc: `Một trong các ngôn ngữ lập trình thường thấy tiếp theo là Python. Đây là một ngôn ngữ có mã nguồn mở, ứng dụng nhiều trong lĩnh vực khoa học dữ liệu, trí tuệ nhân tạo, phát triển web, quản lý hệ thống và giáo dục.
      Python được tích hợp với nhiều thư viện và framework (như Pandas, Django, Flask) giúp quá trình tạo ra ứng dụng trở nên đơn giản, nhanh chóng hơn. Nhìn chung thiết kế Python khá dễ hiểu, dễ đọc, cho phép lập trình viên thao tác thuận tiện với mã nguồn. `,
    },
    {
      title: "Học lập trình Web PHP",
      sub_title: "Đây là tiêu đề bài viết",
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/163640/Originals/cac-ngon-ngu-lap-trinh-4.jpg",
      desc: `Theo thống kê gần đây, có đến 80% website được tạo ra bởi ngôn ngữ lập trình PHP. Như vậy có thể thấy mức độ phổ biến của ngôn ngữ này. PHP, một ngôn ngữ lập trình mã nguồn mở, sử dụng để tạo ra các trang web động. Song song đó PHP còn có thể chạy trên nhiều hệ điều hành khác nhau và được hỗ trợ bởi nhiều nhà cung cấp dịch vụ lưu trữ web.PHP có tính ứng dụng cao trong nhiều lĩnh vực như blog, trang thương mại điện tử, hệ thống quản lý nội dung (CMS)`,
    },
  ];

  return (
    <div className="card__gruop">
      {data.map((item) => {
        return (
          <div className="card">
            <h1>{item.title}</h1>
            <img className="card__image" src={item.img}></img>
            <h2 className="card__title2">{item.sub_title} </h2>
            <p className="card__des">{item.desc}</p>
            <div className="card__button">
              <span>Đọc Thêm</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card1;
