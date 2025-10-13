import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-scroll';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules'

import imgMobile1 from '../assets/arteCelular.png'
import imgTablet1 from '../assets/arteTablet.png'
import imgLaptop1 from '../assets/arteLaptop.png'
import imgDesktop1 from '../assets/artePantallaGrande.png'

import carrusel1 from '../assets/carrusel1.png'
import carrusel2 from '../assets/carrusel2.png'
import carrusel3 from '../assets/carrusel3.png'

// Cada "anchor" debe coincidir con el atributo `name` en la sección de destino
const slides = [
  {
    mobile: imgMobile1,
    tablet: imgTablet1,
    laptop: imgLaptop1,
    desktop: imgDesktop1,
    alt: 'Banner 1',
    link: 'programas',
  },
  {
    mobile: carrusel1,
    tablet: carrusel1,
    laptop: carrusel1,
    desktop: carrusel1,
    alt: 'Banner 2',
    link: 'comoapoyar',
  },
  {
    mobile: carrusel2,
    tablet: carrusel2,
    laptop: carrusel2,
    desktop: carrusel2,
    alt: 'Banner 3',
    link: 'impacto',
  },
  {
    mobile: carrusel3,
    tablet: carrusel3,
    laptop: carrusel3,
    desktop: carrusel3,
    alt: 'Banner 4',
    link: 'contacto',
  },
]

export default function ResponsiveCarousel() {
  return (
    <div name='quienessomos' className='flex items-center justify-center'>
      <Swiper
        modules={[Pagination, Autoplay, Scrollbar]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <picture>
              <source media="(min-width: 1536px)" srcSet={slide.desktop} />
              <source media="(min-width: 1024px)" srcSet={slide.laptop} />
              <source media="(min-width: 640px)" srcSet={slide.tablet} />
              <img
                src={slide.mobile}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 z-10">
              
                <button className="bg-orange-one text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-two transition duration-300">
                  <Link to={slide.link} smooth duration={500}>
                  Ver más
                  </Link>
                </button>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
