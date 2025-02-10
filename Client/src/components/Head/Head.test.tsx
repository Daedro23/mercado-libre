import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import Head from './Head';

interface MockHeadProps {
    title: string;
}

const MockHead: React.FC<MockHeadProps> = ({ title }) => (
    <HelmetProvider>
        <Head title={title} />
    </HelmetProvider>
);

const getMetaTag = (metaName: string): string => {
    const metas = document.getElementsByTagName('meta');
    let foundMeta = '';

    for (const metaTag of metas) {
        if (metaTag.getAttribute('name') === metaName) {
            foundMeta = metaTag.getAttribute('content') || '';
        }
    }

    return foundMeta;
};

describe('Componente <Head />', () => {
    it('Cambia el título del <head> según lo que se le pase', async () => {
        render(<MockHead title={'Mi título'} />);
        await waitFor(() => {
            expect(document.title).toEqual('Mi título');
            expect(document.title).not.toEqual('Mi título 123');
        });
    });

    it('Renderiza meta tags', async () => {
        render(<MockHead title='Mercado Libre' />);
        await waitFor(() => {
            expect(getMetaTag('description')).toEqual(
                'Challenge Técnico Frontend'
            );
            expect(getMetaTag('author')).toEqual('Danny Rodríguez');
            expect(getMetaTag('author')).not.toEqual('Eduard Gonzalez');
        });
    });
});
