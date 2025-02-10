import { createContext, useContext, useState, ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface HeadContextProps {
  title: string;
  setTitle: (title: string) => void;
}

const HeadContext = createContext<HeadContextProps | undefined>(undefined);

export const HeadProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Mercado Libre - Compra y vende");

  return (
    <HeadContext.Provider value={{ title, setTitle }}>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" href="logo.png" type="image/x-icon" />
        <meta charSet="utf-8" />
        <meta name="description" content="Challenge Técnico Frontend" />
        <meta
          name="keywords"
          content="Mercado Libre, React, Front-end, JavaScript"
        />
        <meta name="author" content="Danny Rodríguez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffe600" />

        <meta property="og:title" content={title} />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:url" content="https://www.mercadolibre.com.ar/" />
        <meta property="og:type" content="website" />

        {/* TAGS DE TWITTER */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:url" content="https://x.com/mercadolibre" />
        <meta name="twitter:site" content="@mercadolibre" />
        <meta name="twitter:description" content="Challenge Técnico Frontend" />
      </Helmet>
      {children}
    </HeadContext.Provider>
  );
};

export const useHead = () => {
  const context = useContext(HeadContext);
  if (!context) {
    throw new Error("useHead debe usarse dentro de HeadProvider");
  }
  return context;
};
