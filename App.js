import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './navbar'
import Newscomponent from './newscontent'

import Loading from 'react-top-loading-bar'
function App() {
    const [a, b] = useState(0)

    return (
        <div>
            <Router>
            <Loading color='blue' progress={a}  height="2px"   onLoaderFinished={()=>b(0)}/>
           
                <Navbar />
                <Routes>
                    <Route path='/general' element={<Newscomponent setProgress={b} category="GENERAL" />}>      </Route>
                    <Route path='/business' element={<Newscomponent setProgress={b} category="BUSINESS" />}>      </Route>
                    <Route path='/entertainment' element={<Newscomponent setProgress={b} category="ENTERTAINMENT" />}> </Route>
                    <Route path='/general' element={<Newscomponent setProgress={b} category="GENERAL" />}>       </Route>
                    <Route path='/health' element={<Newscomponent setProgress={b} category="HEALTH" />}>        </Route>
                    <Route path='/science' element={<Newscomponent setProgress={b} category="SCIENCE" />}>       </Route>
                    <Route path='/sports' element={<Newscomponent setProgress={b} category="SPORTS" />}>       </Route>
                    <Route path='/technology' element={<Newscomponent setProgress={b} category="TECHNOLOGY" />}>    </Route>

                </Routes>
            </Router>
        </div>
    )
}
export default App
