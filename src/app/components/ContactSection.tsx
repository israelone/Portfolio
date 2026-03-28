import { portfolioData } from "../data/portfolio";
import Button from "./Button";

export default function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {contact.title}
          </h2>
          <div className="w-16 h-1 bg-cyan-600 rounded mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6">{contact.intro}</p>
        </div>

        {/* Contact Methods Grid - Improved design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contact.methods.map((method, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all text-center group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide text-gray-600">
                {method.type}
              </h3>
              {method.link ? (
                <a
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-cyan-600 hover:text-cyan-700 font-semibold break-all text-sm block"
                  aria-label={`${method.type}: ${method.value}`}
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-gray-600 text-sm font-medium">
                  {method.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Primary CTA - More prominent */}
        <div className="bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-600 rounded-2xl p-12 text-white text-center mb-16 shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h3>
          <p className="text-lg mb-8 text-cyan-50 leading-relaxed">
            Whether you&apos;re looking to hire, collaborate, or just chat about
            web development—I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="mailto:israel.lopez.dev@example.com"
              variant="secondary"
              className="px-8"
            >
              Send Email
            </Button>
            <a
              href="https://linkedin.com/in/israel-lopez-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium border-2 border-white text-white hover:bg-white hover:text-cyan-600 transition-all"
            >
              Message on LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form - Improved design */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Quick Message
          </h3>
          <p className="text-gray-600 mb-8">
            Fill out the form below and I&apos;ll get back to you as soon as
            possible.
          </p>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Your Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-6 text-center">
            💡 <strong>Note:</strong> This form is a UI placeholder. Please
            reach out via email or LinkedIn to connect.
          </p>
        </div>
      </div>
    </section>
  );
}
