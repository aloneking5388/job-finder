import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  Cancel,
  Companies,
  CompanyProfile,
  ContactUs,
  FindJobs,
  JobDetail,
  Notfound,
  PrivacyPolicy,
  RefundPolicy,
  Success,
  TermsAndConditions,
  UploadJob,
  UserProfile,
} from "./pages";
import { useSelector } from "react-redux";
import Applications from "./pages/Applications";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/user-auth' state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <main className='bg-[#f7fdfd]'>
      <Navbar />

      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<Navigate to='/find-jobs' replace={true} />}
          />
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/companies' element={<Companies />} />
          <Route
            path={
              user?.accountType === "seeker"
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProfile />}
          />

          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/applications"} element={<Applications />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
        </Route>

        <Route path='/about-us' element={<About />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/terms-and-condition' element={<TermsAndConditions />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/success' element={<Success />} />
        <Route path='/user-auth' element={<AuthPage />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App;
