import { Routes, Route } from "react-router";

import { Layout } from "widgets/Layout";
import { MainPage } from "pages/mainPage";
import { ElectricPage } from "pages/electricPage";
import { ConditionersPage } from "pages/conditionersPage/condPage";
import { ConditionersPageCard } from "pages/conditionersPage/condCardPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="electric" element={<ElectricPage />} />
        <Route path="conditioners" element={<ConditionersPage />} />
        <Route path="conditioners/:id" element={<ConditionersPageCard />} />
      </Routes>
    </Layout>
  );
}

export default App;
