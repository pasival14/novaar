import jumbotron from '../src/assets/jumb.jpg'

const Body = () => {
    return ( 
        <>
            <div  className="bg-no-repeat text-white"
            style={{backgroundImage: `url(${jumbotron})`, 
            height: '140vh',
            backgroundSize: '100% auto',
            backgroundPosition: 'center'}}>
                <div className='text-center w-full  ml-[350px]'>
                <p className=' text-6xl font-bold pt-[200px] w-[50%]'>CREATING SPACES THAT INSPIRES</p>
                <p className='w-[50%] text-lg mt-2'>"Crafting timeless spaces that inspire and elevate living."</p>
                </div>
                <div className='flex justify-between mt-56 m-36'>
                    <div className='w-[40%]'>
                        <p className='text-5xl'>We love and live architecture</p>
                        <div className='flex mt-3 ml-24'>
                            <p className='text-xl'>Our story</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-[20px] border-2 rounded-full mt-[6px] ml-2' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                        </div>
                    </div>
                    <div className='w-[35%] text-lg'>
                        <p>"Discover the artistry of our architectural firm, where every space is meticulously crafted to embody timeless elegance and ignite a sense of wonder, enriching the way you live and interact with your environment."</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Body;