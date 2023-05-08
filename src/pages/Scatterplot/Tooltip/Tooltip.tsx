import React from "react";
import styled from "styled-components";

// Information needed to build the tooltip
export type InteractionData = {
  xPos: number;
  yPos: number;
  name: string;
};

type TooltipProps = {
  interactionData: InteractionData | null;
};

const StyledToolTip = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  padding: 4px;
  margin-left: 15px;
  transform: translateY(-50%);

  ::after {
    content: "";
    position: absolute;
    border-width: 5px; /* Arrow width */
    left: -10px; /* Arrow width * 2 */
    top: 50%;
    transform: translateY(-50%);
    border-color: transparent black transparent transparent;
  }
`;

export const Tooltip = ({ interactionData }: TooltipProps): JSX.Element => {
  if (!interactionData) {
    return <></>;
  }

  return (
    <StyledToolTip
      style={{
        left: interactionData.xPos,
        top: interactionData.yPos,
      }}
    >
      {interactionData.name}
    </StyledToolTip>
  );
};
