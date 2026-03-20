const ArchitecturalPhilosophy = () => {
    return (
        <section id='philosophy' className='bg-muted/50 py-16 sm:py-24'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col gap-12 text-center items-center'>
                    <div className='max-w-3xl flex flex-col gap-4'>
                        <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>Architectural Philosophy</h2>
                        <p className='text-lg text-muted-foreground'>
                            Architecting Enterprise Scale programmes and delivering across all levels of stakeholders — C-level, Portfolio, and Projects. My work spans Business, Data, Application (Information systems), and Technology domains.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl'>
                        <div className='bg-background p-8 rounded-xl shadow-sm border flex flex-col items-center justify-center gap-4 text-center'>
                            <div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold'>1</div>
                            <h3 className='text-xl font-medium'>Integration</h3>
                            <p className='text-muted-foreground italic'>"Technology without architecture creates fragility."</p>
                        </div>

                        <div className='bg-background p-8 rounded-xl shadow-sm border flex flex-col items-center justify-center gap-4 text-center'>
                            <div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold'>2</div>
                            <h3 className='text-xl font-medium'>Strategy</h3>
                            <p className='text-muted-foreground italic'>"Architecture without strategy creates stagnation."</p>
                        </div>

                        <div className='bg-background p-8 rounded-xl shadow-sm border flex flex-col items-center justify-center gap-4 text-center'>
                            <div className='h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold'>3</div>
                            <h3 className='text-xl font-medium'>Governance</h3>
                            <p className='text-muted-foreground italic'>"AI without governance creates risk."</p>
                        </div>
                    </div>

                    <div className='mt-8 text-2xl font-semibold tracking-tight text-primary italic'>
                        "Working backwards from the customer"
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArchitecturalPhilosophy
