import React from "react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    position: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "PhD in Education Technology with 15+ years of experience in online learning.",
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Former senior engineer at top tech companies, passionate about education.",
  },
  {
    name: "Emily Rodriguez",
    position: "Head of Curriculum",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Master educator with expertise in curriculum design and student success.",
  },
  {
    name: "David Thompson",
    position: "Director of Operations",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "MBA with 10+ years managing educational institutions and training programs.",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-indigo-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
