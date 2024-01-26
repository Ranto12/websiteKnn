import { Route } from "react-router-dom";
import { Data } from "../pages";

const RoutePage = () => {
  return (
    <>
      <Route path="/data" element={<Data />} />
    </>
  );
};

export default RoutePage;
