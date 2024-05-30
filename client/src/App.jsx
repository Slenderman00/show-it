import './App.css'
import Grid from './components/grid/cssGrid'
import { Distribute25252525, Distribute5050, Distribute2575, Distribute255025, Distribute100 } from './components/grid/distribution/gridDistribution'

function App() {

  return (
    <>
      <Grid>
        <Distribute100
          one={<div  style={{backgroundColor: "orange"}}>Header</div>}
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
        <Distribute2575
          one={<div  style={{backgroundColor: "yellow"}}>test</div>}
          two={<div  style={{backgroundColor: "red"}}>test</div>}
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
