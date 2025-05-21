// INFO: URL_PATHS
const URL_PATHS = {
  home: { PL: "Strona Główna", EN: "Home", path: "/" },
  about: { PL: "O mnie", EN: "About", path: "/about" },
  contact: { PL: "Kontakt", EN: "Contact", path: "/contact" },
};

const URL_PATHS_Arr = Object.entries(URL_PATHS).map(([key, value]) => ({
  ...value,
  key,
}));

export { URL_PATHS, URL_PATHS_Arr };
