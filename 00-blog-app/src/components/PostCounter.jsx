import React, { useEffect } from 'react'

export default function PostCounter(props) {

    useEffect(() => {
        console.log('here')
    })

    return (
        <div>
            <h4>Number of posts: {props.count}</h4>
            <hr></hr>
        </div>
    )
}

