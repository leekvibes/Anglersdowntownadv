"use client";

export function ContactForm() {
  return (
    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-lg border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-blue-brand/30"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-lg border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-blue-brand/30"
      />
      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full px-4 py-3 rounded-lg border border-gray-border text-sm focus:outline-none focus:ring-2 focus:ring-blue-brand/30 resize-none"
      />
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-brand text-white font-bold rounded-lg hover:bg-blue-dark transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
