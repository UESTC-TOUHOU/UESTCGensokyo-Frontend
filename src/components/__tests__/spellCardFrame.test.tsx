import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SpellCardFrame from '../SpellCardFrame';

describe('SpellCardFrame', () => {
  test('renders children correctly', () => {
    render(
      <SpellCardFrame>
        <p>Spell Card Content</p>
      </SpellCardFrame>
    );
    expect(screen.getByText('Spell Card Content')).toBeInTheDocument();
  });

  test('renders title when provided', () => {
    render(
      <SpellCardFrame title="博丽结界">
        <p>Content</p>
      </SpellCardFrame>
    );
    expect(screen.getByRole('heading', { level: 3, name: '博丽结界' })).toBeInTheDocument();
  });

  test('applies variant classes correctly', () => {
    const { container } = render(
      <SpellCardFrame variant="gold" className="custom-card">
        <p>Gold Card</p>
      </SpellCardFrame>
    );
    const frame = container.firstChild as HTMLElement;
    expect(frame).toHaveClass('spellcard-frame');
    expect(frame).toHaveClass('spellcard-variant-gold');
    expect(frame).toHaveClass('custom-card');
  });

  test('applies default variant class when not specified', () => {
    const { container } = render(
      <SpellCardFrame>
        <p>Default Card</p>
      </SpellCardFrame>
    );
    const frame = container.firstChild as HTMLElement;
    expect(frame).toHaveClass('spellcard-frame');
    expect(frame).toHaveClass('spellcard-variant-default');
  });
});
