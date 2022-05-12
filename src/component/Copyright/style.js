import styledComponents from "styled-components";

export const ContentWrapper = styledComponents.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: calc(100% - 12rem);
    @media(max-width: 475px){
        bottom: 2.5rem;
        left: 1rem;
        width: calc(100% - 2rem);
    }
        
`

export const ImageContainer = styledComponents.div`
    display: flex;
    gap: .5rem;

    img{
        width: 2rem;
    }

    @media(max-width: 475px){
        display: none;
        p{
            font-size: 1rem;
        }
    }
`

export const SocialLink = styledComponents.a`
    transition: .5s;
    &:hover{
        transform: translateY(-50%);
    }
`