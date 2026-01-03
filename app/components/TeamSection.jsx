import React from "react";
import { UserCircle, Briefcase, GraduationCap, Layers } from "lucide-react";

const teamMembers = [
  {
    name: "Mohamed Rafi Shaik",
    position: "Lead Trainer",
    Icon: UserCircle,
    bio: "A guiding force who shapes learning paths with expertise and clarity.Committed to empowering learners with real-world skills and confidence..",
  },
  {
    name: "Rupa Bhaskar",
    position: "Software Engineer",
    Icon: UserCircle,
    bio: "A dedicated problem-solver who turns complex requirements into clean, efficient code.Passionate about building scalable solutions that improve user experience and product quality.",
  },
  {
    name: "Swapa Uggam",
    position: "Software Developer & Trainer",
    Icon: GraduationCap,
    bio: "Balances hands-on development with motivating others to learn and grow.Transforms technical concepts into clear, practical lessons for aspiring developers.",
  },
  {
    name: "Hemani",
    position: "Learning Coach · Curriculum",
    Icon: Briefcase,
    bio: "A mentor who designs the learning journey, supports growth through collaboration, and helps learners stay on track.Creates a supportive environment where everyone can thrive.",
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
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden p-6 text-center"
            >
              <div className="flex items-center justify-center mb-5">
                <member.Icon className="h-20 w-20 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">
                {member.name}
              </h4>
              <p className="text-indigo-600 font-medium mb-3">
                {member.position}
              </p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
