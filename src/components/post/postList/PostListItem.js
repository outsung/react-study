import { useNavigate } from "react-router-dom";

export function PostListItem({ post }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        cursor: "pointer",
        borderBottom: "1px solid #000000",
      }}
      onClick={() => navigate(`${post.id}`)}
    >
      <div style={{ fontSize: 100 }}>{post.title}</div>
      <div style={{ fontSize: 30 }}>
        {new Date(post.createAt).toDateString()}
      </div>
    </div>
  );
}
