import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import PageLayout from "./layouts/pages";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageLayout>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </PageLayout>
    </Router>
  );
}

export default App;
