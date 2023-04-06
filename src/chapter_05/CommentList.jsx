import React from "react";
import Comment from "./Comment";

const comment = [
    {
        name: "김성재2",
        comment: "안녕하세요"
    },
    {
        name: "김성재3",
        comment: "안녕하세요"
    },
    {
        name: "김성재4",
        comment: "안녕하세요"
    },
    ]

function CommentList(props){
    return(
        <div>
            {comment.map((foo)=>{
                return(
                    <Comment name={foo.name} comment={foo.comment}/>
                )
            })}
        </div>
    );
}

export default CommentList;