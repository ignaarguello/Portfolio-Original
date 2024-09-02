import React from "react";
import "../../styles/styles.css";

export default function IndexPage(props) {
  const { title, color } = props;

  const styles = {
    indexSectionHomeP1Desk: {
      display: "block", // Asegura que el elemento se comporte como un bloque
      color: color || "gray", // Color por defecto negro
      textAlign: props.align || "left", // Alineación por defecto a la izquierda
      fontSize: '3.3rem',
      fontWeight: '300',
    },
  };

  return (
    <span style={styles.indexSectionHomeP1Desk} id="IndexSection">
      {title}
    </span>
  );
}
