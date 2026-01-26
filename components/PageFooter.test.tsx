import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('should render copyright notice', () => {
    render(<PageFooter />);
    
    expect(screen.getByText('© 2026 Godel Technologies. All rights reserved.')).toBeInTheDocument();
  });

  it('should display exchange rate update message', () => {
    render(<PageFooter />);
    
    expect(screen.getByText('Exchange rates are updated hourly')).toBeInTheDocument();
  });

  it('should display last updated timestamp when provided', () => {
    const timestamp = new Date('2026-01-26T15:00:00.000Z').getTime();
    render(<PageFooter lastUpdated={timestamp} />);
    
    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();
  });

  it('should not display last updated timestamp when not provided', () => {
    render(<PageFooter />);
    
    expect(screen.queryByText(/Last updated:/)).not.toBeInTheDocument();
  });
});
