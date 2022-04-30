import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const animation = keyframes`
  /* from{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to{
    transform: rotate(360deg);
    border-radius: 100px;
  } */
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height : 200px;
  width : 200px;
  background-color: tomato;
  display: flex;
  // justify-content 가로 축을 기준으로 좌우에 대한 정렬을 관장 합니다.
  justify-content: center;
  // align-items 세로 축을 기준으로 정렬을 하게 됩니다.
  align-items: center;
  animation: ${animation} 1s linear infinite;
  ${Emoji}{
    
    &:hover{
      font-size: 98px;
    }
  }
`;


function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😍</Emoji>
      </Box>
        <Emoji as="p">🐄</Emoji>
    </Wrapper>
  );
}

export default App;
