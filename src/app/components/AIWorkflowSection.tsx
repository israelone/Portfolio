import { portfolioData } from "../data/portfolio";

export default function AIWorkflowSection() {
  const { aiWorkflow } = portfolioData;

  return (
    <section
      id="ai-workflow"
      className="py-24 px-6 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            {aiWorkflow.title}
          </h2>
          <div className="w-16 h-1 bg-cyan-600 rounded"></div>
        </div>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl">
          {aiWorkflow.intro}
        </p>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {aiWorkflow.practices.map((practice, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all"
            >
              {/* Tool Header */}
              <div className="flex items-start gap-4 mb-5">
                <span className="text-5xl flex-shrink-0">
                  {practice.tool === "ChatGPT"
                    ? "💬"
                    : practice.tool === "GitHub Copilot"
                      ? "🤖"
                      : "⌨️"}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  {practice.tool}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {practice.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Philosophy */}
        <div className="bg-white rounded-2xl border border-gray-200 p-10 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {aiWorkflow.cta}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">⚡</span>
              <h4 className="text-lg font-bold text-gray-900">Faster Iteration</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Accelerate development cycles and get to testable code quicker without sacrificing quality.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🧠</span>
              <h4 className="text-lg font-bold text-gray-900">Better Learning</h4>
            </div>
            <p className="text-gray-600 text-sm">
              Understand new technologies and patterns faster through interactive exploration and examples.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">✨</span>
              <h4 className="text-lg font-bold text-gray-900">Higher Quality</h4>
            </div>
            <p className="text-gray-600 text-sm">
              More time for thoughtful design, code review, and testing instead of repetitive tasks.
            </p>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">A crucial mindset:</span> AI tools are productivity multipliers, not shortcuts. I maintain rigorous engineering standards—all suggestions are critically evaluated, thoroughly tested, and integrated only when they meet quality standards.
          </p>
        </div>
      </div>
    </section>
  );
}
