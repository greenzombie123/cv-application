import TopInfoSection from "./components/TopInfoSection/TopInfoSection";
import "./App.css";
import { useHasSubmit } from "./context/hasSubmitContext";
import SideInfoSection from "./components/SideInfoSection/SideInfoSection";
import MainInfoSection from "./components/MainInfoSection/MainInfoSection";

function App() {
  const { hasSubmit, setHasSubmit, HasSubmitContext } = useHasSubmit();

  function onPreviewButtonClick(){
    setHasSubmit(!hasSubmit)
  }

  return (
    <div className="App">
      <HasSubmitContext.Provider value={hasSubmit}>
        <TopInfoSection hasSubmit={hasSubmit} />
        <SideInfoSection hasSubmit={hasSubmit} />
        <MainInfoSection hasSubmit={hasSubmit} />
      </HasSubmitContext.Provider>
      <div className="buttonContainer">
        <button className="previewButton" onClick={onPreviewButtonClick}>Preview</button>
        <button className="submitButton">Submit</button>
      </div>
    </div>
  );
}

export default App;
