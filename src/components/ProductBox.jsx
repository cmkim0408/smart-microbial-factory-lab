import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProductBox({ title, link, color, size }) {
  const navigate = useNavigate();

  const boxSize =
    size === "large"
      ? "w-48 h-48 md:w-56 md:h-56 text-2xl md:text-3xl"
      : "w-32 h-32 md:w-40 md:h-40 text-base";

  return (
    <motion.div
      className={`${boxSize} rounded-2xl cursor-pointer flex flex-col justify-center items-center shadow-xl ${color}`}
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ type: "spring", stiffness: 200 }}
      onClick={() => navigate(link)}
    >
      <p className="font-bold text-gray-800">{title}</p>
    </motion.div>
  );
}
