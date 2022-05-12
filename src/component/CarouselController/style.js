import styledComponents from "styled-components";

export const ContentWrapper  = styledComponents.div`
display: flex;
justify-content: center;
align-items: flex-end;
width: 100%;
height: 100%;

`

export const CounterWrapper = styledComponents.div`

    width: 100%;
    display: flex;
    justify-content: flex-end;
    p{
        cursor: pointer;
        font-size: 2rem;
    }
    @media (max-width: 475px){
        p{
           font-size: 1.25rem;
       } 
    }

`