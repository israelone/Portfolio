import { portfolioData } from "../data/portfolio";

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 border-t border-gray-200 flex justify-center"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">About Me</h2>
          <div className="w-16 h-1 bg-cyan-600 rounded"></div>
        </div>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 mb-10 leading-relaxed font-medium">
          {about.intro}
        </p>

        {/* Bio Paragraphs */}
        <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
          {about.bio.map((paragraph, index) => (
            <p key={index} className="text-base">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights Grid - Improved design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Problem Solver</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I enjoy breaking down complex problems and building elegant,
              maintainable solutions with a focus on code quality.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✨</div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">User Experience</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I prioritize accessibility, performance, and intuitive interfaces in every
              project I build.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Always Learning</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              I stay current with modern technologies and best practices, continuously
              improving my craft.
            </p>
          </div>

          <div className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌐</div>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Bilingual</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fluent in English and Spanish, enabling effective collaboration with global
              teams and audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
