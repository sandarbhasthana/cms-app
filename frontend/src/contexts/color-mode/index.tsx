import { RefineThemes } from "@refinedev/antd";
import { ConfigProvider, theme } from "antd";
import {
  type PropsWithChildren,
  createContext,
  useEffect,
  useState
} from "react";

type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  // Check if we're in the browser environment
  const isBrowser = typeof window !== "undefined";

  const getInitialMode = () => {
    if (!isBrowser) return "light"; // Default for SSR

    const colorModeFromLocalStorage = localStorage.getItem("colorMode");
    const isSystemPreferenceDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const systemPreference = isSystemPreferenceDark ? "dark" : "light";
    return colorModeFromLocalStorage || systemPreference;
  };

  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    if (isBrowser) {
      window.localStorage.setItem("colorMode", mode);
    }
  }, [mode, isBrowser]);

  const setColorMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const { darkAlgorithm, defaultAlgorithm } = theme;

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode
      }}
    >
      <ConfigProvider
        // you can change the theme colors here. example: ...RefineThemes.Magenta,
        theme={{
          ...RefineThemes.Blue,
          algorithm: mode === "light" ? defaultAlgorithm : darkAlgorithm
        }}
      >
        {children}
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
};
