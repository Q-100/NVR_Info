import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>카드가 작동되지 않습니다.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              카드가 작동되지 않을 때 다음과 같이 진행해주세요. <br />
              <br />
              첫번째, 신호를 방해하는 물체(금속, 유리, 목재 및 기타 무선장치)가
              있는지 확인하세요. <br />
              <br />
              두번째, 휴대폰의 NFC 모듈이 있는 곳에 접촉시켰는지 확인하세요.{" "}
              <br />
              NFC 모듈은 각 휴대폰 제조사별로 다르니 아래의 설명대로 확인 후
              재접촉해보시길바랍니다. <br />
              <ul>
                <li>Apple : 전화기 상단 카메라 옆</li>
                <li>Samsung : 전화기 중간 또는 하단 근처</li>
              </ul>
              <p>
                다른 질문사항이나 문의사항이 있을경우 cs@nvrkr.com으로 메일을
                보내주세요.
              </p>
            </p>{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>무료로 명함을 받기 위해선 어떻게 해야하나요?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            현재 저희 NVR에서는 무료로 재활용 플라스틱 명함을 제공하고있습니다.{" "}
            <br />
            상단의 등록하기 버튼 또는 하단으로 스크롤하여 가입하게 되면 입력하신
            주소로 배송해드립니다. <br />이 재활용 플라스틱 명함은 NFC기능이
            탑재된 명함으로 ????
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            기업 관련 제품이나 명함 관련 질문은 어디로 해야하나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            기업관련 제품이나 문의사항은 ???로 연락 부탁드립니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
