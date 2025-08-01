import { Routes, Route } from "react-router";

import { Layout } from "app/Layout";
import { StartPage } from "pages/start/ui";
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
        <Route path="/" element={<StartPage />} />
        <Route path="electric" element={<ElectricPage />} />
        <Route path="electric/:id" element={<ElectricPageCard top={true} />} />
        <Route
          path="electric/price"
          element={<ElectricFullPrice top={true} />}
        />
        <Route path="conditioners" element={<ConditionersPage />} />
        <Route
          path="conditioners/:id"
          element={<ConditionersPageCard top={true} />}
        />
        <Route
          path="conditioners/price"
          element={<ConditionersFullPrice top={true} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
