import { Mail } from "lucide-react";

export function GroupMembers() {
  const members = [
    {
      name: "Sarah Chen",
      role: "Lead Architect",
      specialization: "Heritage Conservation",
      email: "s.chen@example.com",
    },
    {
      name: "Michael Rodriguez",
      role: "Structural Engineer",
      specialization: "Adaptive Reuse",
      email: "m.rodriguez@example.com",
    },
    {
      name: "Aisha Patel",
      role: "Sustainability Consultant",
      specialization: "Green Building Systems",
      email: "a.patel@example.com",
    },
    {
      name: "David Kim",
      role: "Interior Designer",
      specialization: "Space Planning",
      email: "d.kim@example.com",
    },
    {
      name: "Emma Larsson",
      role: "Project Manager",
      specialization: "Construction Management",
      email: "e.larsson@example.com",
    },
    {
      name: "James Okonkwo",
      role: "Urban Planner",
      specialization: "Community Integration",
      email: "j.okonkwo@example.com",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="mb-4 text-[#5a6c84]">04 / Team</div>
          <h2 className="mb-6 text-[#001960]">Group Members</h2>
          <p className="max-w-2xl mx-auto leading-relaxed text-[#5a6c84]">
            A multidisciplinary team of experts collaborating to bring this vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.email}
              className="bg-white p-8 rounded-sm border border-[#001960]/10 hover:border-[#001960]/20 transition-colors"
            >
              <div className="w-12 h-12 bg-[#001960]/10 rounded-full mb-6 flex items-center justify-center">
                <span className="text-[#001960]">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="mb-1 text-[#001960]">{member.name}</h3>
              <div className="mb-2 text-[#5a6c84]">{member.role}</div>
              <p className="mb-4 text-[#5a6c84]">{member.specialization}</p>
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 transition-colors text-[#001960] hover:text-[#001960]/80"
              >
                <Mail className="w-4 h-4" />
                <span>{member.email}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
