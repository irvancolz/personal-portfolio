import React, { useContext } from 'react'
import { carouselCounterContext } from '../../helper/Context';
import {Line, StyledLink} from '../../helper/styleProvider'
import { ContentWrapper, CounterWrapper } from './style'

export default function CarouselController() {
    const {plusCounter, minusCounter } = useContext(carouselCounterContext);

  return (
    <ContentWrapper>
        <CounterWrapper>
            <StyledLink>
                <p
                onClick={() => minusCounter()}>Prev</p>
                <Line></Line>
            </StyledLink>
            <StyledLink>
                <p
                onClick={() => plusCounter()}>Next</p>
                <Line></Line>
            </StyledLink>
        </CounterWrapper>
    </ContentWrapper>
  )
}
