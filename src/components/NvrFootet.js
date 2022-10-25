import React, { useState } from "react";
import SimpleAccordion from "./Accordion";

export default function NvrFooter() {
  return (
    <div className="Nvr-footer-container">
      <h2>자주 묻는 질문</h2>
      <SimpleAccordion />
    </div>
  );
}
