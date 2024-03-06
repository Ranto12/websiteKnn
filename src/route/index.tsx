import { Route, Routes } from "react-router-dom";
import { Data } from "../pages";

const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/dataRekomendasi" element={<Data />} />
      </Routes>
    </>
  );
};

export default RoutePage;
