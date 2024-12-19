const Button = ({ label, onClick, className }) => {
  return (
    <button
      className={`border border-black w-60 py-4 font-semibold font-custom2 transition duration-500 ease-in-out hover:bg-[#262b2f] hover:text-[#FFFFFF] ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
