"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  // This useEffect will run once when the component mounts on the client
  useEffect(() => {
    setMounted(true); // Set the mounted state to true
  }, []);

  // If the component hasn't mounted yet, return null to avoid mismatched content
  if (!mounted) return null;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}


