import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const roles = [
    {
        title: 'Enterprise Architect',
        company: 'CGI Defence & Space Intelligence',
        location: 'London (Hybrid)',
        description: 'Led architecture programme delivery for a mission-critical UK MOD digital transformation initiative, governing a £5M+ programme budget.',
        achievements: [
            'Produced target-state enterprise architecture that unblocked stalled investment',
            'Business capability mapping and TOM design using LeanIX and Sparx EA',
            'Led horizon scanning for emerging AI and data technologies',
            'Reduced decision latency by 35% through TOGAF ADM governance'
        ],
        impact: 'Produced target-state enterprise architecture that unblocked stalled investment across the programme portfolio and shifted institutional decision-making at scale.'
    },
    {
        title: 'Solution Architect',
        company: 'Government of India',
        location: 'India (On-site)',
        description: 'Designed and governed end-to-end enterprise architecture for a cloud-based public financial management platform.',
        achievements: [
            'Defined technology roadmap and HLD/LLD for AWS-based data governance',
            'Managed vendor evaluation and architecture governance across cloud and analytics',
            'Awarded Excellence in Digital Transformation (2024)',
            'Implemented autonomous governance agents for data-driven policy decisions'
        ],
        impact: 'Recognised for implementing autonomous governance agents enabling auditable, data-driven policy decisions across government departments.'
    },
    {
        title: 'Business Architect - Financial Systems & Governance',
        company: 'Glyphr Tech Pvt Ltd (HRIS & Payroll SaaS)',
        location: 'India',
        description: 'Translated business strategy into application and integration architecture for an enterprise-scale cloud Payroll and HRIS SaaS platform.',
        achievements: [
            'Defined capability roadmaps serving 80+ enterprise clients',
            'Governed application, data, and systems integration architecture for 50,000+ monthly transactions',
            'Led vendor management and evaluation of third-party payroll and cloud providers',
            'Strengthened platform scalability, auditability, and operational resilience'
        ],
        impact: 'Focused on strengthening platform scalability, auditability, and operational resilience in an Agile delivery environment.'
    },
    {
        title: 'Software Developer & IT Consultant',
        company: 'SM3 Digital',
        location: 'India',
        description: 'Managed consulting architecture engagements for 50+ SME clients across retail, finance, and e-commerce.',
        achievements: [
            'Produced technology roadmaps and architecture assessments for clients',
            'Owned commercial governance of £500K+ in consulting engagements',
            'Evaluated and managed third-party vendors for cloud, API, and infrastructure services',
            'Aligned architecture decisions with client risk appetite and budget'
        ],
        impact: 'Governed systems integration, cloud platform design, and vendor architecture decisions from requirements through to deployment.'
    }
]

const ProfessionalJourney = () => {
    return (
        <section id='journey' className='py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col gap-4 max-w-3xl'>
                    <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>Professional Journey</h2>
                    <p className='text-lg text-muted-foreground'>
                        Each role in my career represents a layer of architectural evolution — from building systems, to leading platforms, to shaping enterprise AI strategies.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {roles.map((role, idx) => (
                        <Card key={idx} className='flex flex-col'>
                            <CardHeader>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <CardTitle className='text-xl'>{role.title}</CardTitle>
                                        <CardDescription className='text-base font-medium mt-1'>{role.company}</CardDescription>
                                    </div>
                                    <Badge variant='outline'>{role.location}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent className='flex-grow flex flex-col gap-6'>
                                <p className='text-muted-foreground'>
                                    {role.description}
                                </p>
                                <div>
                                    <h4 className='font-medium mb-2 text-sm uppercase tracking-wider'>Key Outcomes</h4>
                                    <ul className='list-disc pl-5 space-y-1 text-sm text-muted-foreground'>
                                        {role.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='mt-auto pt-4 border-t'>
                                    <p className='text-sm italic text-foreground/80'>
                                        "{role.impact}"
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProfessionalJourney
