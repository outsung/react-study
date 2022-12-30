import React from "react";

import { PostListEmpty, PostListItem } from "../../../components/post";

export function PostListScreen({ postList }) {
  return (
    <div>
      {!postList.length && <PostListEmpty />}
      {postList.map((post) => (
        <PostListItem post={post} />
      ))}
    </div>
  );
}
