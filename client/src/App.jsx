import './App.css'
import Grid from './components/grid/cssGrid'
import { Distribute25252525, Distribute5050, Distribute2575, Distribute255025, Distribute100 } from './components/grid/distribution/gridDistribution'
import Logo from './components/logo/logo'
import Infotext from './components/infotext/infotext'

function App() {
  return (
    <>
      <Grid>
        <Distribute2575
          one={<Logo/>}
          two={<div  style={{backgroundColor: "red"}}>Header</div>}
        />
        <Distribute100
          one={
            <>
              <br/>
              <br/>
            </>
          }
        />
        <Distribute2575
          one={
            <Infotext>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate, nulla vitae sollicitudin fringilla, odio tellus efficitur lacus, at sagittis neque dui vitae erat. Vivamus vel cursus felis. Praesent nec vulputate nunc, nec porta magna. Proin elementum in ante vel posuere. Proin a varius augue. Nunc ut dignissim diam. Curabitur odio leo, laoreet ut mollis ac, efficitur eget mauris. Cras suscipit sodales nibh, a tincidunt quam sodales in. Cras turpis quam, accumsan ac pretium feugiat, congue non metus. Nam vitae elementum quam. Maecenas ultrices dui in lectus placerat tincidunt. Duis eu auctor turpis.
              Nam et est risus. Pellentesque turpis sem, consequat sit amet metus in, congue pharetra justo. Nam sed leo lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, purus nec posuere pharetra, odio urna rhoncus lectus, ac venenatis arcu turpis vel urna. Cras ex mi, eleifend vitae blandit vitae, sollicitudin eu mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras mi lectus, volutpat vel consectetur id, posuere sed ipsum.
              Cras iaculis porta magna, molestie vehicula massa condimentum ut. Suspendisse ullamcorper, tortor id dapibus porttitor, magna justo consequat quam, a dignissim nisi risus in augue. In neque lorem, sagittis sit amet augue ut, vehicula congue dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed a augue eu metus semper congue vitae et risus. Mauris consequat lorem ac consectetur facilisis. Quisque ac mi molestie, convallis ipsum at, volutpat neque. Proin id tincidunt nisi, vitae pulvinar elit. Cras eget diam posuere, rutrum neque id, laoreet lacus. 
            </Infotext>
          }
          two={<div  style={{backgroundColor: "pink"}}>test</div>}
        />
        <Distribute25252525 
          one={<div  style={{backgroundColor: "red"}}>test</div>}
          two={<div  style={{backgroundColor: "green"}}>test</div>}
          three={<div  style={{backgroundColor: "yellow"}}>test</div>}
          four={<div  style={{backgroundColor: "purple"}}>test</div>}
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
