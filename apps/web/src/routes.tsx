import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "@/components/loading";

export default function AppRoutes() {
  const NotFoundPage = React.lazy(() => import("./pages/404/page"));
  const HomePage = React.lazy(() => import("./pages/home/page"));
  const IdeasPage = React.lazy(() => import("./pages/ideas/page"));
  const TermsPage = React.lazy(() => import("./pages/terms/page"));
  const PrivacyPage = React.lazy(() => import("./pages/privacy/page"));
  const AboutPage = React.lazy(() => import("./pages/about/page"));
  const SupportPage = React.lazy(() => import("./pages/support/page"));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
