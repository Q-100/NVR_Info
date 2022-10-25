import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import EnterprisePage from "./pages/EnterprisePage";
import NVRHeader from "./components/NvrHeader";

function App() {
  return (
    <div className="App">
      <div className="NVRHeader">
        <NVRHeader />
      </div>
      <Routes>
        <Route path="/" element={<InfoPage />} />
        <Route path="/ent" element={<EnterprisePage />} />
      </Routes>
    </div>
  );
}
{
  /* 조인시 플라스틱카드 주는거 표현하기, 병뚜겅 명함 컴포넌트 밑에 창열려서 
        병뚜껑사진그런거 넣어서 만드는거 보여주기, NVR 엔터프라이즈 준비중입니다 띄우기, 자주묻는 질문  창줄이기
        컴포넌트 사이간격 띄우기 */
}

export default App;
