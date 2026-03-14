"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

const areas = [
  "Shivajinagar",
  "Model Colony",
  "Bhosle Nagar",
  "Kothrud",
  "Karve Nagar",
  "Prabhat Road",
  "Ganeshkhind",
  "Aundh",
  "Sangvi",
  "Deccan Gymkhana",
  "Peth Area",
];

export function ServiceAreaSearch() {
  const [search, setSearch] = useState("");

  const filtered = areas.filter((area) =>
    area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-md mx-auto mb-8 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search your area..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 min-h-12 text-base rounded-lg"
          aria-label="Search service areas"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {filtered.map((area) => (
          <span
            key={area}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
          >
            <MapPin className="h-4 w-4 text-primary" strokeWidth={2.5} />
            {area}
          </span>
        ))}
        {filtered.length === 0 && (
          <p className="text-muted-foreground text-sm">
            No areas found. We&apos;re expanding! Contact us on WhatsApp.
          </p>
        )}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Don&apos;t see your area? We&apos;re expanding!{" "}
        <a
          href="https://wa.me/918421502803?text=Hi,%20I%20need%20help%20in%20my%20area"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline"
        >
          Contact us on WhatsApp
        </a>
      </p>
    </div>
  );
}
