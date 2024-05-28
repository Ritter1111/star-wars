import HeroList from '@/components/heroList';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { mockHeroes } from '../mock_data';

describe('HeroList Component', () => {
  it('Renders correct number of hero links', () => {
    render(<HeroList heroes={mockHeroes.results} />);
    const heroLinks = screen.getAllByRole('link');
    expect(heroLinks.length).toBe(mockHeroes.results.length);
  });

  it('Displays correct hero names and href attributes', () => {
    render(<HeroList heroes={mockHeroes.results} />);
    const heroLinks = screen.getAllByRole('link');

    mockHeroes.results.forEach((hero, index) => {
      expect(heroLinks[index]).toHaveTextContent(hero.name);
      expect(heroLinks[index]).toHaveAttribute('href', `hero/${hero.id}`);
    });
  });

  it('Navigates to correct hero page when clicked', () => {
    render(<HeroList heroes={mockHeroes.results} />);
    const heroLinks = screen.getAllByRole('link');

    heroLinks.forEach((link, index) => {
      fireEvent.click(link);
      waitFor(() => {
        expect(window.location.href).toContain(`${mockHeroes.results[index].id}`);
      });
    });
  });
});
