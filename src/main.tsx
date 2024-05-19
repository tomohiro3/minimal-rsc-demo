

import React, { use, Suspense } from "react";
import ReactDOM from "react-dom/client";
// @ts-expect-error asd
import { createFromFetch } from "react-server-dom-webpack/client";

const content = createFromFetch(
  fetch('http://localhost:3000/'),
);

const Content = ():React.ReactNode => {
  return use(content);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <Suspense fallback={
    <div>
      {new Date().toString()}
      <span style={{color: 'blue', fontWeight:700}}>(rendered by client)</span>
    </div>
  }>
    <Content />
  </Suspense>
  </>
);

