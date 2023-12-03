import styled from "styled-components";

const ContainerData = styled.div `

`
const OrbitContainer = styled.iframe `
width:100%;
height:100%;
min-height:500px;
overflow-y: none;
overflow-x: none;
`
const DescriptionContainer = styled.div `
width:100%;
height:100%;
background: rgb(14 17 28);
background-color: #e7e7e7;
color: rgb(18,25,25);
display:flex;
padding: 10px;

& > div > div > div {
    background-color: #e7e7e7;
    border-radius: 5px;
    width: 95.33%;
    padding: 15px;
}
`
const ElementData = styled.div `
    margin-top:1%;
    /* background-color: #e7e7e7; */
    border-radius: 5px;
    width: 95.33%;
    padding: 15px;
`
export{
    ContainerData,
    OrbitContainer,
    DescriptionContainer,
    ElementData
}