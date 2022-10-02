import React from 'react';
import {
    addPost,
    updateNewPostTextBody
} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostTextBody}) (MyPosts)

export default MyPostsContainer;
