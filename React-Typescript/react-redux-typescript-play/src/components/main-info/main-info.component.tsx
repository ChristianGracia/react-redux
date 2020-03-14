import React, { useState } from "react";
import styles from "./main-info.module.scss";
// import { Wave } from "react-animated-text";

export function MainInfo() {
  return (
    <div>
      <div className="container" style={{ alignItems: "center" }}>
        <div className="row">
          <div className="col-sm">
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 30,
                  color: "#FEFF01"
                }}
              >
                Christian Gracia
              </div>
            </div>
            <p
              className="lead"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                color: "white"
              }}
            >
              Software Engineer <i className="fas fa-laptop-code"></i>
              {"  "}
              {"  "}
              Providence, RI
            </p>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                color: "#FEFF01",
                textAlign: "center"
              }}
            >
              React, Java, React Native, C#, ++
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                fontSize: 15
              }}
            >
              Email{" "}
              <span style={{ color: "#FEFF01" }}>
                <i className="fas fa-envelope"></i>
              </span>{" "}
              <span
                className="email-home"
                style={{
                  color: "#fff",
                  fontWeight: "bold"
                }}
              >
                christianmgracia@gmail.com
              </span>
            </p>

            <div style={{ padding: 5 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
