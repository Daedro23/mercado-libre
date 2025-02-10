import { render } from '../../ThemeCustomTest';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb component', () => {
    it('renders breadcrumb items based on categories prop', () => {
        const categories = ['Category 1', 'Category 2', 'Category 3'];
        
        const { getByText } = render(<Breadcrumb categories={categories} />);

        categories.forEach((category) => {
            expect(getByText(category)).toBeInTheDocument();
        });
    });

    test('renders Breadcrumb with categories', () => {
        const categories = ['Category 1', 'Category 2'];
        const { getByText } = render(<Breadcrumb categories={categories} />);
        
        expect(getByText('Category 1')).toBeInTheDocument();
        expect(getByText('Category 2')).toBeInTheDocument();
    });

    it('does not render the arrow after the last item', () => {
        const categories = ['Category 1', 'Category 2'];
        const { container } = render(<Breadcrumb categories={categories} />);
        const lastItem = container.querySelector('span:last-child');
        expect(lastItem).not.toHaveStyle('content: \'>\'');
    });
});
