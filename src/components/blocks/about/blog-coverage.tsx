import { Card, CardContent } from '@/components/ui/card'
import { ServerIcon, CpuIcon, CloudIcon, ShieldCheckIcon, PresentationIcon, LayoutTemplateIcon } from 'lucide-react'

const topics = [
    {
        icon: <LayoutTemplateIcon className="h-6 w-6 text-primary" />,
        title: 'Enterprise Architecture',
        description: 'Applying TOGAF 10 and ArchiMate to design resilient, target-state enterprise systems.'
    },
    {
        icon: <PresentationIcon className="h-6 w-6 text-primary" />,
        title: 'Technology Strategy',
        description: 'Aligning technology roadmaps with business capability mapping and commercial governance.'
    },
    {
        icon: <CloudIcon className="h-6 w-6 text-primary" />,
        title: 'Digital Transformation',
        description: 'Governing mission-critical programme delivery across Defence, Government, and Finance.'
    },
    {
        icon: <CpuIcon className="h-6 w-6 text-primary" />,
        title: 'AI & Data Governance',
        description: 'Operationalizing Responsible AI and data lineages within enterprise governance frameworks.'
    },
    {
        icon: <ShieldCheckIcon className="h-6 w-6 text-primary" />,
        title: 'Risk & Compliance',
        description: 'Architecting for ISO 27001, 42001, and complex regulatory environments.'
    },
    {
        icon: <ServerIcon className="h-6 w-6 text-primary" />,
        title: 'Cloud-Native Systems',
        description: 'Designing scalable AWS/Azure blueprints focused on auditability and operational resilience.'
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
