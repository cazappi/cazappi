import React from "react";
import { THEME } from "../../theme/index";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";
import styled, { css } from "styled-components";

const Button = styled.button<{ type: "red" | "white" | "home" }>`
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
          color: ${THEME.COLORS.WHITE};
        `;
      case "white":
        return css`
          background-color: ${THEME.COLORS.WHITE};
          color: ${THEME.COLORS.PRIMARY};
          border: 1px solid ${THEME.COLORS.PRIMARY};
        `;
      case "home":
        return css`
          background-color: ${THEME.COLORS.PRIMARY};
          color: ${THEME.COLORS.WHITE};
          width: ${rw(220)};
          height: ${rh(150)};
          border-radius: 16px;
          font-size: 24px;
          font-weight: bold;
          font-family: 'Roboto';
          @media (max-width: 710px) {
            height: ${rh(33)};
            width: ${rw(460)};
            font-size: 12px;
          }
        `;
      default:
        return css`
          background-color: ${THEME.COLORS.PRIMARY};
          color: ${THEME.COLORS.WHITE};
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
