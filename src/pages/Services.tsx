import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Network,
  Code,
  Server,
  GraduationCap,
  Satellite,
  ArrowRight,
} from 'lucide-react'
import networkingImg from '../assets/Networking-IT-Infrastructure.jpg'
import appDevImg from '../assets/app-development.jpg'
import itInfraImg from '../assets/it-infrastructure.jpeg'
import trainingImg from '../assets/training-programs.webp'
import starlinkMainImg from '../assets/241002-starlink-vl-1242p-d76b6d.webp'
import starlinkOutdoorImg from '../assets/IMG_1585-2.avif'
import starlinkRoamImg from '../assets/spacex_gives_discounted_starlink_roam_a_spin_in_canada_edited_1761742300.png'
import starlinkKenyaImg from '../assets/Starlink-Mobile-Regional-roaming-subcription-fees-in-Kenya-1.jpg'
import starlinkYuhImg from '../assets/starlink-yuh.jpg'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  image: string
  details: string[]
}

const services: Service[] = [
  {
    icon: <Satellite className="h-12 w-12" />,
    title: 'Starlink Hardware & Services',
    description:
      'Africa IT Solutions is an Authorised Starlink Retailer in Africa. Get high-speed satellite internet with professional installation and local support.',
    features: [
      'Immediate Hardware Availability',
      'Professional Installation',
      '24/7 Local Support',
      'Cash & Mobile Money Payments',
    ],
    image: starlinkMainImg,
    details: [
      'Higher reliability with a higher gain antenna, additional throughput allocation, and enhanced performance in extreme weather—perfect for rural and remote locations.',
      'Enjoy network priority with speeds up to 250 Mbps for downloads, 35 Mbps for uploads, and latency between 25–50 ms, supporting over 125 users simultaneously.',
      'Your High Performance Kit includes everything needed to get online: Starlink, power supply, wall mount, WiFi router, cables, and base. Plus, benefit from 24/7 prioritized local support.',
      'Pay with cash or mobile money—no credit card required—for your convenience.',
    ],
  },
  {
    icon: <Network className="h-12 w-12" />,
    title: 'Networking Solutions',
    description:
      'We design, deploy, and manage network systems that form the backbone of your digital operations.',
    features: [
      'Network Design & Architecture',
      'Infrastructure Setup',
      'Network Security',
      '24/7 Monitoring & Support',
    ],
    image: networkingImg,
    details: [
      'Strategic planning and implementation of network frameworks that scale with your business and support future technology needs.',
      'End-to-end deployment of switches, routers, wireless systems, and cabling tailored to your environment.',
      'Layered security solutions—including firewalls, access controls, and threat detection—to protect business data and operations.',
      'Real-time network health monitoring with proactive issue detection and resolution to minimize downtime.',
    ],
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: 'Software Development',
    description:
      'We build custom software that accelerates processes, enhances user experience, and unlocks new business value.',
    features: [
      'Web & Mobile Applications',
      'Enterprise Software',
      'API Development',
      'System Integration',
    ],
    image: appDevImg,
    details: [
      'Scalable and responsive digital platforms designed for users across devices and operating systems.',
      'Purpose-built systems that integrate with your workflows, streamline business functions, and improve productivity.',
      'Secure and efficient APIs that connect your systems and support data exchange across services.',
      'Seamless integration of new applications with legacy systems to enhance efficiency without disrupting operations.',
    ],
  },
  {
    icon: <Server className="h-12 w-12" />,
    title: 'Hardware Sales & Support',
    description:
      'We provide quality hardware solutions backed by comprehensive support services to ensure your IT environment runs smoothly.',
    features: [
      'Hardware Procurement',
      'Installation & Configuration',
      'Maintenance & Repairs',
      'Technical Support',
    ],
    image: itInfraImg,
    details: [
      'Sourcing best-fit devices, servers, and components from trusted vendors.',
      'Professional setup that ensures systems are optimally configured and aligned with your infrastructure.',
      'Scheduled maintenance and rapid repairs to maximize uptime and extend equipment life.',
      'Responsive support to diagnose and resolve hardware concerns quickly and efficiently.',
    ],
  },
  {
    icon: <GraduationCap className="h-12 w-12" />,
    title: 'IT Training for Corporates',
    description:
      'A digitally empowered workforce is a competitive advantage. Our professional training programs are crafted to elevate technical knowledge, enhance productivity, and foster innovation across your organization.',
    features: [
      'Custom Training Programs',
      'Certification Courses',
      'On-Site & Remote Training',
      'Ongoing Support',
    ],
    image: trainingImg,
    details: [
      'Tailored curricula based on your team\'s specific roles, technologies, and business objectives.',
      'Preparation and pathways toward industry-recognized IT certifications.',
      'Flexible formats to suit busy teams regardless of location.',
      'Continued guidance and refresher resources to reinforce learning and practical application.',
    ],
  },
]

export default function Services() {
  const location = useLocation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (location.hash === '#starlink') {
      const el = document.getElementById('starlink')
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const starlinkGallery = [starlinkOutdoorImg, starlinkRoamImg, starlinkKenyaImg, starlinkYuhImg]

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-xl bg-gray-900 text-white p-6 sm:p-8 text-center opacity-0 animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-2">
            Official Partner
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Africa IT Solutions is an Authorised Starlink Retailer
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get high-speed satellite internet with professional installation and local support. Starlink leads our service offering across Africa.
          </p>
        </div>

        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Comprehensive IT Solutions to Meet All Your Technology Needs
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Starlink hardware and connectivity come first—followed by networking, software, hardware support, and IT training. Our full suite is built to support organizations at every stage of their digital transformation.
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-6" />
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              id={service.title.includes('Starlink') ? 'starlink' : undefined}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl opacity-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 bg-black/80 backdrop-blur-sm text-white rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-white to-gray-50">
                  <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-black mb-4">
                      Our {service.title.includes('Starlink') ? 'Starlink Services Include' : service.title.includes('Training') ? 'Training Programs' : service.title.includes('Development') ? 'Development Capabilities' : service.title.includes('Hardware') ? 'Hardware Services Include' : 'Networking Expertise Includes'}:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <ArrowRight className="h-5 w-5 mr-3 text-black flex-shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                          <div>
                            <span className="font-semibold text-gray-900">{feature}:</span>
                            <span className="text-gray-600 ml-2">{service.details[idx]}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.title.includes('Starlink') && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-600 mb-3">Starlink in action</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {starlinkGallery.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt="Starlink deployment"
                            className="w-full h-24 sm:h-28 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-gray-900 to-black rounded-xl p-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Authorised Starlink Retailer</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Starlink or Other IT Solutions?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get high-speed satellite internet or discuss networking, software, hardware, and training. We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Starlink / Contact Us
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

