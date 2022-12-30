import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export function PostWriteForm({ addPost }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  const isWriteable = useMemo(() => {
    return Boolean(title && contents);
  }, [title, contents]);

  const write = useCallback(() => {
    const post = {
      title,
      contents,
      createAt: String(new Date()),
    };

    addPost(post);
    navigate("/post");
  }, [title, contents, addPost, navigate]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "48px",
        }}
      >
        <input
          style={{ fontSize: 60, marginBottom: "32px" }}
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          placeholder="TITLE"
        />
        <textarea
          style={{ fontSize: 20, height: "400px" }}
          value={contents}
          onChange={({ target: { value } }) => setContents(value)}
          placeholder="CONTENTS"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{ fontSize: 100 }}
          disabled={!isWriteable}
          onClick={() => write()}
        >
          WRITE
        </button>
      </div>
    </div>
  );
}
