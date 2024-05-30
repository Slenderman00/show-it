import './App.css'
import Grid from './components/grid/cssGrid'
import { Distribute25252525, Distribute5050, Distribute2575, Distribute255025, Distribute100 } from './components/grid/distribution/gridDistribution'
import Logo from './components/logo/logo'

function App() {

  return (
    <>
      <Grid>
        <Distribute2575
          one={<Logo/>}
          two={<div  style={{backgroundColor: "red"}}>Header</div>}
        />
        <Distribute100
          one={<div  style={{backgroundColor: "orange"}}>Stuff</div>}
        />
        <Distribute25252525 
          one={<div  style={{backgroundColor: "red"}}>test</div>}
          two={<div  style={{backgroundColor: "green"}}>test</div>}
          three={<div  style={{backgroundColor: "yellow"}}>test</div>}
          four={<div  style={{backgroundColor: "purple"}}>test</div>}
        />
        <Distribute5050
          one={<div  style={{backgroundColor: "orange"}}>test</div>}
          two={<div  style={{backgroundColor: "pink"}}>test</div>}
        />
        <Distribute255025
          one={<div  style={{backgroundColor: "purple"}}>test</div>}
          two={<div  style={{backgroundColor: "green"}}>test</div>}
          three={<div  style={{backgroundColor: "yellow"}}>test</div>}
        />
      </Grid>
    </>
  )
}

export default App
