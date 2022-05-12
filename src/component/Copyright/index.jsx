import React from 'react'
import { FooterContent } from '../../helper/contentProvider'
import { ContentWrapper, ImageContainer, SocialLink } from './style'

export default function Copyright() {
  return (
   <ContentWrapper>
       <p>
           {FooterContent.copyrightText}
       </p>
       <ImageContainer>
           {FooterContent.copyrightContent.map((content, index)=>{
               return(
                   <SocialLink key={index} href={content.link} target="_blank" rel='noreferrer'>
                       <img src={content.img} alt={content.link}/>
                   </SocialLink>
               )
           })}
       </ImageContainer>
   </ContentWrapper>
  )
}
