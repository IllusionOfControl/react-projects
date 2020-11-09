import React from 'react'
import Post from './Post'
import BLOG_POSTS from '../data'

export default class PostsList extends React.Component {
    render() {
        return (
            <div>
                {BLOG_POSTS.map((post) => 
                <>
                    <Post post={post} />
                    <hr></hr>
                </>
                )}
            </div>
        )
    }
}