import React, {
  createContext, useState, useCallback, useMemo, useEffect,
} from "react";

const SidebarContext = createContext({
  isOpen: true,
  toggleOpen: () => {},
});

const { Provider } = SidebarContext;

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 768);

  useEffect(() => {
    const handleResize = (e) => {
      const { innerWidth } = e.target;
      if (innerWidth < 768) setIsOpen(false);
      else setIsOpen(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);
  const contextValue = useMemo(() => ({
    isOpen, toggleOpen,
  }), [isOpen, toggleOpen]);

  return (<Provider value={contextValue}>{children}</Provider>);
};
export { SidebarContext, SidebarProvider };
