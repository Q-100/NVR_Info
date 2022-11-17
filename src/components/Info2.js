import React, { useState } from "react";
import RecycleCard from "./RecycleCard";
export default function Info2() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="Info">
      <div className="Info-contents">
        <h2>| ABOUT NVR SMART CARD</h2>
        <p>
          일반 명함과는 다른 스마트 명함 한 장으로 상대방에게 <br /> 자신을
          특별하게 소개하세요.
        </p>
        <ul>
          <li>
            <p>
              사람을 만날때마다 소모되는 명함과는 다르게 스마트 명함 한장을
              스마트폰에 대는것만으로도 자신을 특별하게 소개할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              스마트 명함은 일반 명함보다 많은 정보 제공이 가능하며 버튼
              하나만으로 연락처를 저장할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              스마트 명함 내 로고나 자신을 소개 할 수 있는 이미지, 정보, 동영상
              등을 커스텀 할 수 있습니다.
            </p>
          </li>
        </ul>
        <a href="">
          NFC 명함 등록하기{" "}
          <img src="img/Arrow 3.png" alt="" className="Arrow-rotate" />
        </a>
      </div>
      <div className="Img-box">
        <img src="img/IphoneImg.png " alt="" />
      </div>
    </div>
  );
}
