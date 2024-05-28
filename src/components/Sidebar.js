const Sidebar = () => {
  return (
    <div className="w-1/6 bg-blue-100 p-4">
      <button className="w-full text-white border border-black rounded-md bg-red-500 flex justify-between p-1">
        Orders
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
