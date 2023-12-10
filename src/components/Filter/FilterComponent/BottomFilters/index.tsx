// FilterComponent.tsx
import React, { useState } from 'react';
import FilterButton from '../../FilterButton/index';

const filters = ['Entrega', 'Retirada'];

const FilterComponentBot: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    // Se o filtro clicado já está ativo, desative-o, caso contrário, ative-o
    setActiveFilter(current => current === filter ? null : filter);
    // Implemente a lógica de filtragem aqui
    // Se activeFilter for null, você pode querer mostrar todos os itens novamente
    console.log(`Filtrando por: ${activeFilter}`);
  };

  return (
    <div>
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          label={filter.charAt(0).toUpperCase() + filter.slice(1)}
          isActive={activeFilter === filter}
          onClick={() => handleFilterClick(filter)}
        />
      ))}
    </div>
  );
};

export default FilterComponentBot;