export function PostViewItem({ post }) {
  return (
    <div>
      <div style={{ fontSize: 100 }}>{post.title}</div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "32px",
        }}
      >
        <div style={{ fontSize: 30 }}>
          {new Date(post.createAt).toDateString()}
        </div>
      </div>

      <div>{post.contents}</div>
    </div>
  );
}
