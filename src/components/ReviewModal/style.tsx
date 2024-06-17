import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const FundoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: white;
  padding-inline: ${rw(35)};
  padding-block: ${rh(50)};
  border-radius: 10px;
  width: 55%;
  text-align: center;
`;

export const TitleClose = styled.div`
  font-size: ${rf(28)};
  font-weight: 500;
  margin-bottom: ${rh(50)};
  color: ${THEME.COLORS.PRIMARY};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center;
  margin-block: ${rh(40)};
  font-size: ${rf(35)};

  svg {
    cursor: pointer;
    margin: 0 ${rw(8)};
    transition: color 0.2s;
  }

  .filled {
    color: green;
  }

  .empty {
    color: black;
  }
`;

export const TextArea = styled.textarea`
  width: 60%;
  height: 10%;
  padding-inline: ${rw(35)};
  border: ${rw(2.3)} solid ${THEME.COLORS.PRIMARY};
  border-radius: 12px;
  margin-block: ${rh(25)};
  ::placeholder {
    color: ${THEME.COLORS.GRAY_600};
    font-size: ${rf(22)};
  }
`;

export const Button = styled.button`
  background-color: #2dd10f;
  color: white;
  border: none;
  padding-inline: ${rw(30)};
  padding-block: ${rh(12)};
  border-radius: 15px;
  cursor: pointer;
  margin-top: ${rh(30)};

  &:hover {
    background-color: #24ab0a;
  }
`;

export const Label = styled.p`
  font-size: ${rf(21)};
  color: gray;
`;