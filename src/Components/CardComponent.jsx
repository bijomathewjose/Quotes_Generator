import React from "react";
import { useDispatch } from 'react-redux';
const CardComponent = ({ content, author, bookmarkded }) => {
    const dispatch = useDispatch();
    return (
        <div className="holder">
            <div className='cards'>
                <div className='card-content'>{content}</div>
                <div className="author-book">
                    <div className="author">{`-${author}`}</div>
                    <div className="mark" onClick={() => {
                        dispatch({ type: 'ADD_BOOKMARK' })
                    }}><img
                            src={`assets/bookmark-${bookmarkded ? 'remove' : 'add'}.svg`}
                            alt='' width={"100%"}
                            height="100%" /></div>
                </div>
            </div >
        </div>
    )
}
export default CardComponent;