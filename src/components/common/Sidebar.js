import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "32px 0px" }}
    >
      <Link to="home" style={{ fontSize: 50, padding: "8px 0px" }}>
        HOME
      </Link>
      <Link to="post" style={{ fontSize: 50, padding: "8px 0px" }}>
        LIST
      </Link>
      <Link to="post/write" style={{ fontSize: 50, padding: "8px 0px" }}>
        WRITE
      </Link>
    </div>
  );
}
