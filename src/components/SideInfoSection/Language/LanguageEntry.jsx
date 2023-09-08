import LevelButtons from "./LevelButtons";

function LanguageEntry({ language, level, onClick, onChange, onDeleteButtonClick }) {
  return (
    <div className="languageEntry">
      <div className="languageEntry_top">
        <input type="text" value={language} onChange={onChange}/>
        <p>{level}</p>
      </div>
      <LevelButtons onClick={onClick} currentLevel={level}/>
      <button className="deleteButton" onClick={onDeleteButtonClick}>x</button>
    </div>
  );
}

export default LanguageEntry;
