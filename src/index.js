import React from 'react'
import ReactDom from 'react-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import Login from './Login'
import { stateProvider } from './StateProvider'
import reducer, { initialState } from './Reducer'




function App (){
    const user = null;

    return(
        <React.StrictMode>
        <stateProvider intialState= {initialState} reducer={reducer}>
            <div className="app">
            {!user ? (<Login/>) :(
                <>
                 <Header/>
                <div className="app_body">
                    <Sidebar/>
                    <Feed/>
                    <Widget/>        
                 </div>
                
                </>

            )}
       
        </div>
    )

        </stateProvider>
        </React.StrictMode>
        
}
ReactDom.render(<App/>,document.getElementById('root'))