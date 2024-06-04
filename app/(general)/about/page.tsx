import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['About page', 'Información', 'Alfonso']
};

export default function AboutPage() {
  return (
    <div>
      <span className="text-7xl">About page</span>
    </div>
  )

}