"use client";

import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
      {submitted ? (
        <div className="flex-1 text-center py-3.5 px-4 bg-surface border border-success/40 rounded-md text-success font-mono text-sm uppercase tracking-[0.14em]">
          &gt; Subscribed. Deals inbound.
        </div>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3.5 rounded-md bg-surface border border-border text-ink placeholder-ink-mute font-mono text-sm focus:outline-none focus:border-accent focus:bg-surface-2 transition-colors"
          />
          <button
            type="submit"
            className="px-7 py-3.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors flex-shrink-0 text-sm"
          >
            Subscribe
          </button>
        </>
      )}
    </form>
  );
}
