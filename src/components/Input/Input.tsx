import React, { useState } from "react";
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';
import styled from 'styled-components';


const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
    height: ${rh(48)};
    font-size: max(${rw(13)}, 10px);
    border-radius: ${rh(16)};
    border: none;
    background-color: ${THEME.COLORS.GRAY_300};
    color: ${THEME.COLORS.GRAY_600};
    padding-left: ${rw(14.5)};
    padding-right: ${rw(40)};
    transition: 0.4s;
    &:focus {
        outline: none;
        box-shadow: 2px 2px 2px ${THEME.COLORS.PRIMARY};
    }
`;

const ShowPasswordButton = styled.button`
    top: 55%;
    transform: translateY(-50%);
    position: absolute;
    right: ${rw(12)};
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

interface InputProps {
    type?: string;
    placeholder?: string;
    size?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = "text", size = rw(240), placeholder, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const inputType = showPassword ? "text" : type;

    return (
        <InputWrapper>
        <StyledInput type={inputType} placeholder={placeholder} onChange={onChange} style={{
            width: size,
        }}/>
        {type === "password" && (
            <ShowPasswordButton onClick={togglePasswordVisibility}>
            {showPassword ? 
            <Icon icon="mdi:eye" width={"22px"} style={{
                color: THEME.COLORS.GRAY_600
            }}/> 
            : 
            <Icon icon="mdi:eye-off" width={"22px"} style={{
                color: THEME.COLORS.GRAY_600
            }}/>
            }
            </ShowPasswordButton>
        )}
        </InputWrapper>
    );
};

export default Input;
