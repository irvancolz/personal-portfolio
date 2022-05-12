import React, { useContext} from 'react'
import { carouselCounterContext } from '../../helper/Context';
import { CarouselImg, CarouselWrapper, ImgWrapper } from './style';


export default function Carousel({...props}) {
    const images = props.imgSrc;
    const {counter} = useContext(carouselCounterContext);
  return (
    <CarouselWrapper count={counter} type={props.type}>
        {images.map((img, index) =>{
            return (
                <ImgWrapper key={index}>
                    <CarouselImg src={img} alt={img}/>
                </ImgWrapper>
            )
        })}
    </CarouselWrapper>
  )
}
