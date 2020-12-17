import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, stan}=this.props
        return (
            <div>
                {
                    stan===true ? <div>{item.id}. {item.title}</div> : null
                }
            </div>
        );
    }
}

export default Post;