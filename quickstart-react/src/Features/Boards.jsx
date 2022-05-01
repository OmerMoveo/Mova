import React from "react";
import mondaySdk from "monday-sdk-js";
import { useEffect } from "react";
// const monday = mondaySdk();
const MONDAYTOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE1Nzk5NzU2OCwidWlkIjoyODQ2OTY4NywiaWFkIjoiMjAyMi0wNC0yOFQxMzozNjowNS4yNDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.f66G2VyNXTpCUxCA1GePfLDrWda2a0Vx9yV5xgkA-lw";

function Boards() {
  useEffect(() => {
    let query =
      "{boards(limit:10) { name id description items { name column_values{title id type text } } } }";
    fetch("https://api.monday.com/v2", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: MONDAYTOKEN,
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(JSON.stringify(res, null, 2)));
  }, []);

  return <div>Boards</div>;
}

export default Boards;
