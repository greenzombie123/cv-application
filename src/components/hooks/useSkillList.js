import { useState } from "react";
import { skillData } from "../../Data/skilldata";

export const useSkillList = () => {
    const [skillList, setSkillList] = useState(skillData)

    
};
