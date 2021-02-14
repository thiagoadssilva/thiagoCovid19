import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000000;
    height: 100%;

    @media (max-width: 810px){
        display: flex;
        justify-content: center;
        flex-direction: column;        
    }

    
`;

export const ContainerBody = styled.div`
    //background-color: #000000;
    margin: 15px;

`;

export const Warning = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 15px;
    height: 150px;
    padding: 20px;
    margin-bottom: 40px;

    @media (max-width: 810px){
        height: auto;
    }
    
`;
export const Update = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #CCCCCC;
    border-radius: 15px;
    height: 150px;
    padding: 20px;
    margin-bottom: 40px;

    @media (max-width: 810px){
        height: auto;
    }
`;
export const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 15px;
    height: 150px;
    padding: 20px;

    @media (max-width: 810px){
        height: auto;
    }
`;

export const TitleWarning = styled.h2`
    font-weight: bold; 

    @media (max-width: 810px){
        font-size: 20px;
    }
`;
export const DescriptionWarning = styled.text`
    font-size: 25px;

    @media (max-width: 810px){
        font-size: 15px;
    }
`;

export const TitleInformation = styled.h2`
    font-weight: bold;

    @media (max-width: 810px){
        font-size: 20px;
    }
`;
export const DescriptionInformation = styled.text`
    display: flex;
    flex-direction: column;
    justify-content: center;    
    font-size: 25px;

    @media (max-width: 810px){
        font-size: 10px;
    }
`;

export const TitleUpdate = styled.h2`
    font-weight: bold;
    @media (max-width: 810px){
        font-size: 20px;
    }
`;
export const DescriptionUpdate = styled.text`
    font-size: 25px;

    @media (max-width: 810px){
        font-size: 15px;
    }
`;

export const DescriptionLinkGit = styled.a`
    display: flex;
    align-items: center;
    color: #000000;
    
`;
export const DescriptionLinkLinkedin = styled.a`
    display: flex;
    align-items: center;
    color: #000000;

    
`;

export const ImageGit = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 15px;

    @media (max-width: 810px){
        width: 20px;
        height: 15px;
    }
`;
export const ImageLik = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 15px;

    @media (max-width: 810px){
        width: 20px;
        height: 15px;
        margin-top: 10px;
    }
`;