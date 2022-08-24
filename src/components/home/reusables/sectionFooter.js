const SectionFooter = ({ text1, text2, text3, text4 }) => {
  return (
    <div className="sectionFooter">
      <p className="sectionFooter-text">{text1}</p>
      <p className="sectionFooter-text">{text2}</p>
      <p className="sectionFooter-text">{text3}</p>
      <p className="sectionFooter-text">{text4}</p>
    </div>
  );
};

export default SectionFooter;
