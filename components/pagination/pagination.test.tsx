import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Pagination from '@/components/pagination';
import { render, screen } from '@testing-library/react';
import { mockHeroes } from '@/__tests__/mock_data';

const { useRouter, useSearchParams } = vi.hoisted(() => {
  const mockedRouterPush = vi.fn();
  return {
    useRouter: () => ({ push: mockedRouterPush }),
    useSearchParams: () => new URLSearchParams({ page: '1' }),
    mockedRouterPush,
  };
});

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter,
    useSearchParams,
  };
});

describe('Pagination Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<Pagination data={mockHeroes} />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Renders pagination buttons with correct text and disables prev button if no previous page', () => {
    const prevButton = screen.getByText('Prev');
    const nextButton = screen.getByText('Next');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeDisabled();
  });
});
