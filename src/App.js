import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Home from "./pages/Home";
import Registerpage from "./pages/Registerpage";
import { useSelector } from "react-redux";
import "../src/styles/spinner.css";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import NotificationPage from "./pages/NotificationPage";
import User from "./pages/admin/User";
import Doctor from "./pages/admin/Doctor";
import Profile from "./pages/doctor/Profile";
import BookingPage from "./pages/BookingPage";
import DoctorAppointment from "./pages/doctor/DoctorAppointment";
import Appointment from "./pages/Appointment";
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading && <Spinner />}
        <Routes>
          <Route
            path="/apply-doctor"
            element={
              <ProtectedRoute>
                <ApplyDoctor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/doctors"
            element={
              <ProtectedRoute>
                <Doctor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/book-appointment/:doctorId"
            element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor-appointments"
            element={
              <ProtectedRoute>
                <DoctorAppointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <NotificationPage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element=
            <ProtectedRoute>
              {<Home />}
            </ProtectedRoute>
          />
          <Route path="/login" element=
            <PublicRoute>
              {<Loginpage />}
            </PublicRoute>
          />
          <Route path="/register" element=
            <PublicRoute>
              {<Registerpage />}
            </PublicRoute>
          />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;