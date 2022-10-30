import styled from 'styled-components'


export const HeaderBox = styled.div`
background-color: rgba(255,255,255,0.8);
width: 100vw;
height: 90px;
position: fixed;
top: 0px;
left: 0px;
display: flex;
margin-bottom: 100px;
`
export const Logo = styled.img`
height: 48px;
margin-top: 25px;
margin-left: 65px;
:hover{
    cursor: pointer;
}
`
export const Menu = styled.div`
width: 80vw;
height: 90px;
display: flex;
margin-right: -1000px;
align-content: space-between;
margin-left: 26vw;

`
export const DefaultButton = styled.button`
margin:25px 5px ;
display: flex;
width: fit-content;
height: 43px;
font-family: "Open Sans", sans-serif;
font-weight: bolder;
color: #737373;
padding: 10px 20px;
border-radius: 6px;
border-style: none;
background-color: white;
justify-content: center; 
align-items: center;
:hover{
    background-color: rgba(229,229,229);
    cursor: pointer;
}
`
export const ButtonIcon = styled.img`
//height: 5px;
width: 20px;
`
export const PrimaryButton = styled.button`
margin:25px 5px ;
width: fit-content;
min-width: fit-content;
height: 43px;
font-family: 'Open Sans', sans-serif;
font-weight: bolder;
color: #FFA800;
background-color: white;
border: 2px solid #FFA800;
padding: 10px 20px;
border-radius: 6px;
:hover{
    background-color: #FFA800;
    color:white;
    cursor: pointer;
}
`


export const SecondaryButton = styled.button`
margin:25px 5px ;
width: fit-content;
height: 43px;
font-family: 'Open Sans', sans-serif;
font-weight: bolder;
color: #0000FF;
background-color: white;
border: 2px solid #0000FF;
padding: 10px 20px;
border-radius: 6px;
:hover{
    background-color: #0000FF;
    color:white;
    cursor: pointer;
}
`
export const DropDown = styled.div`
width: 200px;
height: 300px;

`