import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon, CalendarIcon } from "lucide-react";

// Sample news data (should match the data in News.tsx)
const allNewsItems = [
  {
    id: "1",
    title: "SCSSA Welcomes New Batch of Students",
    category: "Announcements",
    date: "June 15, 2025",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `The Statistics and Computer Science Students' Association (SCSSA) is thrilled to welcome the new batch of students to our department. This marks the beginning of an exciting journey into the world of statistics and computer science.
    
    Our department has prepared a comprehensive orientation program to help new students acclimate to university life and understand the various opportunities available to them. The program includes:
    • Introduction to department facilities and resources
    • Overview of course structure and specializations
    • Meet and greet with faculty members
    • Interactive sessions with senior students
    • Introduction to SCSSA activities and membership benefits
    
    We have also arranged several workshops and social events throughout the first semester to help new students build connections and develop essential skills. These events include:
    • Programming fundamentals workshop
    • Statistical computing workshop
    • Team building activities
    • Cultural evening
    
    The SCSSA plays a crucial role in supporting students throughout their academic journey. Our association provides:
    • Academic support through peer mentoring
    • Career guidance and industry connections
    • Professional development opportunities
    • Social and networking events
    • Access to learning resources and materials
    
    We encourage all new students to actively participate in SCSSA activities and take advantage of the numerous opportunities available to them. Together, we can create a vibrant and supportive learning community.`,
    author: "Dinesh Rajasinghe",
    authorRole: "SCSSA President",
  },
  {
    id: "2",
    title: "Annual Hackathon Announced",
    category: "Events",
    date: "June 10, 2025",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    content: `We are excited to announce our Annual Hackathon 2025! This year's theme is "Technology for Sustainable Future", focusing on innovative solutions that address environmental challenges through technology.
    
    Event Details:
    • Date: July 25-27, 2025
    • Location: University of Kelaniya, Computer Science Department
    • Registration Fee: Free for SCSSA members
    • Team Size: 3-5 members
    
    Categories:
    1. Best Environmental Solution
    2. Most Innovative Idea
    3. Best Implementation
    4. People's Choice Award
    
    Prizes:
    • 1st Place: LKR 100,000 + Internship opportunities
    • 2nd Place: LKR 75,000 + Tech gadgets
    • 3rd Place: LKR 50,000 + Tech gadgets
    
    Schedule:
    Day 1:
    • 9:00 AM - Registration
    • 10:00 AM - Opening ceremony
    • 11:00 AM - Hackathon begins
    • 6:00 PM - Dinner
    
    Day 2:
    • All day - Hacking continues
    • Mentoring sessions available
    
    Day 3:
    • 10:00 AM - Submission deadline
    • 1:00 PM - Presentations
    • 4:00 PM - Award ceremony
    
    Registration opens next week. Stay tuned for more details on our website and social media channels!`,
    author: "Nimali Fernando",
    authorRole: "Events Coordinator",
  },
  {
    id: "3",
    title: "Department Receives Research Grant",
    category: "Achievements",
    date: "June 5, 2025",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `We are proud to announce that our Department of Statistics and Computer Science has been awarded a prestigious research grant worth LKR 5 million from the National Science Foundation (NSF) to explore innovative applications of data science in healthcare.
    
    Project Details:
    • Title: "AI-Driven Predictive Models for Early Disease Detection"
    • Duration: 2 years (July 2025 - June 2027)
    • Principal Investigator: Prof. Ranjith Perera
    • Co-Investigators: Dr. Saman Silva, Dr. Priyanka Bandara
    
    This research will focus on:
    • Developing machine learning models for early detection of chronic diseases
    • Creating predictive analytics tools for public health monitoring
    • Implementing AI solutions for resource-constrained healthcare settings
    
    The grant will support:
    • Research equipment and software
    • Student research assistantships
    • Conference participation and publications
    • Collaboration with healthcare institutions
    
    "This grant recognizes our department's growing expertise in applied data science and provides exciting opportunities for both faculty and students to contribute to meaningful research," said Prof. Perera.
    
    Undergraduate and graduate students interested in participating in this research project should contact the department office for more information about research assistant positions.`,
    author: "Prof. Ranjith Perera",
    authorRole: "Head of Department",
  },
  {
    id: "4",
    title: "New Industry Partnership with Tech Solutions",
    category: "Achievements",
    date: "June 1, 2025",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `The SCSSA is pleased to announce a new strategic partnership with Tech Solutions Ltd., one of Sri Lanka's leading IT solutions providers. This partnership will create valuable opportunities for our students through internships, training programs, and potential employment.
    
    Partnership Benefits:
    • Internship Program: 20 paid internship positions per year for our students
    • Industry Workshops: Monthly technical workshops conducted by Tech Solutions experts
    • Scholarship Program: 5 merit-based scholarships annually
    • Capstone Projects: Real-world projects for final year students
    
    Memorandum of Understanding Signing:
    The official signing ceremony took place on May 30, 2025 at the university auditorium, attended by:
    • Prof. Anil Wijesinghe - Dean, Faculty of Science
    • Mr. Dilan Jayasekara - CEO, Tech Solutions Ltd.
    • SCSSA executive committee members
    
    "This partnership bridges the gap between academia and industry, providing our students with hands-on experience and exposure to cutting-edge technologies," said SCSSA President Dinesh Rajasinghe.
    
    Application Process:
    Students interested in the internship program can apply through the SCSSA website starting June 15. Selection will be based on:
    • Academic performance
    • Technical skills assessment
    • Interview performance
    
    For more information, please contact the SCSSA office or visit our website.`,
    author: "Tech Solutions Team",
    authorRole: "Industry Partner",
  },
  {
    id: "5",
    title: "Workshop on Machine Learning Fundamentals",
    category: "Workshops",
    date: "May 25, 2025",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `Join us for an exciting workshop on Machine Learning Fundamentals, designed for both beginners and intermediate learners. This hands-on workshop will provide participants with practical knowledge and skills in machine learning.
    
    Workshop Details:
    • Date: June 8, 2025 (Sunday)
    • Time: 9:00 AM - 4:00 PM
    • Venue: Computer Lab 3, Department of Computer Science
    • Fee: LKR 1,500 (Free for SCSSA members)
    
    What You'll Learn:
    • Introduction to Machine Learning concepts
    • Python for Machine Learning
    • Data preprocessing and visualization
    • Supervised vs. unsupervised learning
    • Building your first ML model
    
    Workshop Outline:
    1. Morning Session (9:00 AM - 12:00 PM):
       - Introduction to ML
       - Python basics for ML
       - Data exploration and visualization
    
    2. Lunch Break (12:00 PM - 1:00 PM)
    
    3. Afternoon Session (1:00 PM - 4:00 PM):
       - Linear regression
       - Classification algorithms
       - Hands-on project
    
    Requirements:
    • Basic programming knowledge (Python preferred)
    • Laptop with Python installed (instructions will be provided)
    
    Registration:
    Limited seats available! Register by June 5 through:
    • SCSSA office
    • Online registration form on our website
    
    Participants will receive:
    • Workshop materials
    • Certificate of participation
    • Access to online resources
    
    Don't miss this opportunity to kickstart your machine learning journey!`,
    author: "Dr. Saman Silva",
    authorRole: "Workshop Instructor",
  },
  {
    id: "6",
    title: "SCSSA Members Win National Coding Competition",
    category: "Achievements",
    date: "May 20, 2025",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `We are proud to announce that our SCSSA team "CodeMasters" has won first place at the National Coding Competition 2025, organized by the Sri Lanka Association of Software and Service Companies (SLASSCOM).
    
    Competition Highlights:
    • 50 teams from universities across Sri Lanka
    • 8-hour coding marathon
    • Problems focused on algorithms and data structures
    • Judged by industry experts
    
    Our Winning Team:
    1. Kasun Perera (Team Leader) - 3rd Year CS
    2. Nadeesha Gamage - 3rd Year CS
    3. Amal Silva - 2nd Year CS
    
    Their winning solution:
    • Developed an optimized algorithm for route planning in logistics
    • Achieved 98% accuracy in test cases
    • Implemented innovative caching techniques
    
    "This victory demonstrates the high caliber of our students and the quality of education at our department," said Dr. Priyanka Bandara, faculty advisor for the team.
    
    Awards Received:
    • Championship trophy
    • LKR 250,000 cash prize
    • Internship opportunities at top tech companies
    • Automatic entry to the International Coding Competition 2026
    
    The team will be officially recognized at the upcoming SCSSA general meeting on June 5. Join us in congratulating them on this outstanding achievement!
    
    Interested in joining our competitive programming team? Contact the SCSSA office for information about training sessions and selection process.`,
    author: "SCSSA Media Team",
    authorRole: "Public Relations",
  },
];

const NewsArticle: React.FC = () => {
  const { id } = useParams();

  // Find the article with the matching id
  const article = allNewsItems.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Article not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/news"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeftIcon size={20} className="mr-2" />
          Back to News
        </Link>
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <CalendarIcon size={16} className="mr-2" />
                {article.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {article.title}
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              {article.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph.split("\n").map((line, lineIdx) => (
                    <Fragment key={lineIdx}>
                      {line}
                      {lineIdx < paragraph.split("\n").length - 1 && <br />}
                    </Fragment>
                  ))}
                </p>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {article.author}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {article.authorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsArticle;
