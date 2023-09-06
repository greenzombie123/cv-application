import "./MainInfoSection.css";
import WorkSection from "./WorkSection/WorkSection";
import CareerObjectiveSection from "./CareerObjective/CareerObjective.jsx";

function MainInfoSection() {
  return (
    <div className="mainInfoSection">
      <CareerObjectiveSection />
      <WorkSection />
    </div>
  );
}

export default MainInfoSection;
