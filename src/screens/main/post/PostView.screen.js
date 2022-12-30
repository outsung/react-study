import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

import { PostViewEmpty, PostViewItem } from "../../../components/post";

export function PostViewScreen({ getPostById }) {
  const { id: stringId } = useParams();
  const id = stringId ? Number(stringId) : null;

  const post = useMemo(() => getPostById(id), [getPostById, id]);

  return <div>{post ? <PostViewItem post={post} /> : <PostViewEmpty />}</div>;
}
