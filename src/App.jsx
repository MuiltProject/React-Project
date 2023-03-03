import PageLayout from "./layouts/pages";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes />
      </PageLayout>
    </Router>
  );
}

export default App;
