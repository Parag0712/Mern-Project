import React from 'react'
import "./loading.css"
import AnimationContainer from './Common/AnimationContainer'

function Loading() {
    return (
        <AnimationContainer>
            <div className='loading-container'>
                <span className="loader"></span>
            </div>
        </AnimationContainer>
    )
}

export default Loading