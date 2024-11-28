import useFormSchema from "../pages/form-data-for-graph";
import { jobsPositionInfoSchema } from "./validationSchema";
import { useState } from "react";
import { Entry, industries, Job } from "../data/SelectionData";


function JobsPositionInfo() {
  const { prevStep, nextStep, formData, setJobsPositionInfo } = useFormSchema();
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setJobsPositionInfo({ [e.target.name]: e.target.value });
  };

  // const [industry, setIndustry] = useState('industry');
  // const [job, setJob] = useState('job');


  const [jobs, setJobs] = useState<Array<Job>>([]);
  const [skills, setSkills] = useState<Array<Entry>>([]);

  const changeIndustry = ({
    fieldName,
    industryName
  }: { fieldName: string; industryName: string }
  ) => {
    setJobsPositionInfo({ [fieldName]: industryName })
    // setIndustry(industryName);
    const mayBeIndustry = industries.find((ctr) => ctr.name === industryName);

    if (!mayBeIndustry) return;

    setJobs(mayBeIndustry.jobs)
  }

  const changeJob = ({
    fieldName,
    jobName
  }: { fieldName: string; jobName: string }
  ) => {
    setJobsPositionInfo({ [fieldName]: jobName })
    // setJob(jobName);
    const mayBeJob = jobs.find((job) => job.id === jobName);

    if (!mayBeJob) return;

    setSkills(mayBeJob.skills)
  }

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
      <div className="mt-5">
        {error && <div className="font-bold text-red-600">*{error}</div>}
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="industry"
            >
              กลุ่มอุตสาหกรรมสร้างสรรค์(Industry)*
            </label>
            <select name="industry" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" onChange={(e) => changeIndustry({
              fieldName: e.target.name,
              industryName: e.target.value
            })} value={formData.jobsPositionInfo.industry ?? ""} >
              <option value=""></option>
              {industries.map(ctr => (
                <option value={ctr.name}>{ctr.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="job"
            >
              อาชีพ(Job)*
            </label>
            <select disabled={!jobs} name="job" onChange={(e) => changeJob({
              fieldName: e.target.name,
              jobName: e.target.value
            })} value={formData.jobsPositionInfo.job ?? ""} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
                <option value=""></option>
              {jobs.map(job => (
                <option value={job.id}>{job.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="skill"
            >
              ความเชี่ยวชาญ(​Technical Skill)*
            </label>
            <select disabled={!skills} name="skill" onChange={e => setJobsPositionInfo({ [e.target.name]: e.target.value })} value={formData.jobsPositionInfo.skill ?? ""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
                <option value=""></option>
              {skills.map(skill => (
                <option value={skill.id}>{skill.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="workDescription"
            >
              ลักษณะการทำงาน (Type of work)
            </label>
            <input
              type="text"
              name="workDescription"
              placeholder="Work Description"
              value={formData.jobsPositionInfo.workDescription}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              // required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="yearOfWork"
            >
              ระยะเวลาในการทำงาน
            </label>
            <select name="yearOfWork" onChange={e => setJobsPositionInfo({ [e.target.name]: e.target.value })} value={formData.jobsPositionInfo.yearOfWork ?? ""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
              <option value=""></option>
              <option value="ต่ำกว่า 6 เดือน">ต่ำกว่า 6 เดือน</option>
              <option value="น้อยกว่า 1 ปี">น้อยกว่า 1 ปี</option>
              <option value="1 - 2 ปี">1 - 2 ปี</option>
              <option value="3 - 5 ปี">3 - 5 ปี</option>
              <option value="มากกว่า 5 ปี">มากกว่า 5 ปี</option>
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="salary"
            >
              รายได้ต่อเดือน
            </label>
            <select name="salary" onChange={e => setJobsPositionInfo({ [e.target.name]: e.target.value })} value={formData.jobsPositionInfo.salary ?? ""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
              <option value=""></option>
              <option value="ต่ำกว่า 15,000 บาท">ต่ำกว่า 15,000 บาท</option>
              <option value="15,000  - 29,999 บาท">15,000  - 29,999 บาท</option>
              <option value="30,000 - 49,999  บาท">30,000 - 49,999  บาท</option>
              <option value="50,000 - 74,999  บาท">50,000 - 74,999  บาท</option>
              <option value="75,000 - 99,999 บาท">75,000 - 99,999 บาท</option>
              <option value="มากกว่า 100,000  บาท">มากกว่า 100,000  บาท</option>

            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="educationLevel"
            >
              ระดับการศึกษา
            </label>
            {/* <input
              type="text"
              name="educationLevel"
              placeholder="Education Level"
              value={formData.jobsPositionInfo.educationLevel}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            /> */}
            <select name="educationLevel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" onChange={e => setJobsPositionInfo({ [e.target.name]: e.target.value })} value={formData.jobsPositionInfo.educationLevel ?? ""} >
              <option value=""></option>
              <option value="ประถมศึกษา (Primary School)">ประถมศึกษา (Primary School)</option>
              <option value="มัธยมศึกษา (Secondary School)">มัธยมศึกษา (Secondary School)</option>
              <option value="ประกาศนียบัตรวิชาชีพ (Vocational Certificate)">ประกาศนียบัตรวิชาชีพ (Vocational Certificate)</option>
              <option value="ประกาศนียบัตรวิชาชีพขั้นสูง (Diploma/High Vocational Certificate)">ประกาศนียบัตรวิชาชีพขั้นสูง (Diploma/High Vocational Certificate)</option>
              <option value="ปริญญาตรี (Bachelor Degrees)">ปริญญาตรี (Bachelor Degrees)</option>
              <option value="ปริญญาโท  (Master Degrees)">ปริญญาโท  (Master Degrees)</option>
              <option value="ปริญญาเอก (Doctoral Degrees)">ปริญญาเอก (Doctoral Degrees)</option>
              <option value="อื่นๆ (Others)">อื่นๆ (Others)</option>
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="member"
            >
              ท่านเป็นสมาชิกสมาคม สมาพันธ์ใด
            </label>
            <input
              type="text"
              name="member"
              // placeholder="Work Description"
              value={formData.jobsPositionInfo.member}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              // required
            />
          </div>

        </div>
      </div>
      {/* buttons */}
      <div className="flex justify-center mt-[2rem] gap-4">
        <button
          className="text-white bg-gradient-to-r from-[#9C3FE4] to-[#C65647] px-10 py-2 rounded-[15px] text-lg sm:text-xl"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className=" text-white bg-gradient-to-r from-[#9C3FE4] to-[#C65647] px-10 py-2 rounded-[15px] text-lg sm:text-xl"
          onClick={validateAndNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default JobsPositionInfo;