import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['Contact page', 'Contacto', 'Preguntar']
};

export default function ContactPage() {
  return (
    <div>
      <span className="text-7xl">Contact page</span>
    </div>
  )

}