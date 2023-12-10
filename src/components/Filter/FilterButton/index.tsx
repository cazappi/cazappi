import React from 'react';
import { StyledButton } from "./style"

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <StyledButton isActive={isActive} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default FilterButton;