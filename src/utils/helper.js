import React from "react";
import Loading from "../components/Loading";

export default function capitalizeFirstLetter(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export const promiseWrapper = (promise) => {
  return new Promise((resolve) => {
    promise
      .then((resp) => {
        resolve([null, resp]);
      })
      .catch((err) => {
        resolve([err, null]);
      });
  });
};

export function getSession(token) {
  if (!token) return false;
  const header = parseJwt(token);
  if (!header) return false;
  const now = Math.floor(Date.now() / 1000);
  if (header.exp <= now) return false;
  return header;
}

export const date = (time) => {
  const a = new Date(time).toLocaleString();
  return a;
};

export const time = (time) => {
  const a = new Date(time).toLocaleTimeString();
  return a;
};

export function WaitingComponent(Component) {
  return (props) => (
    <React.Suspense
      fallback={
        <div style={{ height: "90vh", position: "relative" }}>
          <Loading />
        </div>
      }
    >
      <Component {...props} />
    </React.Suspense>
  );
}

export function Money(data = 0, curr = "NGN") {
  if (data === "" || data === null || data === undefined) {
    let value = 0;
    let money = typeof value === "number" ? value : parseFloat(value, 10);
    return money.toLocaleString("en-NG", {
      currency: curr,
      style: "currency",
    });
  } else {
    let value = data;
    let money = typeof value === "number" ? value : parseFloat(value, 10);
    return money.toLocaleString("en-NG", {
      currency: curr,
      style: "currency",
    });
  }
}

export function sortData(temp1) {
  return (
    (temp1 &&
      Object.keys(temp1).map((key) => [
        key,
        Object.keys(temp1[key]).map((ke) => [
          ke,
          Object.keys(temp1[key][ke]).map((k) => [k, temp1[key][ke][k][0]]),
        ]),
      ])) ||
    []
  );
}

export const joinArray = (newDate, oldData) => {
  return [...oldData, ...newDate];
};
