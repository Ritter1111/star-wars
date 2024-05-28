import AboutSection from '@/components/aboutSection';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('AboutSection Component', () => {
  test('renders correctly with headings and text', () => {
    render(<AboutSection />);

    expect(screen.getByText(/welcome to the swapi/i)).toBeInTheDocument();
    expect(screen.getByText(/For more information just click on any/i)).toBeInTheDocument();
  });
});
