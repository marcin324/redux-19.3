import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


// Dodawanie komentarza
const addComment = text => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};

const boundAddComment = text => dispatch(addComment(text));


// Usuwanie komentarza
const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        id: commentId
    }
};

const boundRemoveComment = commentId => dispatch(removeComment(commentId));


// Edytowanie komentarza
const editComment = (text, commentId) => {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: commentId
    }
};

const boundEditComment = (text, commentId) => dispatch(editComment(text, commentId));


// Ocena +1
const thumbUpComment = (commentId, votes)=> {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId,
        votes: votes + 1
    }
};

const boundThumbUpComment = (commentId, votes) => dispatch(thumbUpComment(commentId, votes));


// Ocena -1
const thumbDownComment = (commentId, votes) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId,
        votes: votes - 1
    }
};

const boundThumbDownComment = (commentId, votes) => dispatch(thumbDownComment(commentId, votes));