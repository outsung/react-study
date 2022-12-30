import React from "react";

import { PostWriteForm } from "../../../components/post";

export function PostWriteScreen({ addPost }) {
  return <PostWriteForm addPost={addPost} />;
}
