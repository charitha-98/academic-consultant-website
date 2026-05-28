import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '../../sanity/lib/sanity';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

// Sanity එකෙන් Data ඇද ගන්නා GROQ Query එක
async function getBlogPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    mainImage,
    publishedAt,
    "summary": body[0].children[0].text
  }`;
  
  const data = await client.fetch(query);
  return data;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            Academic Insights & Tips
          </h1>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded"></div>
          <p className="text-slate-600 mt-4 text-base">
            Expert advice, guidebooks, and structural tips to help you write flawless university papers.
          </p>
        </div>

        {/* BLOG GRID */}
        {posts.length === 0 ? (
          <p className="text-center text-slate-500 italic mt-12">No blog articles published yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post: any, index: number) => (
              <article key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  {/* Post Image */}
                  {post.mainImage && (
                    <div className="relative h-48 w-full bg-slate-100">
                      <img 
                        src={urlFor(post.mainImage).url()} 
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <FaCalendarAlt />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 font-serif line-clamp-2 hover:text-blue-600 transition-all">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold text-xs md:text-sm inline-flex items-center gap-1.5 hover:text-blue-700 transition-all"
                  >
                    Read Article <FaArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}