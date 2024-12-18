import styled, { ThemeConsumer } from 'styled-components';
import { THEME } from '../../theme/index';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { Button } from '../../pages/ProductView/style';

export const ActionButton = styled(Button)`
    font-size: ${rf(25)};
    width: 50%;
    border-radius: 20px;
    padding-block: ${rh(10)};
    padding-inline: ${rw(20)};
    margin-top: ${rh(15)};
    color: white;
    background-color: #32cf15;

    &:hover {
        background-color: #259410;
        color: white;
    }
`;

export const DeleteButton = styled(ActionButton)`
    background-color: ${THEME.COLORS.PRIMARY};
    color: white;

    &:hover {
        background-color: #bf0a0d;
        color: white;
    }
`;