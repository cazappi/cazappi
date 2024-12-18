import React from 'react';
import { ButtonRole } from '../../pages/GerenciarDadosCadastrais/style';
import { FLEXROW } from '../../pages/Politica/style';
import { Icon } from '@iconify-icon/react';

interface RoleButtonsProps {
  isActive: boolean;
  onChangeType: (value: boolean) => void;
  leftLabel: string;
  rightLabel: string;
  disableRight?: boolean;
  buttonType?: 'register' | 'role';
}

const RoleButtons: React.FC<RoleButtonsProps> = ({
  isActive,
  onChangeType,
  leftLabel,
  rightLabel,
  disableRight = false,
}) => {

  return (
    <FLEXROW style={{ width: '100%' }}>
      {/* botão esquerdo */}
      <ButtonRole isActive={isActive} onClick={() => isActive ? null : onChangeType(true)}>
        <Icon icon="material-symbols:person" width={26} style={{
          color: isActive ? '#32cf15' : '#B0B0B0',
          marginRight: '10px'
        }} />
        {leftLabel}
      </ButtonRole>

      {/* botão direito */}
      <ButtonRole 
        isActive={!isActive} 
        onClick={() => isActive? !disableRight? onChangeType(false) : alert('Necessário ter uma loja!'): null}
        style={{ marginLeft: '10px' }}
      >
        <Icon icon="ic:round-business-center" width={26} style={{
          color: isActive ? '#B0B0B0' : '#32cf15',
          marginRight: '10px'
        }} />
        {rightLabel}
      </ButtonRole>
    </FLEXROW>
  );
};

export default RoleButtons;
