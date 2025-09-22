import { Refine, Authenticated } from "@refinedev/core";
import {
  ThemedLayout,
  ThemedSider,
  ErrorComponent,
  useNotificationProvider
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import "./styles/global.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier
} from "@refinedev/react-router";
import { UserList } from "./pages/users/list";
import { UserCreate } from "./pages/users/create";
import { VesselList } from "./pages/vessels/list";
import { VesselCreate } from "./pages/vessels/create";
import { VesselEdit } from "./pages/vessels/edit";

import { App as AntdApp } from "antd";
import { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";

import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";

import { authProvider } from "./providers/authProvider";
import { dataProvider } from "./providers/dataProvider";
import LoginPage from "./pages/login";
import { UserEdit } from "./pages/users/edit";
import VesselShow from "./pages/vessels/VesselShow";
import { CrewList } from "./pages/crew/list";
import { CrewCreate } from "./pages/crew/create";
import { CrewEdit } from "./pages/crew/edit";
import { CrewShow } from "./pages/crew/show";
import OnboardingPage from "./pages/crew/onboarding";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  setupGlobalErrorHandling,
  enhanceConsoleLogging,
  setNotificationApi
} from "./utils/errorHandler";

// Setup global error handling
setupGlobalErrorHandling();
enhanceConsoleLogging();

// Component to setup notification API
const NotificationSetup: React.FC = () => {
  const { notification } = AntdApp.useApp();

  useEffect(() => {
    setNotificationApi(notification);
  }, [notification]);

  return null;
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <RefineKbarProvider>
          <ColorModeContextProvider>
            <AntdApp>
              <NotificationSetup />
              <DevtoolsProvider>
                <Refine
                  dataProvider={dataProvider}
                  authProvider={authProvider}
                  routerProvider={routerBindings}
                  notificationProvider={useNotificationProvider}
                  resources={[
                    {
                      name: "users",
                      list: "/users",
                      meta: {
                        label: "Users",
                        title: "User Management"
                      },
                      create: "/users/create",
                      edit: "/users/:id/edit"
                    },
                    {
                      name: "vessels",
                      list: "/vessels",
                      meta: {
                        label: "Vessels",
                        title: "Vessel Management"
                      },
                      create: "/vessels/create",
                      edit: "/vessels/:id/edit",
                      show: "/vessels/show/:id"
                    },
                    {
                      name: "crew",
                      list: "/crew",
                      meta: {
                        label: "Crew",
                        title: "Crew Management"
                      },
                      create: "/crew/onboarding",
                      edit: "/crew/:id/edit",
                      show: "/crew/show/:id"
                    }
                  ]}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    projectId: "8ZpMFE-ydpHF1-tNpE3T"
                  }}
                >
                  <Routes>
                    <Route
                      element={
                        <Authenticated
                          key="main-layout"
                          fallback={<CatchAllNavigate to="/login" />}
                        >
                          <ThemedLayout
                            Header={Header}
                            Sider={(props) => <ThemedSider {...props} fixed />}
                          >
                            <Outlet />
                          </ThemedLayout>
                        </Authenticated>
                      }
                    >
                      <Route index element={<NavigateToResource />} />
                      <Route path="/users" element={<UserList />} />
                      <Route path="/users/create" element={<UserCreate />} />
                      <Route path="/users/:id/edit" element={<UserEdit />} />
                      <Route path="/vessels" element={<VesselList />} />
                      <Route
                        path="/vessels/create"
                        element={<VesselCreate />}
                      />
                      <Route
                        path="/vessels/:id/edit"
                        element={<VesselEdit />}
                      />
                      <Route
                        path="/vessels/show/:id"
                        element={<VesselShow />}
                      />
                      <Route path="/crew" element={<CrewList />} />
                      <Route
                        path="/crew/onboarding"
                        element={<OnboardingPage />}
                      />
                      <Route path="/crew/:id/edit" element={<CrewEdit />} />
                      <Route path="/crew/show/:id" element={<CrewShow />} />
                      <Route path="/crew/create" element={<CrewCreate />} />
                      {/* Add your resource routes here */}
                      <Route path="*" element={<ErrorComponent />} />
                    </Route>

                    <Route path="/login" element={<LoginPage />} />
                  </Routes>

                  <RefineKbar />
                  <UnsavedChangesNotifier />
                  <DocumentTitleHandler />
                </Refine>

                <DevtoolsPanel />
              </DevtoolsProvider>
            </AntdApp>
          </ColorModeContextProvider>
        </RefineKbarProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
