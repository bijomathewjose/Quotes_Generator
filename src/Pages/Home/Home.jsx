import React, { useEffect, useState } from 'react';

import { connect, useDispatch } from 'react-redux';
import CardComponent from '../../Components/CardComponent'
import Navbar from '../../Components/Navbar';
import './home.css'
const Home = ({ API, Quote_BookMarked }) => {
    const [quote, setQuote] = useState([]);
    const dispatch = useDispatch();
    const [Next, setNext] = useState(false);
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setQuote(data);
                dispatch({ type: 'QUOTE_CHANGED', quote: { content: data.content, author: data.author, id: data._id } });
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [API, Next])
    return (<>
        <div className='home-body'>
            <Navbar />
            <CardComponent content={quote.content} author={quote.author} bookmarkded={quote.bookmarkded} />
            <SelectList dispatch={dispatch} />
            <div className='button-container'>
                <div className='button' onClick={() => setNext(!Next)}>Next Quote</div>
            </div>
        </div>
    </>)
};

const SelectList = ({ dispatch }) => {
    const TAGS = 'https://api.quotable.io/tags';
    const [Tags, setTags] = useState([]);
    useEffect(() => {
        fetch(TAGS)
            .then((res) => res.json())
            .then((data) => setTags(data))
    }, [TAGS])
    return (
        <div className='list'>
            <select onChange={(e) => {
                dispatch({ type: 'TAG_SELECTED', tag: e.target.value.toLowerCase() })
            }}>
                <option value={''}>Random</option>
                {
                    Tags.map(tag =>
                        (<option >{tag.name.toUpperCase()}</option>)
                    )
                }
            </select>
        </div>
    )
}
function myStateToProps(state) {
    return {
        API: state.API,
        Quote_BookMarked: state.quote.bookmarkded,
    }
}
export default connect(myStateToProps)(Home)