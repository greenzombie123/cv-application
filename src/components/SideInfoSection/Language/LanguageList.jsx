import { useState } from "react";
import { languageData } from "../../../langaugedata";
import LanguageEntry from "./LanguageEntry";
import "./LanguageList.css";

function LanguageList() {
  const [languageList, setLanguageList] = useState(languageData);

  function onLanguageListChange(id, propName) {
    const listCopy = [...languageList];
    const languageCopy = listCopy.find((language) => language.id === id);
    return (e) => {
      switch (propName) {
        case "language":
          languageCopy.language = e.target.value;
          setLanguageList(listCopy);
          break;
        case "level":
          languageCopy.level = e.target.value;
          setLanguageList(listCopy);
          break;
        default:
          break;
      }
    };
  }

  function deleteLanguageEntry(id) {
    return () => {
      const listCopy = [...languageList];
      const newListCopy = listCopy.filter((le) => le.id !== id);
      setLanguageList(newListCopy);
    };
  }

  function addNewLanguageEntry() {
    const listCopy = [...languageList];
    listCopy.push({
      id: listCopy.length + 1,
      language: null,
      level: null,
    });
    setLanguageList(listCopy);
  }

  return (
    <>
      <h1>Languages</h1>
      <ul className="langaugeList">
        {languageList.map((language) => (
          <LanguageEntry
            key={language.id}
            {...language}
            onClick={onLanguageListChange(language.id, "level")}
            onChange={onLanguageListChange(language.id, "language")}
            onDeleteButtonClick={deleteLanguageEntry(language.id)}
          >
            {languageList.length > 1 && (
              <button
                className="deleteButton"
                onClick={deleteLanguageEntry(language.id)}
              >
                x
              </button>
            )}
          </LanguageEntry>
        ))}
      </ul>
      <button className="addButton">Add</button>
    </>
  );
}

export default LanguageList;
