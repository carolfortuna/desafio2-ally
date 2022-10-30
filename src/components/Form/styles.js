import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
margin-top: 90px;
` 

export const FormContainer = styled.div`
border: 1px solid lightgray;
box-shadow: 5px 5px 5px lightgrey;
width: 48%;
height: 250px;
margin: 3%;
padding: 60px 20px 60px 20px;
text-align: center;

`
export const Title = styled.h1`
font-family: 'Open Sans', sans-serif;
font-size: 25px;
color: #0000FF;
margin-top: -2px;

`
export const FormInput = styled.input`
width: 300px;
border: 1px solid lightgray;
background-color: white;
margin-top: 10px;
margin-inline: auto;
padding: 10px;
font-size: 15px;
`
 export const FormSelect = styled.select`
 width: 300px;
height: 88px;
 border: 1px solid lightgray;
 background-color: white;
 margin-top: 10px;
 padding:10px;
 margin-inline: auto;
 font-size: 15px;
 font-family: "Open Sans", sans-serif;
 :hover{
     cursor: pointer;
 }
 
 `

 export const FormButton = styled.button`
 padding: 10px 20px;
 background-color: white;
 border: 2px solid #FFA800;
 color: #FFA800;
 border-radius: 5px;
 font-weight: bold;
 font-family: 'Open Sans', sans-serif;
 font-size: 16px;
 margin-top: -10px;
 margin-bottom: 20px;
 :hover{
     cursor: pointer;
     background-color: #FFA800;
     color:white;
 }
 ` 