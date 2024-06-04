import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['Pricing page', 'Precios']
};

export default function PricingPage() {
  return (
    <div>
      <span className="text-7xl">Pricing page</span>
    </div>
  )

}