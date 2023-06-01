// import React from "react";
// import styled from "styled components";

// const Wrapper = styled.div;
// padding: Tem;
// background: gray;

// const Title = styled.h1`
// fonst -size: 1.5em;
// color: isLabelWithInternallyDisabledControl;
// text-align: center;`;

// function MainPage(props){
//     return(
//         <Wrapper>
//             <Title>
//                 안녕, 리엑트!
//             </Title>
//         </Wrapper>
//     )
// }

// export default MainPage;

const name = `인제`
const regin = `서울`

function myTagFunction(strings, nameExp, regionExp){
    let str0 = string[0]
    let str1 = string[1]
    let str2 = string[2]

    return`${str0}${nameExp}${str1}${regionExp}${str2}`
}

const output = myTagFunction`제 이름은 ${name1}이고, 사는곳은${region}입니다.`

console.log(output)