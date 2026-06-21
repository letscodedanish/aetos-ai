import { useReveals } from '../hooks'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Process from '../components/Process'
import Industries from '../components/Industries'
import TechMarquee from '../components/TechMarquee'
import Insights from '../components/Insights'
import Work from '../components/Work'
import Testimonials from '../components/Testimonials'
import Closing from '../components/Closing'

const HERO_STATS = [
  ['99.9%', 'Uptime SLA'],
  ['40%', 'Avg. cost saved'],
  ['24/7', 'Autonomous ops'],
  ['10M+', 'Tasks automated / mo'],
]

export default function Home() {
  useReveals()
  return (
    <main>
      <Hero />
      <div className="pt-[clamp(70px,9vw,120px)]">
        <Stats items={HERO_STATS} />
      </div>
      <Work />
      <Services />
      <Process />
      <Industries />
      <TechMarquee />
      <Insights />
      <Testimonials />
      <Closing />
    </main>
  )
}
