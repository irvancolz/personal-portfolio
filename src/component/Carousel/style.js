import styledComponents from "styled-components";
import { Images } from "../../Assets/img/main carousel";

export const CarouselWrapper = styledComponents.div`
width: 100%;
height: 100%;
transition: ${props => props.count === 0 || props.count === Images.length - 1  ? null : ".5s"};
display: flex;
flex-direction: ${props => props.type === "vertical" ? "column" : "row"};
transform: ${props => props.type === "vertical" ? "translateY": "translateX"}(-${props => props.count * 100}%);

@media(max-width: 475px){
    flex-direction: row;
    transform: translateX(-${props => props.count * 100}%);
}
`
export const CarouselImg = styledComponents.img`
min-width: 100%;
height: 100%;

`
export const ImgWrapper = styledComponents.div`
position: relative;
height: 100%;
min-width: 100%;


@media(max-width: 475px){
    height: 100vh;
    
    img{
        width: auto;
    }
    
}
`