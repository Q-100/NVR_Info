import React, { useState } from "react";

export default function Info3(props) {
  const title = props.title;
  const content = props.content;
  return (
    <div className="Info Info-reverse">
      <div className="Img-box">
        <img src="img/IphoneImg.png" alt="" />
      </div>
      <div className="Info-contents">
        <p className="Sub-title">진보된 명함</p>
        <h2>NFC를 이용한 명함</h2>
        <p>
          일반 명함과는 다른 NFC 명함 한 장으로 상대방에게 자신을 특별하게
          소개하세요.
        </p>
        <ul>
          <li>
            사람을 만날 때마다 소모되는 명함과는 다르게 NFC 명함 한 장을
            스마트폰에 대는 것만으로도 자신을 특별하게 소개할 수 있습니다.
          </li>
          <li>
            NFC 명함은 일반 명함보다 많은 정보 제공이 가능하며 버튼 하나만으로
            연락처를 저장할 수 있습니다.
          </li>
          <li>
            NFC 명함 내 기업 로고나 자신을 소개할 수 있는 이미지 및 동영상
            커스텀 가능
          </li>
        </ul>
        <a href="">
          NFC 명함 등록하기{" "}
          <img src="img/Arrow 3.png" alt="" className="Arrow-rotate" />
        </a>
      </div>
    </div>
  );
}
