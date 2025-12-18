import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('should render exchange rate update message', () => {
    render(<PageFooter />);
    
    expect(screen.getByText('Exchange rates are updated hourly')).toBeInTheDocument();
  });

  it('should display copyright notice', () => {
    render(<PageFooter />);
    
    expect(screen.getByText('© 2025 Godel Technologies. All rights reserved.')).toBeInTheDocument();
  });

  it('should display last updated timestamp when provided', () => {
    const timestamp = 1704067200000; // Jan 1, 2024, 00:00:00 UTC
    render(<PageFooter lastUpdated={timestamp} />);
    
    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();
  });

  it('should not display last updated timestamp when not provided', () => {
    render(<PageFooter />);
    
    expect(screen.queryByText(/Last updated:/)).not.toBeInTheDocument();
  });

  it('should render all footer elements in correct order', () => {
    const { container } = render(<PageFooter lastUpdated={1704067200000} />);
    
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs).toHaveLength(3);
    expect(paragraphs[0]).toHaveTextContent('Exchange rates are updated hourly');
    expect(paragraphs[1]).toHaveTextContent(/Last updated:/);
    expect(paragraphs[2]).toHaveTextContent('© 2025 Godel Technologies. All rights reserved.');
  });
});
