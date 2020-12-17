import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css'
import AllUsers from "./Components/All-Users/AllUsers";

class App extends Component {

    state={ShowMenu:'NonActive'}
    render() {
        let {ShowMenu}=this.state
        return (
            <Router>
               <div className={'Main-Wrap'}>
                   <div className={'Menu'}>
                           <div className={'btn'} onMouseEnter={()=>this.setState({ShowMenu: 'Active'})}>Menu</div>
                           <Link to={'/'}><div className={'btn'}>Back</div></Link>
                   </div>

                   <div className={`${ShowMenu}`}>
                       {
                           ShowMenu ? <div onMouseLeave={()=>this.setState({ShowMenu: 'NonActive'})}><Link to={'/users'}>Users</Link></div> : null
                       }
                   </div>

                      <Switch>
                          <Route path={'/users'} render={()=><AllUsers/>}/>
                      </Switch>

               </div>
            </Router>
        );
    }
}

export default App;