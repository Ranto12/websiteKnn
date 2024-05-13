import { Route, Routes } from "react-router-dom";
import { Data, DataHama, DataTanaman, Rekomendasi } from "../pages";

const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route path="/dataRekomendasi" element={<Data />} />
        <Route path="/dataHama" element={<DataHama />} />
        <Route path="/dataTanaman" element={<DataTanaman />} />
        <Route path="/" element={<Rekomendasi />} />
      </Routes>
    </>
  );
};

export default RoutePage;
