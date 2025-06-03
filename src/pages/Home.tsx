import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/UI/Slideshow';
import NewsCard from '../components/UI/NewsCard';
import { ArrowRightIcon } from 'lucide-react';
const Home: React.FC = () => {
  // Sample data for slideshow
  const slideshowImages = ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'];
  // Sample news data
  const newsItems = [{
    id: '1',
    title: 'SCSSA Welcomes New Batch of Students',
    category: 'Announcements',
    date: 'June 15, 2025',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    summary: 'The SCSSA is excited to welcome the new batch of Statistics and Computer Science students to the University of Kelaniya.'
  }, {
    id: '2',
    title: 'Annual Hackathon Announced',
    category: 'Events',
    date: 'June 10, 2025',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    summary: "Get ready for our annual hackathon! This year's theme is 'Technology for Sustainable Future'. Registration opens next week."
  }, {
    id: '3',
    title: 'Department Receives Research Grant',
    category: 'News',
    date: 'June 5, 2025',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    summary: 'The Department of Statistics and Computer Science has received a prestigious research grant to explore innovative data science applications.'
  }];
  return <div className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <Slideshow images={slideshowImages} />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="text-white p-6 max-w-2xl ml-4 md:ml-[10%]">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Statistics and Computer Science Students' Association
            </h1>
            <p className="text-xl md:text-2xl mb-8">University of Kelaniya</p>
            <p className="text-lg md:text-xl">
              Empowering students through education, innovation, and community
              in the fields of Statistics and Computer Science.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors">
                Join SCSSA
              </a>
              <Link to="/about" className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-md font-medium text-lg transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Latest News Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
            <Link to="/news" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View All News
              <ArrowRightIcon size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map(news => <NewsCard key={news.id} id={news.id} title={news.title} category={news.category} date={news.date} image={news.image} summary={news.summary} />)}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="SCSSA Team" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About SCSSA
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                The Statistics and Computer Science Students' Association
                (SCSSA) is the official student body representing undergraduates
                in the Department of Statistics and Computer Science at the
                University of Kelaniya.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Founded with the mission to bridge the gap between academic
                learning and industry requirements, SCSSA organizes various
                events, workshops, and activities to enhance students' skills
                and knowledge beyond the classroom.
              </p>
              <Link to="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Become a member of SCSSA and access exclusive resources, events, and
            networking opportunities.
          </p>
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors">
            Register Now
          </a>
        </div>
      </section>
    </div>;
};
export default Home;