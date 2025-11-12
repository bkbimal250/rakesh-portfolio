import React, { useState } from 'react';
import { UIContext } from './ui-context.js';

export const UIProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <UIContext.Provider value={{ isMenuOpen, setIsMenuOpen, isModalOpen, setIsModalOpen }}>
      {children}
    </UIContext.Provider>
  );
};

export { UIContext } from './ui-context.js';
