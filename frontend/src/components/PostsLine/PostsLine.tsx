import React from "react";
import {IPost, Post} from "../Post/Post";

interface IProps {
    posts: IPost[]
}
export const PostsLine = (props: IProps): JSX.Element => {

    const renderPosts = () => {
        return props.posts.map((post, idx) => {
            return (
                <Post
                    key={`post-${post.title}`}
                    dateTime={post.dateTime}
                    title={post.title}
                    text={post.text}
                />
            )
        })
    }

    return (
        <div className="posts-line__container">
        {
            renderPosts()
        }
        </div>
    );
}