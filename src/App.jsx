import TopInfoSection from "./components/TopInfoSection/TopInfoSection";
import "./App.css";
import { HasSubmitContext } from "./context/hasSubmitContext";
import SideInfoSection from "./components/SideInfoSection/SideInfoSection";
import MainInfoSection from "./components/MainInfoSection/MainInfoSection";
import { useState } from "react";

function App() {
  const [hasSubmit, setHasSubmit] = useState(false);

  function onPreviewButtonClick() {
    setHasSubmit(!hasSubmit);
  }

  return (
    <>
      <div className="App">
        <HasSubmitContext.Provider value={hasSubmit}>
          <TopInfoSection />
          <SideInfoSection />
          <MainInfoSection />
        </HasSubmitContext.Provider>
      </div>
      <div className="buttonContainer">
        <button className="previewButton" onClick={onPreviewButtonClick}>
          Preview
        </button>
        <button className="submitButton">Submit</button>
      </div>
    </>
  );
}

export default App;
