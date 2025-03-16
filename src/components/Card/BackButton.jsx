import { useNavigate } from "react-router";
import { FaCircleArrowLeft } from "react-icons/fa6";
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className=" hover:bg-black hover:text-white font-bold py-2 px-4 rounded flex items-center gap-1"
    >
      <FaCircleArrowLeft /> Go Back
    </button>
  );
};

export default BackButton;
