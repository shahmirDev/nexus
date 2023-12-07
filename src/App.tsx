import { Home, SignInForm, SignUpForm, AuthLayout } from "./pages";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <main className="flex h-screen w-screen ">
        <Router>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SignInForm />} />
              <Route path="/sign-up" element={<SignUpForm />} />
            </Route>
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
