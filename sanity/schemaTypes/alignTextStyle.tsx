import React from "react";

const textAlignCenter: React.FC<{ children: any }> = ({ children }) => (
  <p style={{ textAlign: "center" }}>{children}</p>
);

const textAlignLeft: React.FC<{ children: any }> = ({ children }) => (
  <p style={{ textAlign: "left" }}>{children}</p>
);

const textAlignRight: React.FC<{ children: any }> = ({ children }) => (
  <p style={{ textAlign: "right" }}>{children}</p>
);

const textAlignJustify: React.FC<{ children: any }> = ({ children }) => (
  <p style={{ textAlign: "justify" }}>{children}</p>
);

// const textAlignCenter = (props: any) => (
//   <p style={{ textAlign: "center" }}>{props.children}</p>
// );

// const textAlignLeft = (props: any) => (
//   <p style={{ textAlign: "left" }}>{props.children}</p>
// );

// const textAlignRight = (props: any) => (
//   <p style={{ textAlign: "right" }}>{props.children}</p>
// );

// const textAlignJustify = (props: any) => (
//   <p style={{ textAlign: "justify" }}>{props.children}</p>
// );

export { textAlignLeft, textAlignCenter, textAlignRight, textAlignJustify };
