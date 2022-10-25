import React, { useState } from "react";

export default function Info1(props) {
  const title = props.title;
  const content = props.content;
  return (
    <div className="Info">
      <div className="Img-box">
        <img src="img/earth2.png" alt="" />
      </div>
      <div className="Info-contents">
        <h1>주머니 속 명함 한 장으로 세상을 구하세요. </h1>
        <p>
          종이 명함을 여러 장 들고다니는 시대는 지났습니다. <br />
          NFC 명함 한 장만으로 상대방과 소통하고 재활용 재료로 만들어진 명함으로
          지구를 지킬 수 있습니다. 지금 바로 무료로 재활용 NFC 명함을
          경험하세요.
        </p>
        <a href="">
          <button className="button-nvr button-join">
            <span>무료로 NFC 명함 받기</span>
          </button>
        </a>
      </div>
    </div>
  );
}
