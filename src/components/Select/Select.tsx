import React, { useState } from 'react';
import { FakeSelect, Ml, Option, Conditional, SelectElement} from './style'; // Ajustei OptionsContainer
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

interface SelectProps {
  title: string;
  options: { value: string; label: string; price?: number }[];
}

const Select: React.FC<SelectProps> = ({ title, options }) => {
  const [Aberto, setAberto] = useState(false);
  const [valoresSelecionados, setValoresSelecionados] = useState<string[]>([]);

  const SelectAberto = () => {
    setAberto(!Aberto);
  };

  const handleOptionClick = (valorClicado: string) => {
    const estaSelecionado = valoresSelecionados.includes(valorClicado);

    if (estaSelecionado) {
      const selecoesAtualizadas = valoresSelecionados.filter((value) => value !== valorClicado);
      setValoresSelecionados(selecoesAtualizadas);
    } else {
      setValoresSelecionados([...valoresSelecionados, valorClicado]);
    }

    console.log(valoresSelecionados);
  };
  function FormattedPrice(valor:number){
      const formattedPrice = valor.toLocaleString('pt-BR', 
      { style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }); // arruma o valor a ser exibido no formato 0,00
      return formattedPrice;
}

  return (
    <div>
      <FakeSelect onClick={SelectAberto}>
        <Ml>{title}</Ml>
        {Aberto ? <BsChevronUp /> : <BsChevronDown />}
      </FakeSelect>
      {Aberto && (
        <SelectElement>
          {options.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              selected={valoresSelecionados.includes(option.value)}
            >
              <Conditional spaceAround={option.price!==undefined}>
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
