import name from '../src/assets/name.png'
import logo from '../src/assets/logo.png'
// import jumbotron from '../src/assets/jumb.jpg'
// import n2 from '../src/assets/n2.jpg
import ink from '../src/assets/linkedin.svg'
import tweet from '../src/assets/social-media.svg'
import instagram from '../src/assets/instagram.svg'

const Header = () => {
    return ( 
        <>
            <div className='text-white fixed top-0 left-0 z-50 w-full'>
                <h1 className='hidden'>NOVAAR</h1>
                <div className='flex justify-between px-24'>
                    <div className='flex p-2 pt-3'>
                        <img className='h-[40px]' src={name}/>
                    </div>
                    <div className='m-3 mt-2 text-sm '>
                        <ul className='flex p-2 px-4 pt-3'>
                            <li className=''>Projects</li>
                            <li className='px-2'>Services</li>
                            <li className=''>About Us</li>
                            <li className='px-2'>Contact</li>
                            <li className='border-2 rounded-full mt-[-3px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"> <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" /></svg>
                            </li>
                        </ul>
                    </div>
                    <div className='flex py-[10px]'>
                        <img className='h-[30px]' src={ink}/>
                        <img className='h-[27px] px-[20px] pt-1' src={instagram}/>
                        <img className='h-[30px]' src={tweet}/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Header;