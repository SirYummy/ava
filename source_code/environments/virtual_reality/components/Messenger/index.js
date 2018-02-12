import React from 'react'

export default (props) => {
    return(
        <div>
            <input 
            type="text" 
            id="message" 
            name="message" 
            value="props.message" 
            />
            <button 
            onClick={props.onMessageSentHandler}
            >
                Send
            </button>
        </div>
    )
}