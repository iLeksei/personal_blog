import React from "react";

import "./Post.css";

export interface IPost {
    dateTime: string;
    title: string,
    text: string,
}

export const Post = (props: IPost): JSX.Element => {
    return (
        <article className="post__container">
            <img></img>
            <time dateTime={props.dateTime} className="post__date-time"/>
            <title className="post__title">{props.title}</title>
            <div className="post__text">{props.text}</div>
        </article>
    );
}