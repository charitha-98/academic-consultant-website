export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project / Case Study Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category / Field',
      type: 'string',
      description: 'e.g., Data Science, MBA Thesis, Mechanical Engineering, Psychology',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'clientRegion',
      title: 'Client Region (Optional)',
      type: 'string',
      description: 'e.g., United States, United Kingdom, Australia',
    },
    {
      name: 'grade',
      title: 'Grade Achieved (Optional)',
      type: 'string',
      description: 'e.g., Grade A, 1st Class, 85%',
    },
    {
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      description: '(Brief overview of the project)',
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Full Details / Methodology',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Methodology and Results .',
    },
  ],
};