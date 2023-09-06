import "./MainInfoSection.css";
import WorkSection from "./WorkSection/WorkSection";
import CareerObjectiveSection from "./CareerObjective/CareerObjective.jsx";
import AcademicSection from "./AcademicSection/AcademicSection";

function MainInfoSection() {
  return (
    <div className="mainInfoSection">
      <CareerObjectiveSection />
      <WorkSection />
      <AcademicSection/>
    </div>
  );
}

export default MainInfoSection;
