import { Link } from "react-router-dom";

export function ErrorElement() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ fontSize: 300 }}>404</div>
      <Link to={"home"} style={{ fontSize: 100, fontStyle: "italic" }}>
        GO HOME
      </Link>
    </div>
  );
}
