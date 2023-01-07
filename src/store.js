import { createStore } from 'redux';


const initialState = {
    bookmarks: [],
    quote: {
        bookmarked: false
    },
    API: `https://api.quotable.io/random?tags=`,
    Tag: '',
}
const store = createStore(reducer);
function add_bookmark(bookmarks, quote) {
    console.log(quote)
    return check(quote.id, bookmarks) ? bookmarks : [...bookmarks, quote];
}
function remove_bookmark(index, bookmarks) {
    bookmarks.splice(index, 1);
    bookmarks.map(queries => console.log(queries))
    return bookmarks
}
function new_quote(quote, bookmarks) {
    return { bookmarked: check(quote.id, bookmarks) >= 0, ...quote };
}
function check(id, bookmarks) {
    let index = 0;
    for (let quote of bookmarks) {
        if (quote.id === id)
            return index;
        index++;
    }
}
function reducer(state = initialState, action) {
    switch (action.type) {

        case 'ADD_BOOKMARK':
            return {
                ...state,
                bookmarks: add_bookmark(state.bookmarks, state.quote)
            };
        case 'REMOVE_BOOKMARK':
            return {
                ...state,
                bookmarks: remove_bookmark(action.index, state.bookmarks),
            };
        case 'QUOTE_CHANGED':
            return {
                ...state,
                quote: new_quote(action.quote, state.bookmarks),
            };
        case 'API_CHANGE':
            return {
                ...state,
                API: 'https://api.quotable.io/' + action.query
            }
        case 'TAG_SELECTED':
            return {
                ...state,
                tag: action.tag,
                API: 'https://api.quotable.io/random?tags=' + action.tag,
            }
        default:
            return state
    }
}
export default store;
