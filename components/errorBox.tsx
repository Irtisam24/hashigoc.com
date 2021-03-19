import React from "react";

import styles from "./errorBox.module.scss";

interface errorBoxProps {
  error: string;
}

export const ErrorBox: React.FC<errorBoxProps> = ({ error }) => {
  return <span className={`${styles.errorBox}`}>{error}</span>;
};
