import { render } from '@testing-library/react';
import GlobalContainer from './GlobalContainer'; 

describe('GlobalContainer', () => {
  it('should have max-width and margin applied', () => {
    const { container } = render(<GlobalContainer />);
    const div = container.firstChild as HTMLDivElement;

    expect(div).toHaveStyle('max-width: 1280px');
    expect(div).toHaveStyle('margin: 0 auto');
  });
});
