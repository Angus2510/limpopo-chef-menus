"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export function PrintActions() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.print();
    }, 300);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="no-print mb-4 flex justify-end gap-2">
      <Button onClick={() => window.print()}>Save as PDF</Button>
    </div>
  );
}
