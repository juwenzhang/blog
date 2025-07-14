import React, { Suspense } from "react";
import { useRoutes } from 'react-router-dom';
import routes from "@/routes/index";

const App = () => {
  const Router = useRoutes(routes);
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        {Router}
      </Suspense>
    </React.Fragment>
  );
};

export default App;