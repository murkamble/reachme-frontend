import React from 'react'
import LeftSide from '../../Components/message/LeftSide'
import RightSide from '../../Components/message/RightSide'

const Conversation = () => {
    return (
        <div className="message d-flex">
            <div className="col-md-4 border-right px-0 left_mess">
                <LeftSide />
            </div>

            <div className="col-md-8 px-0">
                <RightSide />
            </div>
        </div>
    )
}

export default Conversation
