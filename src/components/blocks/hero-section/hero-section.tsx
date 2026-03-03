import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import type { BlogPost } from '@/components/blocks/blog-component/blog-component'

const HeroSection = ({ blogData }: { blogData: BlogPost[] }) => {
  const featuredPosts = blogData.filter(post => post.featured)

  return (
    <section id='home' className='bg-muted -mt-16 pt-32 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
          <div className='flex flex-col items-start gap-4 text-left order-2 lg:order-1'>
            <Badge variant='outline' className='text-sm font-normal'>
              Solution Architect | Enterprise Architect (TOGAF® Certified) |
              GenAI & Cloud Systems Strategist
            </Badge>
            <h1 className='text-3xl leading-[1.29167] font-semibold text-balance sm:text-4xl lg:text-5xl'>
              Architecting Intelligent Enterprise Systems & Solutions
            </h1>
            <p className='text-muted-foreground max-w-2xl text-xl'>
              I design systems that think, scale, and endure. As a Solution Architect operating at the intersection of AWS Cloud, GenAI, MLOps, and Data Engineering, I help organisations transition from fragmented digital initiatives to cohesive, intelligence-driven enterprise platforms.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <Badge variant='secondary' className='text-xs'>Enterprise Data & AI Platforms</Badge>
              <Badge variant='secondary' className='text-xs'>GenAI Operationalisation</Badge>
              <Badge variant='secondary' className='text-xs'>AI Operating Models</Badge>
              <Badge variant='secondary' className='text-xs'>Value Realisation</Badge>
            </div>
          </div>

          <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
            <img
              src='/images/lakshya.webp'
              alt='Lakshya Tangri'
              className='w-full max-w-[400px] rounded-2xl object-cover shadow-xl'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {featuredPosts.map((item, index) => (
            <div key={`${item.author}-${index}`} className='group'>
              <Card className='cursor-default py-0 shadow-none'>
                <CardContent className='grid grid-cols-1 px-0 xl:grid-cols-2'>
                  <div className='p-6'>
                    <a href={`/blog/${item.slug}`} className='block h-59.5 w-full overflow-hidden rounded-lg'>
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
                        loading='lazy'
                      />
                    </a>
                  </div>
                  <div className='flex flex-col justify-center gap-3 p-6'>
                    <div className='flex items-center gap-1.5 py-1'>
                      <div className='text-muted-foreground flex grow items-center gap-1.5'>
                        <CalendarDaysIcon className='size-5' />
                        <p>{item.pubDate}</p>
                      </div>
                      <Badge
                        className='bg-primary/10 text-primary cursor-pointer border-0 text-sm'
                        onClick={e => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.location.href = `/#category-${item.category}`
                        }}
                      >
                        {item.category}
                      </Badge>
                    </div>
                    <a href={`/blog/${item.slug}`}>
                      <h3 className='text-xl font-medium'>{item.title}</h3>
                    </a>

                    <p className='text-muted-foreground'>{item.description}</p>
                    <div className='flex w-full items-center justify-between gap-1 py-1'>
                      <span className='cursor-pointer text-sm font-medium'>{item.author}</span>
                      <Button
                        size='icon'
                        className='group-hover:bg-primary! bg-background text-foreground hover:bg-primary! hover:text-primary-foreground group-hover:text-primary-foreground border group-hover:border-transparent hover:border-transparent'
                        asChild
                      >
                        <a href={`/blog/${item.slug}`}>
                          <ArrowUpRightIcon />
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
    </section>
  )
}

export default HeroSection
