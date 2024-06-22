import styled from 'styled-components';
import { THEME } from '../../theme/index';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';

export const SelectElement = styled.div`
  border: none;
  font-size: ${rf(23)};
  width: 100%;
  outline: none;
  margin-bottom: ${rh(18)};
  display: flex;
  flex-direction: column;
`;

export const Ml = styled.span`
  margin-left: ${rw(5)};
  width: 90%;
`;

export const Option = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: flex-start;
  background-color: ${THEME.COLORS.WHITE};
  color: ${({ selected }) => (selected ? THEME.COLORS.PRIMARY : THEME.COLORS.BLACK)};
  width: 100%;
  height: ${rh(80)};
  border-bottom: 1px solid ${THEME.COLORS.GRAY_600};
  margin-bottom: ${rh(30)};
  font-weight: ${({ selected }) => (selected ? '500' : 'normal')};

  &:hover {
    color: ${THEME.COLORS.PRIMARY};
    font-weight: 500;
  }
`;
export const Conditional = styled.div<{ spaceAround: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ spaceAround }) => (spaceAround ? 'space-around': '')};
  padding-left: ${({ spaceAround }) => (spaceAround ? 0 : rw(50))};
  width:100%;
`;

export const FakeSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${THEME.COLORS.GRAY_600};
  font-size: ${rf(23)};
  width: 100%;
  outline: none;
  margin-bottom: ${rh(18)};
  cursor: pointer;
  height: ${rh(70)};
`;