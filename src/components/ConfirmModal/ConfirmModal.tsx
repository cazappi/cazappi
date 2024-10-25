// ConfirmModal.tsx
import React, { useState } from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p>Seu carrinho tem produtos de outra loja! Deseja limpar o carrinho?</p>
        <div style={styles.buttons}>
          <ButtonWithHover onClick={onConfirm} label="Sim, limpar carrinho" />
          <ButtonWithHover onClick={onCancel} label="Cancelar" />
        </div>
      </div>
    </div>
  );
};

const ButtonWithHover: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{ 
        ...styles.button, 
        ...(isHovered ? styles.buttonHover : {}) 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center' as const,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    cursor: 'pointer',
  },
  buttonHover: {
    color: 'red',
    transform: 'scale(1.1)',
  },
};

export default ConfirmModal;
