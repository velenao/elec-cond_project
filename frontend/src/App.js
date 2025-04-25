import { Routes, Route } from "react-router";

import { Layout } from "./components/Layout.jsx";
import { MainPage } from "./pages/MainPage.jsx";
import { ElectricPage } from "./pages/electricPages/ElectricPage.jsx";
import { ConditionersPage } from "./pages/conditionersPages/ConditionersPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="electric" element={<ElectricPage />} />
        <Route path="conditioners" element={<ConditionersPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
