import mainImg from '../assets/main.png'

function Hero() {
    return (
        <>
        <div className='flex justify-center'>
            <img src={mainImg} alt="Hero" className='w-40 md:w-44 lg:w-48' />
        </div>

    <div className='max-w-4xl mx-auto px-4'> 
        <div className='max-w-xl font-mono text-center text-2xl mx-auto'>
            I design identities, and solve your complex and creative problems </div>
    </div>

    </>    
    )
}

export default Hero