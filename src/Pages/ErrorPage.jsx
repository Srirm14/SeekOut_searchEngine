import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center  mt-[200px] flex-col gap-5">
      <p className="text-gray-500">You have entered an incorrect url. Page not found. </p>
      <p className="text-gray-500">
        navigate to{" "}
        <span className="text-teal-700">
          {" "}
          <Link to="/search"> SeekOut</Link>
        </span>
      </p>
    </div>
  );
};

export default ErrorPage;
