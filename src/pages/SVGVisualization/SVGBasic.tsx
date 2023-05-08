import React from "react";
import Path from "./Path";
import ViewBox from "./ViewBox";
import Text from "./Text";
import Gradation from "./Gradation";
import Pattern from "./Pattern";
import Mask from "./Mask";
import Stroke from "./Stroke";

export function SVGBasic(): JSX.Element {
  return (
    <>
      <ViewBox />
      <Path />
      <Text />
      <Gradation />
      <Pattern />
      <Mask />
      <Stroke />
    </>
  );
}
