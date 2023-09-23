import LevelButtons from "./LevelButtons";
import { useContext } from "react";
import { HasSubmitContext } from "../../../context/hasSubmitContext";

function LanguageEntry({ language, level, onClick, onChange, children}) {
  const hasSubmit = useContext(HasSubmitContext);

  if(hasSubmit){
    return (
      <li className="languageEntry">
      <div className="languageEntry_top">
        <p className="languageEntry_previewText">{language}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;{level}</p>
      </div>
    </li>
    )
  }

  return (
    <li className="languageEntry">
      <div className="languageEntry_top">
        <input type="text" value={language} onChange={onChange}/>
        <p>{level}</p>
      </div>
      <LevelButtons onClick={onClick} currentLevel={level}/>
      {children}
    </li>
  );
}

export default LanguageEntry;
