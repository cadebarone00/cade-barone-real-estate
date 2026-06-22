"use client";

import { useContactModal } from "@/components/ContactModal";

export function OpenContactButton({ children, className }) {
  const { open } = useContactModal();
  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
