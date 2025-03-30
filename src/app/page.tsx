import Hero from '@/components/home/Hero';
import ValueProposition from '@/components/home/ValueProposition';
import About from '@/components/home/About';
import Benefits from '@/components/Benefits';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import RecentOpportunities from '@/components/home/RecentOpportunities';
import SocialProofWidget from '@/components/home/SocialProofWidget';
import LatestBlogs from '@/components/home/LatestBlogs';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ValueProposition />
      <About />
      <Benefits />
      <TestimonialCarousel />
      <RecentOpportunities />
      <SocialProofWidget />
      <LatestBlogs />
      <ContactSection />
    </main>
  );
}