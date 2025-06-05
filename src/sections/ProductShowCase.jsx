"use client"
import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import Image from 'next/image'
import { motion,useScroll,useTransform } from 'framer-motion'
import { useRef } from 'react'
const ProductShowCase = () => {

  const sectionRef = useRef(null);
  const {scrollYProgress} =useScroll({
    target:sectionRef,
    offset:["start end","end start"]
  })

  const translateY= useTransform(scrollYProgress,[0,1],[150,-150])
  return (
   <section ref={sectionRef} className='linear-gradient[bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip'>
    <div className='container'>
        <div className='section-heading'>
        <div className='flex justify-center'>
        <div className='tag'>
            Boost your productivity
        </div>
        </div>
        <h2 className='text-center font-bold text-3xl md:text-[54px] md:leading-[60px] tracking-tighter bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text mt-5'>A more effective way to track progress</h2>
        <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        </div>
        <div className='relative'>
        <Image src={productImage} alt='Product Image' className='mt-10' />
        <motion.img src={pyramidImage.src} alt='Product Image'
        className='hidden md:block absolute -right-36 -top-32' width={262} height={262}
        style={{
          translateY,
        }}
        />
        <motion.img src={tubeImage.src} alt='Product Image'
        className='hidden md:block absolute -bottom-24 -left-36' width={262} height={262}
         style={{
          translateY,
        }}
        />
        </div>
    </div>
   </section>
  )
}

export default ProductShowCase