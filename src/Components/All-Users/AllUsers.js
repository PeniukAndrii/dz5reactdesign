import React, {Component} from 'react';
import UserService from "../../Services/User-Service/UserService";
import User from "../User/User";
import '../../App.css'
import {Route, withRouter} from "react-router-dom";
import UserDetails from "../UserDetails/UserDetails";


class AllUsers extends Component {
    UserService = new UserService()
    state={users:[]}

    async componentDidMount() {
        let users = await this.UserService.getAllUsers()
        this.setState({users})
    }

    render() {
        let {users}=this.state
        return (
            <div>
                <span className={'Main-Text-User'}>Users</span>
                    <div id={'Main-Block'}>
                        <div className={'block1'}>
                            <div className={'block1-Inside'}>
                                {
                                    users.map(value => <User item={value} key={value.id}/>)
                                }
                            </div>
                        </div>
                        <Route path={`/users/:id`} render={(props)=>{
                            let {match:{params:{id}}}=props
                            return <UserDetails id={id} key={id}/>
                        }}/>
                    </div>


            </div>
        );
    }
}

export default withRouter(AllUsers);