import styled from 'styled-components';
import { THEME } from '../../theme';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';
import { Container, IconEdit } from '../ProfileClient/style';

export const Image = styled.img`
    width: ${rw(150)};
    height: ${rw(150)};
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 30%;
    top: ${rh(580)}; 
    transform: translate(-50%, -50%);
`;

export const EditImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${rh(50)};
`;

export const BannerWrapper = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: ${rh(100)};
`;

export const BannerImage = styled.img`
    width: 100%;
    height: ${rh(400)};
    object-fit: cover;
`;

export const IconEditImg = styled(IconEdit)`
    width: ${rw(33)};
    height: ${rw(33)};
    font-size: ${rf(25)};
    position: absolute;
    top: auto;
    left: 26%;
    transform: translate(-50%, -50%);
`;

export const IconEditBanner = styled(IconEditImg)`
    top: auto;
    right: ${rw(40)};
    margin-top: -${rh(40)};
    left: auto;
    transform: none;
`;

export const ContainerLojista = styled(Container)`
    margin-block: 0px;
    margin-bottom: ${rh(50)};
`
