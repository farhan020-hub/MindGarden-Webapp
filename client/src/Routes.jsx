import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import UserProvider from "./context/UserContext";
import { ArticleProvider } from "./context/ArticleContext";
import { ResourceProvider } from "./context/ResourcesContext";
import { AssessmentProvider } from "./context/AssessmentContext";
import { CommunityProvider } from "./context/CommunityContext";
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const Blog = React.lazy(() => import("pages/Blog"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const SignUpPage = React.lazy(() => import("pages/SignUp"));
const LogInPage = React.lazy(() => import("pages/LogIn"));
const ResourcesUsersPage = React.lazy(() => import("pages/ResourcesUsers"));
const AdminDashboardPage = React.lazy(() => import("pages/AdminDashboard"));
const AddBlogsPage = React.lazy(() => import("pages/AddBlogsPage"));
const ResourcesAdminPage = React.lazy(() => import("pages/ResourcesAdmin"));
const Assessment = React.lazy(() => import("pages/AssessmentPage"));
const CommunityForum = React.lazy(() => import("pages/CommunityForum"));
const AdminUsersPage = React.lazy(() => import("pages/AdminUsers"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <UserProvider>
          <ArticleProvider>
            <ResourceProvider>
            <AssessmentProvider>
            <CommunityProvider>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path="/userresources" element={<ResourcesUsersPage />} />
              <Route path="/admindashboard" element={<AdminDashboardPage />} />
              <Route path="/addblogs" element={<AddBlogsPage />} />
              <Route path="/adminresources" element={<ResourcesAdminPage />} />
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/communityforum" element={<CommunityForum />} />
              <Route path="/adminusers" element={<AdminUsersPage />} />
            </Routes>
            </CommunityProvider>
            </AssessmentProvider>
            </ResourceProvider>
          </ArticleProvider>
        </UserProvider>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
