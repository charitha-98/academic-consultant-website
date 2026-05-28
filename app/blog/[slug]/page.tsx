import Link from 'next/link';
import { client, urlFor } from '../../../sanity/lib/sanity'; // 👈 ඔයාගේ path එකට අනුව client එක ගන්න
import { PortableText } from '@portabletext/react';
import { FaCalendarAlt, FaChevronLeft, FaClock } from 'react-icons/fa';

// Sanity එකෙන් තනි පෝස්ට් එකක් විතරක් ඇදලා ගන්නා GROQ Query එක
async function getBlogPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    mainImage,
    body
  }`;
  
  const data = await client.fetch(query, { slug });
  return data;
}

// Next.js වලට SEO සහ Dynamic title හැදීමට (Optional but highly recommended)
export async function generateMetadata({ params }: { params: any }) {
  // Next.js 15 වල params එක Promise එකක් නිසා await කරන්න ඕනේ, නැත්නම් සාමාන්‍යයෙන් කෙලින්ම ගන්න පුළුවන්
  const { slug } = await params; 
  const post = await getBlogPost(slug);
  return {
    title: post ? `${post.title} | Academic Insights` : 'Blog Post',
  };
}

export default async function ArticleDetailPage({ params }: { params: any }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-xl font-bold text-slate-800">Article Not Found</h2>
        <Link href="/blog" className="text-blue-600 mt-4 underline text-sm">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="w-full bg-slate-50 min-h-screen py-12 md:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* BACK TO BLOG LINK */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 hover:text-blue-600 mb-8 transition-all"
        >
          <FaChevronLeft size={12} /> Back to Insights
        </Link>

        {/* POST META & TITLE */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <FaCalendarAlt />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-1.5">
              <FaClock /> 5 min read
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            {post.title}
          </h1>
        </div>

        {/* MAIN IMAGE */}
        {post.mainImage && (
          <div className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-sm mb-12 bg-slate-100">
            <img 
              src={urlFor(post.mainImage).url()} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* ARTICLE BODY CONTENT */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm md:text-base font-normal">
          <PortableText value={post.body} />
        </div>

        {/* CTA CARD AT THE END */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl text-center">
          <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">Struggling with a similar university topic?</h3>
          <p className="text-blue-100 text-xs md:text-sm max-w-xl mx-auto mb-6">
            Don't waste days stressing over reference links and structures. Let a professional handle the deep research for you.
          </p>
          <Link 
            href="https://wa.me/947XXXXXXXX" 
            target="_blank"
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md transition-all inline-block text-xs md:text-sm"
          >
            Get Expert Assistance via WhatsApp
          </Link>
        </div>

      </div>
    </article>
  );
}