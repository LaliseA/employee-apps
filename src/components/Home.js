import { CenterFocusStrong } from "@mui/icons-material";
import React from "react";

function Home() {
  return (
    <div
      style={{
        padding: "50px",
        margin: "50px",
        background: "#f2f2f2",
        borderRadius: "5%",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Welcome To the Employee page</h1>
      <br />
      <p>
        Web development is the work involved in developing a website for the
        Internet (World Wide Web) or an intranet (a private network). Web
        development can range from developing a simple single static page of
        plain text to complex web applications, electronic businesses, and
        social network services.
      </p>
      <div style={{ margin: "0 auto" }}>
        <div style={styleButton}>Login</div>
        <div style={styleButton}>Register</div>
      </div>
    </div>
  );
}
const styleButton = {
  backgroundColor: "#2196F3",
  width: "100px",
  marginBottom: "10px",
  marginLeft: "10px",
  textAlign: "center",
  padding: "3px 0",
  borderRadius: "4px",
  color: "#fff",
  cursor: "pointer",
};
export default Home;
