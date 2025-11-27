import { AlertCircle, Settings, Users, Zap } from "lucide-react";

export function CurrentState() {
  const challenges = [
    {
      icon: AlertCircle,
      title: "Structural Concerns",
      description: "Aging infrastructure requiring modernization while preserving historic elements",
    },
    {
      icon: Zap,
      title: "Energy Inefficiency",
      description: "Outdated systems leading to high operational costs and environmental impact",
    },
    {
      icon: Users,
      title: "Space Utilization",
      description: "Current layout not optimized for contemporary work patterns and needs",
    },
    {
      icon: Settings,
      title: "Technology Gap",
      description: "Limited integration of modern building systems and smart technologies",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="mb-4 text-[#5a6c84]">02 / Current State</div>
          <h2 className="mb-6 text-[#001960]">Assessment & Challenges</h2>
          <p className="max-w-3xl leading-relaxed text-[#5a6c84]">
            A comprehensive evaluation has identified key areas requiring attention. 
            While the building maintains its structural integrity and historical charm, 
            several aspects need modernization to meet current standards and future demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-white p-8 rounded-sm border border-[#001960]/10"
            >
              <challenge.icon className="w-10 h-10 mb-4 text-[#001960]" strokeWidth={1.5} />
              <h3 className="mb-3 text-[#001960]">{challenge.title}</h3>
              <p className="leading-relaxed text-[#5a6c84]">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
