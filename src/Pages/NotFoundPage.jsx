import { Link } from 'react-router-dom';
import warningImage from '../images/warning.png'


export default function NotFoundPage() {
  return (
    <section className='text-center flex flex-col justify-center items-center pt-[7rem] h-[100vh]'>
      <img src={warningImage} className='w-36' />
      <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
      <p className='text-xl mb-5'>This page does not exist</p>
      <Link
        to='/'
        className='bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-700 cursor-pointer mt-4'
      >
        Go Back
      </Link>
    </section>
  )
}