import PageLayout from "./layouts/pages";

import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <PageLayout>
        <ScrollToTop />
        <Routes />
      </PageLayout>
    </Router>
  );
}

export default App;
