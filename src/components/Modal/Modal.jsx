import { createPortal } from 'react-dom';
import './Modal.css';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Si no está abierto, no renderices nada

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
