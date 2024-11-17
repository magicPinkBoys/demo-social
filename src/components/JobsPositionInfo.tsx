import useFormSchema from "../pages/form-data-for-graph";
import { jobsPositionInfoSchema } from "./validationSchema";
import { useState } from "react";

function JobsPositionInfo() {
  const { nextStep, formData, setJobsPositionInfo } = useFormSchema();
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setJobsPositionInfo({ [e.target.name]: e.target.value });
  };

  const validateAndNext = () => {
    try {
        jobsPositionInfoSchema.parse(formData.jobsPositionInfo);
      setError("");
      nextStep();
    } catch (error: any) {
      setError(
        error.errors[0]?.message || "Please fill all teh fields correctly."
      );
    }
  };

  return (
    <div>
      {/* <h2 className="text-xl font-semibold">Personal Information</h2> */}
      <div className="mt-5">
        {error && <div className="font-bold text-red-600">*{error}</div>}
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              className="text-lg font-medium text-gray-900"
              htmlFor="industry"
            >
              Industry
            </label>
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              value={formData.jobsPositionInfo.industry}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900"
              htmlFor="job"
            >
              Job
            </label>
            <input
              type="text"
              name="job"
              placeholder="Job"
              value={formData.jobsPositionInfo.job}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900"
              htmlFor="skill"
            >
              Skill
            </label>
            <input
              type="text"
              name="skill"
              placeholder="Skill"
              value={formData.jobsPositionInfo.skill}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900"
              htmlFor="workDescription"
            >
              Work Description
            </label>
            <input
              type="text"
              name="workDescription"
              placeholder="Work Description"
              value={formData.jobsPositionInfo.workDescription}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-900"
              htmlFor="educationLevel"
            >
              Education Level
            </label>
            <input
              type="text"
              name="educationLevel"
              placeholder="Education Level"
              value={formData.jobsPositionInfo.educationLevel}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>

        </div>
      </div>
      {/* buttons */}
      <div className="flex justify-end mt-5">
        <button
          className="text-white bg-blue-500 px-3 py-1 rounded-lg text-lg sm:text-xl"
          onClick={validateAndNext}
        >
          Next {"\u2192"}
        </button>
      </div>
    </div>
  );
}

export default JobsPositionInfo;