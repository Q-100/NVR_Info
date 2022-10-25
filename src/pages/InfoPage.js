import React, { useState } from "react";
import Info1 from "../components/Info1";
import Info2 from "../components/Info2";
import Info3 from "../components/Info3";
import Info4 from "../components/Info4";
import Info5 from "../components/Info5";
import NVRHeader from "../components/NvrHeader";
import NvrFooter from "../components/NvrFootet";
import "../App.css";

export default function InfoPage() {
  return (
    <div>
      <div>
        {/* <div className="NVRHeader">
          <NVRHeader />
        </div> */}
        <div className="MainContainer">
          <Info1 />
          <hr />
          <Info2 />
          <Info3 />
          <Info4 />
          <Info5 />
          <NvrFooter />
        </div>
      </div>
    </div>
  );
}
