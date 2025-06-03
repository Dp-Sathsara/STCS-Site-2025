import React, { useState } from 'react';
import { SearchIcon, PlusIcon } from 'lucide-react';
import NewsCard from '../components/UI/NewsCard';
// Sample news data
const allNewsItems = [{
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
}, {
  id: '4',
  title: 'New Industry Partnership with Tech Solutions',
  category: 'Partnerships',
  date: 'June 1, 2025',
  image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  summary: 'SCSSA has established a new partnership with Tech Solutions Ltd. to provide internship opportunities for our students.'
}, {
  id: '5',
  title: 'Workshop on Machine Learning Fundamentals',
  category: 'Workshops',
  date: 'May 25, 2025',
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  summary: 'Join our upcoming workshop on machine learning fundamentals led by industry experts. Perfect for beginners and intermediate learners.'
}, {
  id: '6',
  title: 'SCSSA Members Win National Coding Competition',
  category: 'Achievements',
  date: 'May 20, 2025',
  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  summary: 'Congratulations to our members who secured first place at the National Coding Competition 2025!'
}];
// Unique categories
const categories = ['All', ...new Set(allNewsItems.map(item => item.category))];
const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPostForm, setShowPostForm] = useState(false);
  // Filter news items based on category and search query
  const filteredNews = allNewsItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            News & Updates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest happenings, announcements, and
            achievements at SCSSA.
          </p>
        </div>
        {/* Search and Filter */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-md whitespace-nowrap mr-2 ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                {category}
              </button>)}
          </div>
          <div className="relative w-full md:w-64">
            <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search news..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        {/* Post News Button */}
        <div className="mb-8 flex justify-end">
          <button onClick={() => setShowPostForm(!showPostForm)} className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            <PlusIcon size={18} className="mr-2" />
            {showPostForm ? 'Cancel' : 'Post News'}
          </button>
        </div>
        {/* Post News Form */}
        {showPostForm && <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold mb-6">Post New Article</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                  Image
                </label>
                <input type="file" id="image" accept="image/*" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                  Title
                </label>
                <input type="text" id="title" placeholder="Article title" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                    Category
                  </label>
                  <select id="category" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {categories.filter(c => c !== 'All').map(category => <option key={category} value={category}>
                          {category}
                        </option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
                    Author Name
                  </label>
                  <input type="text" id="author" placeholder="Your name" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="summary" className="block text-gray-700 font-medium mb-2">
                  Short Description
                </label>
                <textarea id="summary" rows={2} placeholder="Brief summary of the article" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="mb-6">
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                  Full Content
                </label>
                <textarea id="content" rows={6} placeholder="Write the full article content here..." className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                  Publish Article
                </button>
              </div>
            </form>
          </div>}
        {/* News Grid */}
        {filteredNews.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map(news => <NewsCard key={news.id} id={news.id} title={news.title} category={news.category} date={news.date} image={news.image} summary={news.summary} />)}
          </div> : <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No news articles found matching your criteria.
            </p>
          </div>}
      </div>
    </div>;
};
export default News;