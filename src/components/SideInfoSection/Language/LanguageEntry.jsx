import LevelButtons from "./LevelButtons";

function LanguageEntry({ language, level, onClick, onChange, children}) {
  return (
    <div className="languageEntry">
      <div className="languageEntry_top">
        <input type="text" value={language} onChange={onChange}/>
        <p>{level}</p>
      </div>
      <LevelButtons onClick={onClick} currentLevel={level}/>
      {children}
    </div>
  );
}

export default LanguageEntry;
