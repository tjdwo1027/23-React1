import styled from "stled-compoments"

const Wrapper = styled.div`
padding: 1rem;
display: flex;
flex-direction: row;
align - items: flex-start;
justify-content: flex-start;
background-color:lightgrey;
`;

const Block = styled.div`
padding: ${(props) => props.padding};
border: 1px solid black;
border-radius: 1rem;
background-color:${(props) => props.backgroundColor};
color:white;
font-size: 2rem;
font-weight: bold;
text-align: centet;
`;

const blockItem = [
    {
        label:"1"
        padding:"1rem",
        backgroundColor:"red"
    },
    {
        label:"2";
    }
]

export default Blocks;