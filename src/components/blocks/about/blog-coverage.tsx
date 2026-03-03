import { Card, CardContent } from '@/components/ui/card'
import { ServerIcon, CpuIcon, CloudIcon, ShieldCheckIcon, PresentationIcon, LayoutTemplateIcon } from 'lucide-react'

const topics = [
    {
        icon: <LayoutTemplateIcon className="h-6 w-6 text-primary" />,
        title: 'High-Level System Design',
        description: 'Applying the RESHADED framework to translate ambiguity into structured design.'
    },
    {
        icon: <CpuIcon className="h-6 w-6 text-primary" />,
        title: 'Enterprise GenAI Architecture',
        description: 'Patterns for implementing GenAI securely within organizational boundaries.'
    },
    {
        icon: <CloudIcon className="h-6 w-6 text-primary" />,
        title: 'Cloud-Native AWS Blueprints',
        description: 'Creating scalable, event-driven architectures on Amazon Web Services.'
    },
    {
        icon: <ServerIcon className="h-6 w-6 text-primary" />,
        title: 'MLOps & Agent Orchestration',
        description: 'Operationalizing autonomous AI agents and machine learning pipelines.'
    },
    {
        icon: <ShieldCheckIcon className="h-6 w-6 text-primary" />,
        title: 'Governance & Operating Models',
        description: 'Architecting for compliance, auditability, and strategic oversight.'
    },
    {
        icon: <PresentationIcon className="h-6 w-6 text-primary" />,
        title: 'Strategic Narratives',
        description: 'Translating technical experience into executive-level system narratives.'
    }
]

const BlogCoverage = () => {
    return (
        <section id='coverage' className='py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col gap-12 items-center text-center'>
                <div className='flex flex-col gap-4 max-w-3xl'>
                    <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>What This Blog Will Cover</h2>
                    <p className='text-lg font-medium mt-2'>
                        This is not a generic tech blog. It is an architecture journal focused on enterprise-grade system design and intelligent transformation.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                    {topics.map((topic, idx) => (
                        <Card key={idx} className='bg-muted/30 border-none shadow-sm hover:shadow-md transition-shadow'>
                            <CardContent className='p-6 flex flex-col items-center gap-4 text-center'>
                                <div className='p-3 bg-primary/10 rounded-full'>
                                    {topic.icon}
                                </div>
                                <h3 className='font-medium text-lg'>{topic.title}</h3>
                                <p className='text-sm text-muted-foreground'>{topic.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogCoverage
