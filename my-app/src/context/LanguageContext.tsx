import React, { createContext, useContext, useState } from "react";

interface LanguageContextValues {
  language: string;
}

const LanguageContext = createContext<LanguageContextValues>({
  language: "hr",
});

export default function LanguageProvider({ children }: React.PropsWithChildren) {
  const [language, setLanguage] = useState("hr");

  return <LanguageContext.Provider value={{ language: language }}>{children}</LanguageContext.Provider>;
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);

  return context;
}
