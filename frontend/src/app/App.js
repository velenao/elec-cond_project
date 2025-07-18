import { Routes, Route } from "react-router";

import { Layout } from "app/Layout";
import { MainPage } from "pages/main/ui";
import { ElectricPage } from "pages/electric/ui/elecPage";
import { ElectricPageCard } from "pages/electric/ui/elecCardPage";
import { ElectricFullPrice } from "pages/electric/ui/elecFullPrice";
import { ConditionersPage } from "pages/conditioners/ui/condPage";
import { ConditionersPageCard } from "pages/conditioners/ui/condCardPage";
import { ConditionersFullPrice } from "pages/conditioners/ui/condFullPrice";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="electric" element={<ElectricPage />} />
        <Route path="electric/:id" element={<ElectricPageCard />} />
        <Route path="electric/price" element={<ElectricFullPrice />} />
        <Route path="conditioners" element={<ConditionersPage />} />
        <Route path="conditioners/:id" element={<ConditionersPageCard />} />
        <Route path="conditioners/price" element={<ConditionersFullPrice />} />
      </Routes>
    </Layout>
  );
}

export default App;
