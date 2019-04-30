import React, { useState } from "react";

export default function Cookies() {
  const [cookies, setCookieCount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <h2>Cookies: {cookies}</h2>
      <button onClick={() => setCookieCount(cookies + 1)}>Add Cookie</button>
      <button onClick={() => setCookieCount(cookies - 1)}>Remove Cookie</button>
      <h2>Total: {total}</h2>
    </div>
  );
}
