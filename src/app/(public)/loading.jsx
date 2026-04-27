import { PuffLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="min-h-[40vh] flex justify-center items-center">
  <PuffLoader
  color="#D72050"
  size={120}
/>
    </div>
  );
};

export default loading;