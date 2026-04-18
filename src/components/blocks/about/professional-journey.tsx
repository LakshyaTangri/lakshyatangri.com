import React from 'react'
import { Badge } from '@/components/ui/badge'

const roles = [
    {
        title: 'Enterprise GRC Consultant',
        company: 'CGI',
        date: '07/2025 – 12/2025',
        description: 'Led architecture programme delivery for a mission-critical UK MOD digital transformation initiative. Produced target-state enterprise architecture that unblocked stalled investment across the programme portfolio, reduced decision latency by 35%, and shifted institutional decision-making at scale.'
    },
    {
        title: 'Solution Architect',
        company: 'Government of India',
        date: '08/2023 – 08/2024',
        description: 'Designed and governed end-to-end enterprise architecture for a cloud-based public financial management platform. Implemented autonomous governance agents enabling auditable, data-driven policy decisions across government departments, earning the Excellence in Digital Transformation award (2024).'
    },
    {
        title: 'Regtech Product Manager / Co-Founder (Acquired)',
        company: 'Glyphr Tech Pvt Ltd',
        date: '08/2022 – 08/2023',
        description: 'Translated business strategy into application and integration architecture for an enterprise-scale cloud Payroll and HRIS SaaS platform. Focused on strengthening platform scalability, auditability, and operational resilience for over 50,000 monthly transactions in an Agile delivery environment.'
    },
    {
        title: 'Software Developer',
        company: 'SM3 Digital',
        date: '01/2020 – 08/2022',
        description: 'Managed consulting architecture engagements for 50+ SME clients across retail, finance, and e-commerce. Governed systems integration, cloud platform design, and vendor architecture decisions from requirements through to deployment.'
    },
    {
        title: 'Technical Sales Executive',
        company: 'Inter Solar Systems',
        date: '03/2019 – 08/2021',
        description: 'Drove technical sales initiatives and evaluated client requirements to provide optimized infrastructure solutions. Aligned technical specifications with commercial proposals to drive business growth and ensure smooth deployment.'
    }
]

const ProfessionalJourney = () => {
    return (
        <section id='journey' className='py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col gap-4 max-w-3xl'>
                    <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>Professional Journey</h2>
                    <p className='text-lg text-muted-foreground'>
                        Each role in my career represents a layer of architectural evolution — from building systems, to leading platforms, to shaping enterprise strategies.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className='relative border-l border-muted-foreground/30 ml-3 md:ml-4 space-y-12 pb-4'>
                    {roles.map((role, idx) => (
                        <div key={idx} className='relative pl-8 md:pl-10'>
                            {/* Timeline Dot */}
                            <div className='absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary/20 ring-4 ring-background flex items-center justify-center'>
                                <div className='h-2 w-2 rounded-full bg-primary'></div>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2'>
                                    <div>
                                        <h3 className='text-xl font-semibold leading-none mb-2 text-foreground'>{role.title}</h3>
                                        <p className='text-base font-medium text-muted-foreground'>{role.company}</p>
                                    </div>
                                    <Badge variant='secondary' className='w-fit whitespace-nowrap'>{role.date}</Badge>
                                </div>

                                <p className='text-muted-foreground leading-relaxed text-sm md:text-base'>
                                    {role.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProfessionalJourney
