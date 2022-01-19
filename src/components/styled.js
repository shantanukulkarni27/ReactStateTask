import styled, { StyleComponent } from "styled-components";

export const SubButton = styled.button`
background-color:grey
color:black`

export const InputField = styled.input`
        width: 20%;   
        margin: 15px ;  
        padding: 10px 10px;   
        display: block;   
        border: 2px solid grey;   
        box-sizing: border-box;   
        margin-left: 50px;
        `
export const Mylabel = styled.div`
        margin-left: 50px;
        color:rgb(200,145,170);
        `

export let HeaderWrapper = styled.header` 
background-color: rgb(99,110,132);
height: 350px;
position: relative;   
`
const Head = styled.div`
 background-color:grey;
 font-size:50px;
 height:300px;
  
`

export const ImgHolder = styled.div`
position: absolute;
top: 55px;
left: 145px;
width: 270px;
border: 1px solid white;`

export const HeadTexts = styled.div`
margin-left: 440px;
padding-top: 110px;`

export const BioSection = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
padding-top: 60px;
padding-bottom: 40px;
background-color:#E3E3E3
`

export const BioList = styled.li`
list-style: none;
padding: 10px;
margin-top: 15px;
text-transform: uppercase;
`
export const MyArticle = styled.article`
  width:900px;
`
export const ArticleHead = styled.h1`
margin-bottom: 30px;
    color:rgb(198,98,138);
    font-size: 25px;
`
export const DashUl = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
background-color: rgb(161 157 164);
height: 50px;
`
export const DashLi = styled.li`
list-style: none;
`
export const DashAnchor = styled.li`
text-decoration: none;
color: rgb(232, 233, 235);
`
export const DashHead = styled.h1`
    color:orange;
`
export const Btn = styled.button`
 background-color: grey;
`