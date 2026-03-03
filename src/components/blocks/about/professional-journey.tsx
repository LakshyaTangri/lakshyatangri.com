import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const roles = [
    {
        title: 'Data Management Consultant',
        company: 'CGI Defence & Space Intelligence',
        location: 'London',
        description: 'Operated at the enterprise transformation layer — advising defence clients on data strategy, AI governance, and target-state architecture.',
        achievements: [
            'Defined enterprise data architectures reducing decision latency by 35%',
            'Facilitated C-suite AI operating model workshops',
            'Structured £5M transformation roadmaps',
            'Embedded Responsible AI governance frameworks'
        ],
        impact: 'Strengthened ability to design architecture not only for scale — but for compliance, auditability, and mission-critical environments.'
    },
    {
        title: 'AI & Data Product Lead',
        company: 'Government of India',
        location: 'State Renewable Energy Programme',
        description: 'Moved from advisory to operational AI transformation, defining an enterprise AI strategy identifying 25+ high-impact use cases.',
        achievements: [
            'Transformed reporting into AI-enabled decision systems, reducing policy cycles by 40%',
            'Deployed autonomous AI agents across five administrative divisions',
            'Recognised with the Government of India Excellence in Digital Transformation Award (2024)'
        ],
        impact: 'Demonstrated how GenAI, embedded inside structured architecture, becomes an institutional capability rather than an experimental tool.'
    },
    {
        title: 'IT Director',
        company: 'Glyphr Tech',
        location: 'B2B SaaS',
        description: 'Led architecture and operating model redesign for a cloud-native HRIS SaaS platform.',
        achievements: [
            '99.9% platform availability',
            '22% infrastructure cost reduction',
            '30% YoY enterprise client retention growth',
            '35% faster product release cycles'
        ],
        impact: 'Deepened expertise in AWS-based microservices, event-driven systems, DevSecOps governance, and product-aligned architecture.'
    },
    {
        title: 'Founder & Technical Product Lead',
        company: 'SM3 Digital',
        location: 'Cloud Data Consultancy',
        description: 'Transitioned from engineer to systems strategist. Built API-first distributed platforms and advised executives on digital roadmaps.',
        achievements: [
            'Delivered scalable data architectures for SMEs',
            'Generated £500K+ in revenue'
        ],
        impact: 'Cemented the ability to architect from first principles, translate ambiguity into structured system design, and align technology investment with commercial differentiation.'
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
