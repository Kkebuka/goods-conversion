import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const ModalContext = createContext(null);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(null);
  const resolveRef = useRef(null);

  const showModal = useCallback((content) => {
    return new Promise((resolve) => {
      resolveRef.current = resolve;
      setModal({ content, closing: false });
    });
  }, []);

  const closeModal = useCallback((result) => {
    setModal(prev => prev ? { ...prev, closing: true } : null);
    setTimeout(() => {
      setModal(null);
      resolveRef.current?.(result);
      resolveRef.current = null;
    }, 200);
  }, []);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      {modal && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && closeModal(null)}>
          <div className={`modal-sheet ${modal.closing ? 'closing' : ''}`}>
            <div className="modal-handle" />
            {typeof modal.content === 'function'
              ? modal.content({ closeModal })
              : modal.content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
