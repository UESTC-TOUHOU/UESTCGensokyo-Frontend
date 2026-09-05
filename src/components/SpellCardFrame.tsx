import React, { ReactNode } from 'react';

export interface SpellCardFrameProps {
  children: ReactNode;
  title?: string;
  variant?: 'default' | 'gold' | 'purple' | 'green';
  className?: string;
}

export const SpellCardFrame: React.FC<SpellCardFrameProps> = ({
  children,
  title,
  variant = 'default',
  className = '',
}) => {
  const variantClass = `spellcard-variant-${variant}`;
  const combinedClassName = ['spellcard-frame', variantClass, className].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName}>
      {title && <h3 className="spellcard-title">{title}</h3>}
      {children}
    </div>
  );
};

export default SpellCardFrame;
