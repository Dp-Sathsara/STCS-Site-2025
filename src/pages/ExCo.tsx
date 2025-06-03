import React from 'react';
import { LinkedinIcon, FacebookIcon } from 'lucide-react';
interface MemberCard {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  facebook?: string;
}
const ExCo: React.FC = () => {
  // Academic members
  const academicMembers: MemberCard[] = [{
    id: 'a1',
    name: 'Prof. Samantha Silva',
    position: 'Senior Treasurer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Professor of Statistics with 15 years of experience. Research interests include Bayesian statistics and statistical computing.',
    linkedin: 'https://linkedin.com'
  }, {
    id: 'a2',
    name: 'Dr. Amal Perera',
    position: 'Academic Advisor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    bio: 'Senior Lecturer specializing in computer science education and software engineering practices.',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com'
  }];
  // Top board members
  const boardMembers: MemberCard[] = [{
    id: 'b1',
    name: 'Dinesh Rajasinghe',
    position: 'President',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Final year student majoring in Data Science. Passionate about AI and machine learning applications in healthcare.',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com'
  }, {
    id: 'b2',
    name: 'Shalini Fernando',
    position: 'Vice President',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Third year student with interests in statistical modeling and data visualization. Active member of the university debate team.',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com'
  }, {
    id: 'b3',
    name: 'Kavinda Jayawardena',
    position: 'Secretary',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Final year Computer Science student with experience in web development and project management.',
    linkedin: 'https://linkedin.com'
  }, {
    id: 'b4',
    name: 'Malini Gunaratne',
    position: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Third year student specializing in Statistical Finance. Skilled in budget management and financial planning.',
    facebook: 'https://facebook.com'
  }, {
    id: 'b5',
    name: 'Nuwan Bandara',
    position: 'Editor',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: "Second year student with a passion for technical writing and digital media. Manages the association's blog and newsletter.",
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com'
  }];
  // Committee members
  const committeeMembers: MemberCard[] = [{
    id: 'c1',
    name: 'Thilini Perera',
    position: '4th Year Representative',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    bio: 'Final year student focusing on Machine Learning. Coordinates academic support programs for seniors.',
    linkedin: 'https://linkedin.com'
  }, {
    id: 'c2',
    name: 'Rajitha Dissanayake',
    position: '3rd Year Representative',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Third year student interested in software development. Leads the coding club within the department.',
    facebook: 'https://facebook.com'
  }, {
    id: 'c3',
    name: 'Chamari Silva',
    position: '2nd Year Representative',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    bio: 'Second year student with interests in data analysis and visualization. Organizes peer study groups.',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com'
  }, {
    id: 'c4',
    name: 'Asanka Wijethilaka',
    position: '1st Year Representative',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'First year student passionate about programming and statistical computing. Helps new students adjust to university life.',
    linkedin: 'https://linkedin.com'
  }, {
    id: 'c5',
    name: 'Lakshmi Gunasekara',
    position: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    bio: 'Third year student with excellent organizational skills. Manages all association events and activities.',
    facebook: 'https://facebook.com'
  }, {
    id: 'c6',
    name: 'Hasitha Weerasinghe',
    position: 'Media Coordinator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    bio: 'Second year student with skills in graphic design and social media management. Handles all digital communications.',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com'
  }];
  const MemberCard: React.FC<{
    member: MemberCard;
  }> = ({
    member
  }) => {
    return <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="relative overflow-hidden">
          <img src={member.image} alt={member.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-white text-sm mb-4">{member.bio}</p>
            <div className="flex space-x-2">
              {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors" aria-label={`${member.name}'s LinkedIn profile`}>
                  <LinkedinIcon size={16} />
                </a>}
              {member.facebook && <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors" aria-label={`${member.name}'s Facebook profile`}>
                  <FacebookIcon size={16} />
                </a>}
              <button className="bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition-colors ml-auto">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
          <p className="text-blue-600">{member.position}</p>
        </div>
      </div>;
  };
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Executive Committee 2025
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to Know Our Exceptional Executive Committee Members
          </p>
        </div>
        {/* Academic Members */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Executive Academic Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicMembers.map(member => <MemberCard key={member.id} member={member} />)}
          </div>
        </section>
        {/* Top Board Members */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Top Board Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map(member => <MemberCard key={member.id} member={member} />)}
          </div>
        </section>
        {/* Committee Members */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Committee Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map(member => <MemberCard key={member.id} member={member} />)}
          </div>
        </section>
        {/* Join the Committee CTA */}
        <div className="mt-16 bg-blue-700 rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Joining the Committee?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Elections for the next executive committee will be held during the
            Annual General Meeting. Stay tuned for announcements!
          </p>
          <button className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors">
            Learn About the Election Process
          </button>
        </div>
      </div>
    </div>;
};
export default ExCo;