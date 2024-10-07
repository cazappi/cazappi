import React, { useState } from 'react';
import { FakeSelect, Ml, Option, Conditional, SelectElement } from './style'; // Ajustei OptionsContainer
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface SelectProps {
  title: string;
  options: { value: string; label: string; price?: number }[];
  onCategorySelect?: (selectedValue: string) => void;
}

const Select: React.FC<SelectProps> = ({ title, options, onCategorySelect }) => {
  const [Aberto, setAberto] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const SelectAberto = () => {
    setAberto(!Aberto);
  };

  const handleOptionClick = (valorClicado: string) => {
    setSelectedValue(valorClicado);
    if (onCategorySelect) {
      onCategorySelect(valorClicado);
    }
    setAberto(false);
  };

  function FormattedPrice(valor: number) {
    const formattedPrice = valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formattedPrice;
  }

  return (
    <div>
      <FakeSelect onClick={SelectAberto}>
        <Ml>{selectedValue ? options.find((option) => option.value === selectedValue)?.label : title}</Ml>
        {Aberto ? <BsChevronUp /> : <BsChevronDown />}
      </FakeSelect>
      {Aberto && (
        <SelectElement>
          {options.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              selected={option.value === selectedValue}  // Coloquei pra apenas uma opção ser selecionada, não sei se isso afeta outras telas :p
            >
              <Conditional spaceAround={option.price !== undefined}>
                <span>{option.label}</span>
                {option.price !== undefined && <span>{FormattedPrice(option.price)}</span>}
              </Conditional>
            </Option>
          ))}
        </SelectElement>
      )}
    </div>
  );
};

export default Select;
