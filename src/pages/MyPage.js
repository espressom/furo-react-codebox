import React from "react";
import { useFuro } from "furo-react";
import styled from "styled-components";

function MyPage(props) {
  const { logout } = useFuro();
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
      <h1 style={{ fontWeight: 600, margin: 0 }}>마이페이지</h1>
      <div>
        <p style={{ color: "#8C8C8C" }}>
          로그인 되어야만 볼 수 있는 페이지입니다.
        </p>
        <div
          style={{
            padding: 20,
            borderRadius: 12,
            border: "1px solid #D9D9D9",
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <div style={styles.profile}></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#BFBFBF", marginBottom: 3 }}>Email</span>
              <span style={{ fontWeight: 600 }}>test@test.com</span>
            </div>
          </div>
          <hr style={{ border: "1px solid #F5F5F5", margin: "20px 0" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "10px",
            }}
          >
            <span style={{ color: "#BFBFBF" }}>Username</span>
            <span>""</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0px",
            }}
          >
            <span style={{ color: "#BFBFBF" }}>Sign In Method</span>
            <span>idpw</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0px",
            }}
          >
            <span style={{ color: "#BFBFBF" }}>Created At</span>
            <span>02/12/2023</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <span style={{ color: "#BFBFBF" }}>Phone Number</span>
            <span>""</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  profile: {
    width: 48,
    height: 48,
    backgroundColor: "#D9D9D9",
    borderRadius: "50%",
    backgroundImage: "url('user.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPosition: "center",
    marginRight: 12,
  },
};

export default MyPage;
