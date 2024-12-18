import React, { useState } from 'react';
import { BsGeoAltFill, Bs123 } from 'react-icons/bs';
import { IconWrapper, InputAddress, InputWithIcon, SubTitle } from '../../pages/GerenciarDadosCadastrais/style';
import { FLEXROW, InputsWrapper } from '../../pages/SignUp/style';
import { THEME } from '../../theme';
import { responsiveFontSize, responsiveHeight } from '../../utils/responsive-functions';
import { ActionButton, DeleteButton } from './style';

interface Address {
    id: number;
    city: string;
    state: string;
    street: string;
    zipCode: string;
    number: string;
    district: string;
    complement: string;
}

interface EditingAdressProps {
    address: Address;
    onSave: (updatedAddress: Address) => void;
    onCancel: () => void;
    adding: boolean;
}

const EditingAdress: React.FC<EditingAdressProps> = ({address, onSave, onCancel, adding}) => {
    // passando para currentAddress o endereço que está sendo editado.
    const [currentAddress, setCurrentAddress] = useState<Address>(address);
    
    // Ao alterar algo no endereço, é alterado no nosso objeto
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurrentAddress((prev) => ({ ...prev, [name]: value }));
    };
    
    // irá ativar o modo de salvar na tela de gerenciamento de dados, passando nosso endereço editado como parâmetro
    const handleSaveClick = () => {
        onSave(currentAddress);
    }

    // Para fazer o .map dos inputs
    const addressFields = [
    { name: 'zipCode', placeholder: 'CEP' },
    { name: 'state', placeholder: 'Estado' },
    { name: 'city', placeholder: 'Cidade' },
    { name: 'district', placeholder: 'Bairro' },
    { name: 'street', placeholder: 'Rua' },
    { name: 'number', placeholder: 'Número' },
    { name: 'complement', placeholder: 'Complemento' }
    ];

    return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', margin: '6px' }}>
        <SubTitle>{adding ? 'Adicionar endereço' : 'Editar endereço'}</SubTitle>
      </div>
      <InputsWrapper>
        {addressFields.map((field, fieldIndex) => {

          // Campos que estão na mesma linha!
          if (field.name === 'street' || field.name === 'number') {
            return (
              field.name === 'street' && (
                <FLEXROW key={fieldIndex} style={{ width: '100%', marginBlock: 0 }}>
                  <InputWithIcon>
                    <IconWrapper>
                      <BsGeoAltFill />
                    </IconWrapper>
                    <InputAddress
                      type="text"
                      name="street"
                      placeholder="Rua"
                      value={currentAddress.street}
                      onChange={handleAddressChange}
                    />
                  </InputWithIcon>
                  <InputWithIcon>
                    <IconWrapper>
                      <Bs123 />
                    </IconWrapper>
                    <InputAddress
                      type="text"
                      name="number"
                      placeholder="Número"
                      value={currentAddress.number}
                      onChange={handleAddressChange}
                      style={{ marginRight: 0 }}
                    />
                  </InputWithIcon>
                </FLEXROW>
              )
            );
          }
          
          // Resto dos campos individuais
          return (
            <InputWithIcon key={fieldIndex}>
              <IconWrapper>
                <BsGeoAltFill />
              </IconWrapper>
              <InputAddress
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                value={currentAddress[field.name as keyof typeof address]}
                onChange={handleAddressChange}
                style={field.name === 'number' ? { marginRight: 0 } : {}}
              />
            </InputWithIcon>
          );
        })}
      </InputsWrapper>
      <FLEXROW style={{width: '45%', marginTop: 0, fontSize: responsiveFontSize(10)}}>
        {adding && <DeleteButton onClick={onCancel}>Cancelar</DeleteButton>}
        <ActionButton onClick={handleSaveClick}> Salvar </ActionButton>
      </FLEXROW>
    </>
  );
};

export default EditingAdress;
