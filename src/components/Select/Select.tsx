import React, { useState } from 'react';
import { FakeSelect, Ml, Option, Conditional, SelectElement } from './style'; // Ajustei OptionsContainer
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface SelectProps {
  title: string;
  options: { value: string; label: string; price?: number }[];
  onCategorySelect?: (selectedValue: string) => void;  // New prop to pass the selected category
}

const Select: React.FC<SelectProps> = ({ title, options, onCategorySelect }) => {
  const [Aberto, setAberto] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);  // Only one selection

  const SelectAberto = () => {
    setAberto(!Aberto);
  };

  const handleOptionClick = (valorClicado: string) => {
    setSelectedValue(valorClicado);  // Set only one selected value
    if (onCategorySelect) {
      onCategorySelect(valorClicado);  // Call parent function to pass selected value if provided
    }
    setAberto(false);  // Close the select after selection
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
              selected={option.value === selectedValue}  // Only one can be selected
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
