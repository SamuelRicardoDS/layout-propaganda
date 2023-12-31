import styled from "styled-components";


export const SloganContainer  = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
`

export const SloganText = styled.p`
    color: #fff;
    font-size: 3rem;
    font-weight: 900;
    margin-left: 10rem;
    padding-top: 1rem;
    
`

export const SloganTextSpan = styled.span`
    background: linear-gradient(90deg, rgba(134,43,43,1) 0%, rgba(255,0,0,1) 52%, rgba(125,11,11,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 3rem;
    font-weight: 900;
    padding-top: 2rem;
`;


export const ImageContainer = styled.div`
    width: 40%;
    height: 100%;
    margin-top: 10%;
    margin-left: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    > img {
        border-radius: 30px;
        overflow: hidden;
        box-shadow: 1px 0px 49.3px -3px #717171;

    }
`





