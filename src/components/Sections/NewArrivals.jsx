import React from 'react'
import SectionHeading from './SectionsHeading/SectionHeading'
import Card from '../Card/Card'
import Jeans from '../../assets/img/jeans.png'
import Shirts from '../../assets/img/shirts.png'
import TShirts from '../../assets/img/t-shirts.png'
import Dresses from '../../assets/img/dresses.jpg'
import Kurtis from '../../assets/img/kurtis.jpg'
import Joggers from '../../assets/img/joggers.jpg'
import Carousel from "react-multi-carousel";
import { responsive } from '../../utils/Section.constants'
import '../Sections/NewArrivals.css'
import "react-multi-carousel/lib/styles.css";



const items=[{
    "title":'Jeans',
    "imagePath":Jeans
},{
    "title":'Shirts',
    "imagePath":Shirts  
},{
    "title":'T-Shirts',
    "imagePath":TShirts
},{
    "title":'Dresses',
    "imagePath":Dresses
},{
    "title":'Kurtis',
    "imagePath":Kurtis
},{
    "title":'Joggers',
    "imagePath":Joggers
}]

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={'New Arrivals'}/>
      {/* <div className='flex flex-wrap '>
        {items && items?.map((item,index)=>
        <Card 
        key={item?.title+index} 
        title={item.title} 
        imagePath={item.imagePath} 
        />)}

      </div> */}
      <Carousel
  responsive={responsive}
  autoPlay={false}
  swipeable={true}
  draggable={true}
  showDots={true}
  infinite={false}
  keyBoardControl={true}
  itemClass="px-2"
  containerClass="pb-6"
>
  {items.map((item, index) => (
    <Card
      key={item.title + index}
      title={item.title}
      imagePath={item.imagePath}
    />
  ))}
</Carousel>

      
    </>
  )
}

export default NewArrivals
