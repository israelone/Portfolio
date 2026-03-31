import { portfolioData } from "../data/portfolio";
import Button from "./Button";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {projects.title}
          </h2>
          <div className="w-16 h-1 bg-cyan-600 rounded"></div>
          <p className="text-gray-600 mt-4 text-lg">{projects.intro}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 flex flex-col hover:border-cyan-300 hover:shadow-xl hover:translate-y-[-4px]"
            >
              {/* Placeholder Image with gradient */}
              <div className="h-48 bg-gradient-to-br from-cyan-500 via-cyan-400 to-blue-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <span className="text-6xl relative z-10">🚀</span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-5 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Optional highlights for deeper project context */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mb-5 space-y-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-gray-600 leading-relaxed pl-4 relative"
                      >
                        <span className="absolute left-0 top-0.5 text-cyan-600">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md text-xs font-semibold group-hover:bg-cyan-100 group-hover:text-cyan-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-6"></div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.github && project.github !== "#" && (
                    <Button
                      href={project.github}
                      variant="outline"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-sm py-2"
                    >
                      Code
                    </Button>
                  )}
                  {project.link && project.link !== "#" && (
                    <Button
                      href={project.link}
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-sm py-2"
                    >
                      Visit
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon - better design */}
        <div className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl text-center">
          <p className="text-gray-700">
            <strong className="text-gray-900 text-lg">
              More projects in progress
            </strong>
          </p>
          <p className="text-gray-600 mt-2">
            I&apos;m currently developing detailed case studies for my strongest
            projects showcasing real-world problem solving and technical depth.
          </p>
        </div>
      </div>
    </section>
  );
}
 