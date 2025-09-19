import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "@/components/loading";

export default function AppRoutes() {
  const HomePage = React.lazy(() => import("./pages/home/page"));
  const TermsPage = React.lazy(() => import("./pages/terms/page"));
  const PrivacyPage = React.lazy(() => import("./pages/privacy/page"));
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Suspense>
  );
}
