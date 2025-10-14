"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function useCurrentHash() {
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash || "";
    setCurrentHash(hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname, searchParams]); // re-run when route or query changes

  return currentHash;
}
