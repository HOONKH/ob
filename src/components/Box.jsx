const Box = ({ boxCount }) => {
  const colorList = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-violet-400",
  ];

  return (
    <div
      className={`${
        colorList[boxCount % colorList.length]
      } text-white h-48 w-48 font-bold flex justify-center items-center`}
    >
      Box {boxCount}
    </div>
  );
};
export default Box;
