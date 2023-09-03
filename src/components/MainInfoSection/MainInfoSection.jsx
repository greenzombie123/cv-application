import "./MainInfoSection.css";
import WorkSection from "./WorkSection/WorkSection";
import { workInfoList } from "../../cvinfo";

function MainInfoSection({ hasSubmit}) {

  return (
    <div className="mainInfoSection">
      <WorkSection workInfoList = {workInfoList}/>
    </div>
  );
}

export default MainInfoSection;
