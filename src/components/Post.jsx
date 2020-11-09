var React = require('react')

export default class Post extends React.Component {
    render() {
        return (
        <div id={this.props.post.id}>
            <h1>{this.props.post.title}</h1>
            <p>{this.props.post.content}</p>
        </div>
        )
    }
}