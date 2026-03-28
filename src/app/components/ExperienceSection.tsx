import { portfolioData } from "../data/portfolio";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {experience.title}
          </h2>
          <div className="w-16 h-1 bg-cyan-600 rounded"></div>
          <p className="text-gray-600 mt-4 text-lg">
            4+ years of progressive experience building quality software
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experience.positions.map((position, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experience.positions.length  && (
                <div className="absolute left-8 top-28 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
              )}

              {/* Experience Card */}
              <div className="flex gap-6 pb-12">
                {/* Timeline dot */}
                <div className="flex-shrink-0 flex items-center justify-center mt-1">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-cyan-600 ring-4 ring-white border-2 border-cyan-200"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white p-8 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
                  {/* Title and Company Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {position.title}
                    </h3>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <p className="text-lg text-cyan-600 font-semibold">
                        {position.company}
                      </p>
                      <p className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">
                        {position.period}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-5 leading-relaxed">
                    {position.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {position.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-600 leading-relaxed"
                      >
                        <span className="text-cyan-600 font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Summary */}
        <div className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Career Trajectory
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Started with IBM&apos;s rigorous apprenticeship program where I
            built a strong foundation in software engineering principles.
            Advanced to Sparq as a Software Analyst, gaining practical
            experience in full-stack development. Now at Dorger Software
            Architects, I develop enterprise-grade solutions while mentoring
            junior developers and contributing to architectural decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
        