import React, { useState } from "react";

export default function RecycleCard() {
  return (
    <div className="RecycleCardContainer">
      <div className="RecycleCardItem">
        <img src="img/recycle img7.jpeg" alt="" />
        <p>병뚜껑 수집</p>
      </div>
      <div className="RecycleCardItem">
        <img src="img/recycle img6.jpeg" alt="" />
        <p>고온 프레스로 압축</p>
      </div>
      <div className="RecycleCardItem">
        <img src="img/recycle img4.jpeg" alt="" />
        <p>색상 확인 및 재압축</p>
      </div>
      <div>
        <img src="img/recycle img2.jpeg" alt="" />
        <p>카드 크기로 재단</p>
      </div>
    </div>
  );
}
