export const ucHomeStyles = () => {
  const divContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const divStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
    padding: "60px 0 5px 0",
    width: "100%",
    overflow: "hidden",
  };

  const h1Styles: React.CSSProperties = {
    color: "white",
    fontSize: "130px",
    textAlign: "center",
    lineHeight: "1.1",
    display: "flex",
    flexDirection: "column",
  };

  const h2Styles: React.CSSProperties = {
    color: "white",
    fontSize: "50px",
    textAlign: "center",
  };

  const pStyles: React.CSSProperties = {
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  };

  return { divStyles, h1Styles, h2Styles, pStyles, divContainer };
};

export const ucProjectDisplayStyles = () => {
  const divStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(1, 1fr)",
    gap: "4rem",
    cursor: "pointer",
    padding: "100px 0 40px 0",
   };

  const projectGrid: React.CSSProperties = {
    borderRadius: "10px",
    transition: "all 0.6s ease",
    boxShadow: "0 5px 8px 0 #141414",
    border: "2px solid #141414",
    position: "relative",
    display: "flex",
    width:"100%",
    height:"40vh"
  };

  return { divStyles, projectGrid };
};
