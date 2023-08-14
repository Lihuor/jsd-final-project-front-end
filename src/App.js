import { styled } from "styled-components";
import bg from './images/bg.png';
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/orb";
import Navigation from "./components/Navigation/Navigation";
import React, { useMemo, useState } from "react";
import DashBoard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expense from "./components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalcontext";

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayContent = (active) => {
    switch (active) {
      case 1:
        return <DashBoard />
      case 2:
        return <DashBoard />
      case 3:
        return <Income />
      case 4:
        return <Expense />
      default: 
        return <DashBoard />
    }
  }
  
  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  return (
    <AppStyled bg={bg} className="App">

      {orbMemo}
      <MainLayout>
      <Navigation active={active} setActive={setActive}/>
      <main>
        {displayContent(active)}
      </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0px;
  }
}
`;



export default App;
