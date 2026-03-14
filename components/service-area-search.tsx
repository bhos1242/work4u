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
      {/* Search bar */}
      <div className="max-w-md mx-auto mb-10 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search your area..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-12 h-14 text-base rounded-2xl bg-card border-border shadow-sm focus:shadow-md transition-shadow"
          aria-label="Search service areas"
        />
      </div>

      {/* Area pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {filtered.map((area) => (
          <span
            key={area}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-200 cursor-default shadow-sm"
          >
            <MapPin className="h-4 w-4 text-primary opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
            {area}
          </span>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No areas found matching &ldquo;{search}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <p className="text-center text-sm text-muted-foreground mt-8">
        Don&apos;t see your area? We&apos;re expanding!{" "}
        <a
          href="https://wa.me/918421502803?text=Hi,%20I%20need%20help%20in%20my%20area"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
        >
          Contact us on WhatsApp
        </a>
      </p>
    </div>
  );
}
