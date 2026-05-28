import Link from 'next/link';
import { client } from '@/sanity/lib/client'; // 👈 ඔයාගේ සැනිටි ක්ලයන්ට් එක තියෙන පාත් එක චෙක් කරගන්න මචං (සාමාන්‍යයෙන් මේකයි)
import { urlFor } from '@/sanity/lib/image';  // 👈 ඉමේජ් යූආර්එල් හදන එක

export const revalidate = 60; // හැම විනාඩියකටම පස්සේ අලුත් ඩේටා ඔටෝ අප්ඩේට් වෙන්න (ISR)

// 🔍 Sanity එකෙන් Case Studies ඇදලා ගන්න GROQ Query එක
async function getCaseStudies() {
  const query = `*[_type == "caseStudy"] | order(_createdAt desc) {
    title,
    "slug": slug.current,
    category,
    clientRegion,
    grade,
    summary,
    mainImage
  }`;
  
  const data = await client.fetch(query);
  return data;
}

export default async function CaseStudiesPage() {
  const cases = await getCaseStudies();

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full">
            Our Proven Track Record
          </span>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mt-4 mb-4">
            Academic Case Studies
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Explore our successfully completed academic consultation projects. We maintain strict confidentiality while showcasing the high-grade quality we deliver.
          </p>
        </div>

        {/* Case Studies Grid */}
        {cases.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">No case studies found. Add some from Sanity Studio!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((project: any) => (
              <div 
                key={project.slug} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col h-full"
              >
                {/* Image Component */}
                {project.mainImage && (
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                    <img
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    {project.grade && (
                      <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md">
                        🔥 {project.grade}
                      </span>
                    )}
                    {project.clientRegion && (
                      <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                        📍 {project.clientRegion}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2 mb-2 hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                    {project.summary}
                  </p>

                  {/* WhatsApp Action Button */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <Link
                      href={`https://wa.me/94757114126?text=Hi!%20I%20saw%20your%20case%20study%20about%20"${encodeURIComponent(project.title)}"%20and%20I%20need%20similar%20help.`}
                      target="_blank"
                      className="inline-flex items-center justify-center w-full bg-slate-900 text-white text-xs font-bold py-3 rounded-xl hover:bg-blue-600 transition-all gap-1.5 shadow-sm"
                    >
                      Inquire About Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}