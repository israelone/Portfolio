import { portfolioData } from "../data/portfolio";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white border-t border-gray-200 flex justify-center"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {skills.title}
          </h2>
          <div className="w-16 h-1 bg-cyan-600 rounded"></div>
          <p className="text-gray-600 mt-4 text-lg">Technologies and tools I work with regularly</p>
        </div>

        {/* Skills Grid - 2 column for better scannability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skills.categories.map((category) => (
            <div
              key={category.name}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all"
            >
              {/* Category Title */}
              <div className="flex items-start gap-3 mb-6">
                <span className="text-3xl flex-shrink-0">
                  {category.name === "Frontend"
                    ? "⚛️"
                    : category.name === "Backend"
                      ? "🔧"
                      : category.name === "Databases"
                        ? "💾"
                        : category.name === "Tools & DevOps"
                          ? "🔨"
                          : category.name === "AI-Assisted Development"
                            ? "🤖"
                            : "🗣️"}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.name}
                </h3>
              </div>

              {/* Skills List - Better spacing */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium group-hover:border-cyan-400 group-hover:bg-cyan-50 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary - More compact */}
        <div className="p-8 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl mx-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Overall Proficiency</h3>
          <p className="text-gray-700 leading-relaxed">
            4+ years of production experience with modern JavaScript/TypeScript stacks. Strong in React and full-stack development. Comfortable with cloud platforms, databases, and CI/CD pipelines. Effectively use AI tools to enhance productivity without sacrificing code quality.
          </p>
        </div>
      </div>
    </section>
  );
}
