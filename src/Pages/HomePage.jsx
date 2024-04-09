import Hero from '../Components/Hero'
import ImageSlider from '../Components/ImageSlider';
import HomeProducts from '../Components/HomeProducts';


export default function HomePage() {
  return (
    <div className='pt-[6rem]'>
      <Hero/>
      <ImageSlider/>
      <HomeProducts/>
    </div>
  )
}
