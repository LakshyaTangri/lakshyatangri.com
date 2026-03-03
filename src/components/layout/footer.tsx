import { Separator } from '@/components/ui/separator'

import Logo from '@/components/logo'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8 lg:px-8'>
        <a href='/#'>
          <div className='flex items-center gap-3'>
            <Logo className='gap-3' />
          </div>
        </a>
        <div className='flex flex-col text-sm text-balance sm:text-left text-center text-muted-foreground gap-1 justify-center sm:justify-start'>
          <p className='font-semibold text-foreground text-base'>Lakshya Tangri</p>
          <p>Enterprise Architect | Solution Architect | AI, Cloud & Data</p>
          <p>
            <a href="tel:+447444766982" className='hover:text-primary transition-colors'>+44 7444766982</a> |
            <a href="mailto:info@lakshyatangri.com" className='hover:text-primary transition-colors ml-1'>info@lakshyatangri.com</a>
          </p>
          <p>N7, London & Delhi</p>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6 lg:px-8'>
        <p className='flex items-center gap-1 text-center font-medium text-balance max-sm:flex-col'>
          <span>
            {`©${new Date().getFullYear()}`}{' '}
            <a className='hover:underline' href='/#'>
              Lakshya Tangri.
            </a>
          </span>
          <span> Built for enduring systems.</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
