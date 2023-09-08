function LevelButtons({ onClick, currentLevel }) {
  function highlightButton(currentLevel, buttonLevel) {
    if (currentLevel === buttonLevel)
      return "levelButton levelButton_highlight";
    return "levelButton";
  }

  return (
    <div className="levelButtons_container">
      <div className="levelButtons">
        <button
          className={highlightButton(currentLevel, "Beginner")}
          value={"Beginner"}
          onClick={onClick}
        >
          1
        </button>
        <button
          className={highlightButton(currentLevel, "Intermediate")}
          value={"Intermediate"}
          onClick={onClick}
        >
          2
        </button>
        <button
          className={highlightButton(currentLevel, "Advance")}
          value={"Advance"}
          onClick={onClick}
        >
          3
        </button>
        <button
          className={highlightButton(currentLevel, "Native")}
          value={"Native"}
          onClick={onClick}
        >
          4
        </button>
      </div>
    </div>
  );
}

export default LevelButtons;
