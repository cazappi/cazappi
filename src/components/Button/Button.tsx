import React from "react";
import { THEME } from "../../theme/index";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";
import styled, { css } from "styled-components";

const Button = styled.button<{ type: "red" | "white" | "warning" }>`
  border: none;
  text-decoration: none;
  border-radius: 32px;
  padding: ${rh(10)} 30.5px;
  min-height: ${rh(64)};
  min-width: ${rw(100)};
  font-weight: bold;
  font-size: ${rf(20)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  ${({ type }) => {
    switch (type) {
      case "red":
        return css`
          background-color: ${THEME.COLORS.PRIMARY};
          color: #fff;
        `;
      case "white":
        return css`
          background-color: #fff;
          color: ${THEME.COLORS.PRIMARY};
          border: 1px solid ${THEME.COLORS.PRIMARY};
        `;
      case "warning":
        return css`
          background-color: #ff7272;
          color: #fff;
        `;
      default:
        return css`
          background-color: ${THEME.COLORS.PRIMARY};
          color: #fff;
        `;
    }
  }};
`;

type ButtonProps = {
  type: "primary" | "secondary" | "warning";
  text: string;
  onClick?: () => void;
};

export default Button;
