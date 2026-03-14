"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918421502803?text=Hi,%20I%20need%20help%20with..."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-colors hover:scale-105 transform"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.5} fill="white" />
    </a>
  );
}
