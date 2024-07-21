import React, { useState, useEffect } from 'react';
import {InputElement, InputLabel, Container} from "./style"

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}      

const InputDesktopLojista: React.FC<InputTextProps> = ({label, value:initialValue, ...rest }) => {
    const [value, setValue] = useState<string>(initialValue? String(initialValue) : '');


    useEffect(() => {
        setValue(initialValue? String(initialValue) : '');
    }, [initialValue]);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      };
  return (
        <Container>
            <InputElement placeholder="Digite Aqui" value={value} onChange={handleChange} {...rest} />
            <InputLabel>{label}</InputLabel>
        </Container>
  );
};

export default InputDesktopLojista;