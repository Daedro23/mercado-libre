import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {
  it('renders the loading spinner', () => {
    render(<Loading />);

    const spinner = screen.getByLabelText(/loading spinner/i);
    expect(spinner).toBeInTheDocument();
  });

  it('has correct styles for the loading container', () => {
    const { container } = render(<Loading />);
    
    const loadingContainer = container.firstChild;

    expect(loadingContainer).toHaveStyle('display: flex');
    expect(loadingContainer).toHaveStyle('justify-content: center');
    expect(loadingContainer).toHaveStyle('align-items: center');
    expect(loadingContainer).toHaveStyle('height: 100vh');
    expect(loadingContainer).toHaveStyle('background-color: rgba(0, 0, 0, 0.05)');
  });
});
