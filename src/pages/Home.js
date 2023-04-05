import React from "react";

function Home(props) {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontWeight: 600 }}>Welcome,</h1>
      <img src="/logo.svg" style={{ width: 200 }} />
    </div>
  );
}

export default Home;
