import React from 'react'
import Navbar from '../../Components/Navbar';
import CardComponent from '../../Components/CardComponent';
import { connect, } from 'react-redux';
import './bookmarks.css'
const Bookmarks = ({ Bookmarks }) => {
    return (
        <div className='bookmark-body'>
            <Navbar />
            {Bookmarks.map((quote) => (
                <CardComponent className="card-component" content={quote.content} author={quote.author} bookmarkded={quote.bookmarkded} />
            ))}
        </div>
    );
};
function myStateToProps(state) {
    return {
        Bookmarks: state.bookmarks,
    }
}
export default connect(myStateToProps)(Bookmarks)
