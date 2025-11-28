import { PageFooter } from '@/components/layout/page-footer'
import { PageHeader } from '@/components/layout/page-header'
import { AboutSection } from '@/components/organisms/about-section'
import { CTASection } from '@/components/organisms/cta-section'
import { HeroSection } from '@/components/organisms/hero-section'
import { SkillsSection } from '@/components/organisms/skills-section'

export default function Home() {
  return (
    <>
      <PageHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CTASection />
      </main>
      <PageFooter />
    </>
  )
}
