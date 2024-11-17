import useFormSchema from "../pages/form-data-for-graph";

const Circle = ({
  step,
  currentIndex,
}: {
  step: number;
  currentIndex: number;
}) => {
  return (
    <div
      className={`w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center
    rounded-full border-2 sm:border-4 select-none transition-colors duration-300
    ease-in-out delay-300 ${
      step == currentIndex
        ? "text-white bg-red-500 border-red-500"
        : `${
            step < currentIndex
              ? " border-gray-300 text-gray-500"
              : "bg-red-500 border-red-500 text-white"
          }`
    }
    `}
    >
      {currentIndex}
    </div>
  );
};

function ProgressBar() {
  const { step, getTotalSteps } = useFormSchema();
  const totalSteps: number = getTotalSteps();
  return (
    <div className="flex mx-auto justify-between mb-6 w-3/4 max-w-2xl">
      {[...Array(totalSteps - 1)].map((_, idx) => (
        <div key={idx} className="flex items-center w-full">
          <Circle step={step} currentIndex={idx + 1}  />

          {/* connecting line */}
          <div className="mx-4 flex-grow h-[2px] sm:h-1 relative">
            <div className="absolute top-0 left-0 h-full w-full bg-gray-300" />

            <div
              className={`absolute top-0 left-0 h-full w-full bg-red-500
              transition-transform duration-300 ease-in-out origin-left
              transform ${step > idx + 1 ? "scale-x-100" : "scale-x-0"}
              `}
            />
          </div>
        </div>
      ))}
      {/* last circle */}
      <div className="flex items-center w-fit">
        <Circle step={step} currentIndex={totalSteps} />
      </div>
    </div>
  );
}

export default ProgressBar;