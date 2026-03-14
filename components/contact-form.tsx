"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  }

  return (
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      <Card className="border border-border">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                name="name"
                required
                placeholder="Your full name"
                className="mt-1.5 min-h-12"
              />
            </div>
            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="mt-1.5 min-h-12"
              />
            </div>
            <div>
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                name="message"
                required
                placeholder="How can we help you?"
                rows={5}
                className="mt-1.5"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary-dark min-h-12 font-semibold rounded-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Address</h4>
            <p className="text-sm text-muted-foreground">
              Shrivardhan, Ganesh Nagar, Galli number 2, New Sanghavi,
              Pimpri-Chinchwad, Maharashtra 411027
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-5 w-5 text-primary" strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Email</h4>
            <a
              href="mailto:info@work4u.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              info@work4u.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Phone className="h-5 w-5 text-primary" strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Phone</h4>
            <div className="space-y-1">
              <a href="tel:+918421502803" className="block text-sm text-muted-foreground hover:text-primary transition-colors">+91 84215 02803</a>
              <a href="tel:+917219154615" className="block text-sm text-muted-foreground hover:text-primary transition-colors">+91 72191 54615</a>
              <a href="tel:+918767561855" className="block text-sm text-muted-foreground hover:text-primary transition-colors">+91 87675 61855</a>
              <a href="tel:+919673902058" className="block text-sm text-muted-foreground hover:text-primary transition-colors">+91 96739 02058</a>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
            <MessageCircle className="h-5 w-5 text-[#25D366]" strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">WhatsApp</h4>
            <a
              href="https://wa.me/918421502803"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-[#25D366] transition-colors"
            >
              +91 84215 02803
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
