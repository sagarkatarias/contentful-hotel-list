import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import { HotelProvider } from "../context/HotelProvider";

export function AppRouter() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <HotelProvider>
              <Home />
            </HotelProvider>
          }
        />
        <Route
          path="/home"
          element={
            <HotelProvider>
              <Home />
            </HotelProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default AppRouter;
