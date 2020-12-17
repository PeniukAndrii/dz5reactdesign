import React, {Component} from 'react';
import UserService from "../../Services/User-Service/UserService";

class UserDetails extends Component {
    UserService = new UserService()
    state={user:[]}
    async componentDidMount() {
        let user= await this.UserService.getUserById(this.props.id)
        this.setState({user})
    }
    render() {
        let{user}=this.state
        return (
            <div className={'block2'}>
                <div className={'block2-Inside'}>
                        <div>
                            <div className={'Name'}>{user.name}</div>
                            <div className={'UserName'}>{user.username}</div>
                            <hr/>
                            <div className={'Info-PEW'}>
                                <div className={'Phone-Email-Website'}><h2>Number:</h2>{user.phone}</div>
                                <hr/>
                                <div className={'Phone-Email-Website'}><h2>Email:</h2>{user.email}</div>
                                <hr/>
                                <div className={'Phone-Email-Website'}><h2>Website:</h2>{user.website}</div>
                            </div>
                        </div>
                 </div>
           </div>
        );
    }
}

export default UserDetails;