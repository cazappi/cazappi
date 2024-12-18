import styled from 'styled-components';
import { THEME } from '../../theme';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';
import { Container } from '../ProfileClient/style';

export const ContainerLojista = styled(Container)`
    margin-block: 0px;
    margin-bottom: ${rh(50)};
`
