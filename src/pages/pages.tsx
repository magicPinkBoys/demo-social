"use client";
import PersonalInfo from "../components/PersonalInfo";
import ProgressBar from "../components/ProgressBar";
import ReviewSubmit from "../components/ReviewSubmit";
import JobsPositionInfo from "../components/JobsPositionInfo";
import useFormSchema from "./form-data-for-graph";

export default function Home() {
  const { step } = useFormSchema();

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getAllUsers();
  //   }
  //   fetchData();
  // }, []);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <JobsPositionInfo />;
      case 3:
        return <ReviewSubmit />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-[80VH] p-10 mx-5">
        <div className="text-white pt-2 text-center text-2xl sm:text-3xl font-semibold">
        Digital Creative Skill
        </div>
        <div className="text-white pt-2 mb-5 text-center text-l sm:text-l font-semibold">
        database
        </div>
        {/* progress bar */}
        <ProgressBar />

        {/* steps */}
        <div>{renderStep()}</div>
      </div>
    </div>
  );
}