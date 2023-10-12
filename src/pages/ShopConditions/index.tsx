import React from 'react';
import { FLEXROW, FLEXCOLUMN, TITLE, TEXT } from './style';
import { THEME } from '../../theme/index';
import logoImg from '../../assets/logoImg.png';
import chefImg from '../../assets/chefImg.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { Icon } from '@iconify-icon/react';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

const ShopConditions = () => {
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}

            {/* ----------------------- Container ----------------------- */}
            <div>
                <FLEXCOLUMN style={{
                    width: "99vw",
                    marginTop: rh(80)
                }}>
                    <FLEXROW style={{
                        width: "60%"
                    }}>
                        <img src={logoImg} alt="" style={{
                            width: rw(426),
                        }}/>
                        <img src={chefImg} alt="" style={{
                            width: rw(426),
                        }}/>
                    </FLEXROW>
                    
                    <TITLE style={{
                        marginBottom: rh(35),
                        marginTop: rh(90)
                    }}>Plano Cazappi</TITLE>

                    <FLEXCOLUMN style={{
                        width: "99vw"
                    }}>
                        <FLEXROW style={{
                            width: rw(960),
                            marginBottom: rh(48),
                            alignItems: 'initial'
                        }}>
                            <Icon icon="material-symbols:check-circle-rounded" height={rh(32.5)} style={{
                                marginRight: rw(13.25),
                                marginTop: rh(12),
                                color: THEME.COLORS.PRIMARY
                            }}/>
                            <TEXT>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices. Proin venenatis risus libero, at viverra massa fringilla in. 
                            </TEXT>
                        </FLEXROW>

                        <FLEXROW style={{
                            width: rw(960),
                            marginBottom: rh(48),
                            alignItems: 'initial'
                        }}>
                            <Icon icon="material-symbols:check-circle-rounded" height={rh(32.5)} style={{
                                marginRight: rw(13.25),
                                marginTop: rh(12),
                                color: THEME.COLORS.PRIMARY
                            }}/>
                            <TEXT>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices. Proin venenatis risus libero, at viverra massa fringilla in. 
                            </TEXT>
                        </FLEXROW>

                        <FLEXROW style={{
                            width: rw(960),
                            marginBottom: rh(48),
                            alignItems: 'initial'
                        }}>
                            <Icon icon="material-symbols:check-circle-rounded" height={rh(32.5)} style={{
                                marginRight: rw(13.25),
                                marginTop: rh(12),
                                color: THEME.COLORS.PRIMARY
                            }}/>
                            <TEXT>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices. Proin venenatis risus libero, at viverra massa fringilla in. 
                            </TEXT>
                        </FLEXROW>

                        <FLEXROW style={{
                            width: rw(960),
                            marginBottom: rh(48),
                            alignItems: 'initial'
                        }}>
                            <Icon icon="material-symbols:check-circle-rounded" height={rh(32.5)} style={{
                                marginRight: rw(13.25),
                                marginTop: rh(12),
                                color: THEME.COLORS.PRIMARY
                            }}/>
                            <TEXT>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices. Proin venenatis risus libero, at viverra massa fringilla in. 
                            </TEXT>
                        </FLEXROW>
                    </FLEXCOLUMN>

                    <Button as="a" type="red" style={{
                        marginBottom: rh(48),
                    }}>Escolher Plano</Button>

                </FLEXCOLUMN>
            </div>

            {/* ----------------------- FOOTER ----------------------- */}
            <Footer />
        </div>
    )
}

export default ShopConditions;