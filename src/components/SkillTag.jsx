function SkillTag(props) {
  if (
    props.altText &&
    props.altText.currentWidth < props.altText.thresholdWidth
  ) {
    return (
      <div className="skills-tag">
        <h4 className="skills-tag__title">{props.altText.altText}</h4>
      </div>
    );
  } else {
    return (
      <div className="skills-tag">
        <h4 className="skills-tag__title">{props.text}</h4>
      </div>
    );
  }
}

export default SkillTag;
