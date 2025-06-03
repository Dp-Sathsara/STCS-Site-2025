import React, { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon } from 'lucide-react';
const NewsArticle: React.FC = () => {
  const {
    id
  } = useParams();
  // This would typically come from an API or database
  const article = {
    id: '1',
    title: 'SCSSA Welcomes New Batch of Students',
    category: 'Announcements',
    date: 'June 15, 2025',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
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
    author: 'Dinesh Rajasinghe',
    authorRole: 'SCSSA President'
  };
  if (!article) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Article not found</p>
      </div>;
  }
  return <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <Link to="/news" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8">
          <ArrowLeftIcon size={20} className="mr-2" />
          Back to News
        </Link>
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-[400px] object-cover" />
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
              {article.content.split('\n\n').map((paragraph, idx) => <p key={idx} className="mb-4">
                  {paragraph.split('\n').map((line, lineIdx) => <Fragment key={lineIdx}>
                      {line}
                      {lineIdx < paragraph.split('\n').length - 1 && <br />}
                    </Fragment>)}
                </p>)}
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
    </div>;
};
export default NewsArticle;