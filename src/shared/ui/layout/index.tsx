import React from 'react';
import { useOutlet } from 'react-router-dom';

type LayoutProps = {
  headerSlot: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ headerSlot }) => {
  const currentOutlet = useOutlet();
  return (
    <>
      {headerSlot}
      <main>{currentOutlet}</main>
    </>
  );
};
