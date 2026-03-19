import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { BlogPost } from '@/components/blocks/blog-component/blog-component'

const HeroSection = ({ blogData }: { blogData: BlogPost[] }) => {
  const featuredPosts = blogData.filter(post => post.featured)

  return (
    <section id='home' className='relative bg-background overflow-hidden -mt-16 pt-32 pb-12 sm:pb-16 lg:pb-24'>
      {/* Modern Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-muted opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <div className='mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Hero Header */}
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center min-h-[60vh]'>
          <div className='flex flex-col items-start gap-6 text-left order-2 lg:order-1'>
            <Badge variant='outline' className='text-sm sm:text-[14px] font-medium py-1.5 px-4 rounded-full border-primary/20 bg-primary/5 text-primary backdrop-blur-sm self-start'>
              Enterprise Architect | Technology Strategy | TOGAF® 10 Certified | Digital Transformation Consultant
            </Badge>

            <h1 className='text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-[4rem] lg:leading-[1.1] text-balance'>
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Enterprise Transformation</span> & Technology Strategy
            </h1>

            <p className='text-muted-foreground max-w-2xl text-lg sm:text-xl leading-relaxed'>
              I design and govern target-state architectures for mission-critical platforms, combining hands-on technical depth in cloud, AI, and data systems with board-level fluency in governance, risk, and regulatory compliance.
            </p>

            <div className='mt-2 flex flex-wrap gap-2.5'>
              <Badge variant='secondary' className='text-xs px-3.5 py-1.5 rounded-full shadow-sm hover:bg-secondary/80 transition-colors'>Enterprise Architecture (TOGAF 10)</Badge>
              <Badge variant='secondary' className='text-xs px-3.5 py-1.5 rounded-full shadow-sm hover:bg-secondary/80 transition-colors'>Technology Strategy</Badge>
              <Badge variant='secondary' className='text-xs px-3.5 py-1.5 rounded-full shadow-sm hover:bg-secondary/80 transition-colors'>Digital Transformation</Badge>
              <Badge variant='secondary' className='text-xs px-3.5 py-1.5 rounded-full shadow-sm hover:bg-secondary/80 transition-colors'>AI & Data Governance</Badge>
            </div>
          </div>

          <div className='flex justify-center lg:justify-end order-1 lg:order-2 w-full mx-auto max-w-[400px] lg:max-w-none relative group'>
            {/* Elegant glowing background layer for image */}
            <div className='absolute -inset-1 sm:-inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-transparent to-primary/10 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 hidden sm:block mt-8'></div>
            <img
              src='/images/lakshya.webp'
              alt='Lakshya Tangri'
              className='relative w-full max-w-[380px] lg:max-w-[440px] shadow-2xl ring-1 ring-border/50 transition-transform duration-700 group-hover:scale-[1.02] rounded-[2rem] object-cover'
            />
          </div>
        </div>

        {/* Featured Insights */}
        {featuredPosts.length > 0 && (
          <div className="pt-24 pb-6 mt-12 sm:mt-16 lg:mt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Insights</h2>
              <div className="h-[1px] w-full sm:flex-1 bg-gradient-to-r from-border/80 to-transparent"></div>
            </div>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
              {featuredPosts.map((item, index) => (
                <div key={`${item.author}-${index}`} className='group'>
                  <Card className='cursor-default py-0 shadow-md hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden rounded-2xl h-full'>
                    <CardContent className='grid grid-cols-1 p-0 xl:grid-cols-2 h-full'>
                      <div className='p-4 h-full'>
                        <a href={`/blog/${item.slug}`} className='block h-52 xl:h-full w-full overflow-hidden rounded-xl bg-muted'>
                          <img
                            src={item.imageUrl}
                            alt={item.imageAlt}
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                            loading='lazy'
                          />
                        </a>
                      </div>
                      <div className='flex flex-col justify-center gap-4 p-6 xl:p-8 xl:pl-4'>
                        <div className='flex items-center gap-2 flex-wrap'>
                          <Badge
                            className='bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer border-0 text-xs px-2.5 py-0.5 rounded-full font-medium'
                            onClick={e => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.location.href = `/#category-${item.category}`
                            }}
                          >
                            {item.category}
                          </Badge>
                          <div className='text-muted-foreground flex items-center gap-1.5 text-xs font-medium'>
                            <CalendarDaysIcon className='size-3.5' />
                            <p>{item.pubDate}</p>
                          </div>
                        </div>
                        <a href={`/blog/${item.slug}`} className="group/link">
                          <h3 className='text-xl xl:text-2xl font-semibold leading-tight group-hover/link:text-primary transition-colors'>{item.title}</h3>
                        </a>

                        <p className='text-muted-foreground text-sm line-clamp-2'>{item.description}</p>
                        <div className='flex w-full items-center justify-between gap-2 mt-auto pt-2'>
                          <span className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>{item.author}</span>
                          <Button
                            size='icon'
                            variant='outline'
                            className='h-9 w-9 rounded-full bg-background group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300'
                            asChild
                          >
                            <a href={`/blog/${item.slug}`}>
                              <ArrowUpRightIcon className="size-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
