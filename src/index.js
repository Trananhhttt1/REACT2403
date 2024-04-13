import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const bai1 = React.createElement(
  "h1",
  null,
  "Hello World",
  React.createElement("p", null, "My first paragraph")
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<div>
  <h1>Học lập trình Web có đơn giản không?</h1>
  <img src="https://idconline.vn/blog/wp-content/uploads/2023/04/8-ngon-ngu-lap-trinh-phan-mem.jpg"></img>
  <h2>Đây là tiêu đề bài viết </h2>
  <p>
    Ngôn ngữ thường được coi là một công cụ để giao tiếp. Lập trình là một loại
    ngôn ngữ máy tính được sử dụng để giao tiếp với máy tính. Đó là một tập lệnh
    (hoặc mã) được viết để thực hiện các hành động cụ thể. Bằng cách sử dụng
    ngôn ngữ lập trình, các nhà phát triển cung cấp cho máy tính các hướng dẫn ở
    định dạng mà máy có thể hiểu và làm theo. Mỗi ngôn ngữ lập trình có cú pháp,
    cấu trúc và quy tắc cụ thể phải được tuân thủ để chạy mã mà không gặp lỗi.
  </p>
</div>;
