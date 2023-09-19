import TopInfoSection from "./components/TopInfoSection/TopInfoSection";
import "./App.css";
import { HasSubmitContext } from "./context/hasSubmitContext";
import SideInfoSection from "./components/SideInfoSection/SideInfoSection";
import MainInfoSection from "./components/MainInfoSection/MainInfoSection";
import { useState } from "react";

function App() {
  const [ hasSubmit, setHasSubmit] = useState(false)

  function onPreviewButtonClick() {
    setHasSubmit(!hasSubmit);
  }

  return (
    <div className="App">
      <HasSubmitContext.Provider value={hasSubmit}>
        <TopInfoSection />
        <SideInfoSection />
        <MainInfoSection />
      </HasSubmitContext.Provider>
      <div className="buttonContainer">
        <button className="previewButton" >
          Preview
        </button>
        <button className="submitButton" onClick={onPreviewButtonClick}>Submit</button>
      </div>
    </div>
  );
}

export default App;
