import React, { useState } from "react";
import RecycleCard from "./RecycleCard";
export default function Info2() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="Info">
      <div className="Info-contents">
        <p className="Sub-title">재활용</p>
        <h2>병뚜껑을 재활용한 명함</h2>
        <p>
          그거 아시나요? 대부분의 명함은 코팅이 되어있어 종이로 재활용이
          불가능합니다. 병뚜껑을 재활용하여 만든 명함을 사용함으로써 지구
          환경에도 도움을 줄 수 있습니다.
        </p>
        <a
          onClick={() => {
            setVisible(!visible);
          }}
        >
          재활용 명함 제작 과정{" "}
          {visible ? (
            <img src="img/Arrow 3.png" alt="" className="Arrow-rotate-up" />
          ) : (
            <img src="img/Arrow 3.png" alt="" className="Arrow" />
          )}
        </a>
        {visible && <RecycleCard />}
      </div>
      <div className="Img-box">
        <img src="img/recycle img1.jpeg" alt="" />
      </div>
    </div>
  );
}
