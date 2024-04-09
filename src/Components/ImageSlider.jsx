import { useState } from "react";
 

 const slides = [
  {
      url: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1688497831081-836510928186?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      url: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://images.unsplash.com/photo-1552874869-5c39ec9288dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      url: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://images.unsplash.com/photo-1597143720583-bbbf44a6677d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      url: 'https://images.unsplash.com/photo-1598554793905-075f7b355cd9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
},
  {
      url: 'https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://images.unsplash.com/photo-1623697986878-744935a60299?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      url: 'https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

export default function ImageSlider() {
    

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide? slides.length - 1: currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = ()=>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide? 0: currentIndex + 1;
        setCurrentIndex(newIndex);
    }

  return (
    <section className='flex flex-col items-center m-8'>
        <h1 className="font-special text-5xl mb-4">New Arrival</h1>

      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-[330px] h-[500px] bg-cover bg-center md:w-[450px] md:h-[500px]"></div>
    
      <div className="flex space-x-4 mt-4">
      <div className="text-4xl hover:scale-110 cursor-pointer" onClick={prevSlide}>
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
      </div>
      <div className="text-4xl hover:scale-110 cursor-pointer" onClick={nextSlide}>
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
      </div>
      </div>
    </section>
  )
}
