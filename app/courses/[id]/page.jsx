import { notFound } from 'next/navigation';
import CourseDetailClient from './CourseDetailClient';
import { courses } from '../data';

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return {
      title: 'Course Not Found | VAWE Institute',
    };
  }

  const imageUrl = course.image
    ? `https://vaweinstitute.com${course.image}`
    : `https://vaweinstitute.com/assets/codingimage.jpg`;

  return {
    title: `${course.title} | VAWE Institute`,
    description: course.description,
    keywords: [
      course.title,
      'VAWE Institute',
      'software training',
      'IT course',
      'professional training',
      course.category,
      course.level,
    ],
    alternates: {
      canonical: `/courses/${course.id}`,
    },
    openGraph: {
      title: `${course.title} | VAWE Institute`,
      description: course.description,
      type: 'website',
      url: `https://vaweinstitute.com/courses/${course.id}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      siteName: 'VAWE Institute',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} | VAWE Institute`,
      description: course.description,
      images: [imageUrl],
    },
  };
}

export default async function CourseDetail({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return notFound();
  }

  return <CourseDetailClient courseId={id} />;
}
