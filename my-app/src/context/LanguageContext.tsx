import React, { createContext, useContext, useState } from "react";

interface LanguageContextValues {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextValues>({
  language: "hr",
  setLanguage: () => {},
});

export default function LanguageProvider({ children }: React.PropsWithChildren) {
  const [language, setLanguage] = useState("hr");

  return <LanguageContext.Provider value={{ language: language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);

  return context;
}
