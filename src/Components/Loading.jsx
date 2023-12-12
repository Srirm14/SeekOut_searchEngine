import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="relative flex justify-center items-center h-screen flex-col bottom-[75px]">
      <BounceLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;