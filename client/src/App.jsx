import './App.css'
import Grid from './components/grid/cssGrid'
import { Distribute25252525, Distribute5050, Distribute2575, Distribute255025, Distribute100 } from './components/grid/distribution/gridDistribution'
import Logo from './components/logo/logo'
import Infotext from './components/infotext/infotext'
import Navbar from './components/navbar/navbar'
import Home from './pages/home'

import { useState } from 'react'


function App() {
  const [view, setView] = useState(<Home/>)

  return (
    <>
      <Grid>
        <Distribute2575
          one={<Logo/>}
          two={
          <Navbar 
            viewCallback={setView}
            content={[{title: "Home", view: <Home/>}]}
          />
        }
        />
        {view}
      </Grid>
    </>
  )
}

export default App
