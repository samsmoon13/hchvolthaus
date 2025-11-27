import { Separator } from "./ui/separator";

export function DesignConcept() {
  const principles = [
    {
      title: "Heritage Preservation",
      description: "Maintain and restore original architectural features, respecting the building's historical significance and cultural value.",
    },
    {
      title: "Sustainable Integration",
      description: "Implement cutting-edge green technologies that work harmoniously with existing structures.",
    },
    {
      title: "Flexible Spaces",
      description: "Create adaptable environments that can evolve with changing needs over time.",
    },
    {
      title: "Natural Light",
      description: "Maximize daylight penetration through strategic interventions while preserving historic fenestration.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <div className="mb-4 text-[#5a6c84]">03 / Design Concept</div>
            <h2 className="mb-6 text-[#001960]">Vision & Principles</h2>
            <p className="leading-relaxed mb-8 text-[#5a6c84]">
              Our design approach centers on creating a dialogue between past and 
              present, ensuring that historic character is enhanced rather than 
              compromised by modern interventions.
            </p>
            <div className="w-16 h-1 bg-[#001960]"></div>
          </div>

          <div className="lg:col-span-3 space-y-10">
            {principles.map((principle, index) => (
              <div key={principle.title}>
                <div className="flex items-start gap-6">
                  <div className="min-w-[40px] pt-1 text-[#001960]/40">
                    0{index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-[#001960]">{principle.title}</h3>
                    <p className="leading-relaxed text-[#5a6c84]">
                      {principle.description}
                    </p>
                  </div>
                </div>
                {index < principles.length - 1 && (
                  <Separator className="mt-10 bg-[#001960]/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
