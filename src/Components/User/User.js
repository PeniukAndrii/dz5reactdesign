import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../App.css'
import PostService from "../../Services/PostService/PostService";
import Post from "../Posts/Post";

class User extends Component {
    PostService = new PostService()
    state={posts:[], stan:false, AllPost:[]}

    async FindPost(id){
        let posts = await this.PostService.getPost(this.state.posts,id)
        this.setState({posts})
        this.setState({stan:!this.state.stan})
    }

    render() {
        let {item, match:{url}}=this.props
        let {posts, stan}=this.state
        return (
            <div>
                {
                    (item.id<=10 && item.id!==1) ? <hr/> : null
                }
                <div className={'AllUser-Info'}> {item.id}. {item.name}
                    <div className={'Wrap-Btn'}>
                        <Link to={`${url}/${item.id}`}><div className={'Details-btn'}>Details</div></Link>
                        <button className={'Post-btn'} onClick={()=>this.FindPost(item.id)}>Post</button>
                    </div>
                </div>
                    <div className={`${stan}`}>
                        {
                            posts.map(value => <Post item={value} key={value.id} stan={stan}/>)
                        }
                    </div>
            </div>
        );
    }
}

export default withRouter(User);