import { Routes, Route } from "react-router";

import { Layout } from "app/Layout";
import { MainPage } from "pages/mainPage/ui";
import { ElectricPage } from "pages/electricPage";
import { ConditionersPage } from "pages/conditioners/ui/condPage";
import { ConditionersPageCard } from "pages/conditioners/ui/condCardPage";
import { ConditionersFullPrice } from "pages/conditioners/ui/condFullPrice/CondFullPrice";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="electric" element={<ElectricPage />} />
        <Route path="conditioners" element={<ConditionersPage />} />
        <Route path="conditioners/:id" element={<ConditionersPageCard />} />
        <Route path="conditioners/price" element={<ConditionersFullPrice />} />
      </Routes>
    </Layout>
  );
}

export default App;
