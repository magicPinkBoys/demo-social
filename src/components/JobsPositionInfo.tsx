import useFormSchema from "../pages/form-data-for-graph";
import { jobsPositionInfoSchema } from "./validationSchema";
import { useState } from "react";

function JobsPositionInfo() {
  const { prevStep,nextStep, formData, setJobsPositionInfo } = useFormSchema();
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
              className="text-lg font-medium text-white"
              htmlFor="industry"
            >
              กลุ่มอุตสาหกรรมสร้างสรรค์(Industry)*
            </label>
              <select name="industry" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" onChange={e=> setJobsPositionInfo({ [e.target.name]: e.target.value })} value={formData.jobsPositionInfo.industry??""} >
                <option value=""></option>
                <option value="music">ดนตรี (Music)</option>
                <option value="performing-arts">ศิลปะการแสดง (Performing Arts)</option>
                <option value="new-media-art">สื่อผสม (New media art)</option>
                <option value="film">ภาพยนตร์และวีดิทัศน์ (Film)</option>
                <option value="digital-publishing">การพิมพ์ดิจิตัล (Digital Publishing)</option>
                <option value="game-and-animation">เกมและแอนิเมชั่น (Game & Animation)</option>
                <option value="advertising">การโฆษณา (Advertising)</option>
                <option value="design">การออกแบบ (Design)</option>
                <option value="architecture">สถาปัตยกรรม (Architecture)</option>
                <option value="others">อื่น(Others)</option>
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="job"
            >
              อาชีพ(Job)*
            </label>
            <select name="job" onChange={e => setJobsPositionInfo({[e.target.name]: e.target.value})} value={formData.jobsPositionInfo.job ??""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
                <option value=""></option>
              <option value="music">ดนตรี (Music)</option>
                <option value="performing-arts">ศิลปะการแสดง (Performing Arts)</option>
                <option value="new-media-art">สื่อผสม (New media art)</option>
                <option value="film">ภาพยนตร์และวีดิทัศน์ (Film)</option>
                <option value="digital-publishing">การพิมพ์ดิจิตัล (Digital Publishing)</option>
                <option value="game-and-animation">เกมและแอนิเมชั่น (Game & Animation)</option>
                <option value="advertising">การโฆษณา (Advertising)</option>
                <option value="design">การออกแบบ (Design)</option>
                <option value="architecture">สถาปัตยกรรม (Architecture)</option>
                <option value="others">อื่น(Others)</option>
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="skill"
            >
              ความเชี่ยวชาญ(​Technical Skill)*
            </label>
            <select name="skill" onChange={e => setJobsPositionInfo({[e.target.name]: e.target.value})} value={formData.jobsPositionInfo.skill??""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
                <option value=""></option>
              <option value="music">ดนตรี (Music)</option>
                <option value="performing-arts">ศิลปะการแสดง (Performing Arts)</option>
                <option value="new-media-art">สื่อผสม (New media art)</option>
                <option value="film">ภาพยนตร์และวีดิทัศน์ (Film)</option>
                <option value="digital-publishing">การพิมพ์ดิจิตัล (Digital Publishing)</option>
                <option value="game-and-animation">เกมและแอนิเมชั่น (Game & Animation)</option>
                <option value="advertising">การโฆษณา (Advertising)</option>
                <option value="design">การออกแบบ (Design)</option>
                <option value="architecture">สถาปัตยกรรม (Architecture)</option>
                <option value="others">อื่น(Others)</option>
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
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="yearOfWork"
            >
              ระยะเวลาในการทำงาน
            </label>
            <select name="yearOfWork" onChange={e => setJobsPositionInfo({[e.target.name]: e.target.value})} value={formData.jobsPositionInfo.yearOfWork??""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
                <option value=""></option>
               <option value="year0">ต่ำกว่า 6 เดือน</option>
                <option value="year1">6 เดือน - 1 ปี</option>
                <option value="year2">1 - 2 ปี</option>
                <option value="year3">2 - 5 ปี</option>
                <option value="year4">5 - 7 ปี</option>
                <option value="year5">7 - 10 ปี</option>
                <option value="year6">มากกว่า 10 ปี</option> 
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-white"
              htmlFor="salary"
            >
              รายได้ต่อเดือน
            </label>
            <select name="salary" onChange={e => setJobsPositionInfo({[e.target.name]: e.target.value})} value={formData.jobsPositionInfo.salary??""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
                <option value=""></option>
                <option value="salary1">ต่ำกว่า 15,000 บาท</option>
                <option value="salary2">15,000  - 30,000 บาท</option>
                <option value="salary3">30,000 - 50,000  บาท</option>
                <option value="salary4">50,000 - 75,000  บาท</option>
                <option value="salary5">75,000 - 100,000 บาท</option>
                <option value="salary6">มากกว่า 100,000  บาท</option>
                
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
              rounded-lg block w-full p-2.5" onChange={e => setJobsPositionInfo({[e.target.name]: e.target.value})} value={formData.jobsPositionInfo.educationLevel??""} >
                <option value=""></option>
                <option value="vocational-certificate">ประกาศนียบัตรวิชาชีพ (Vocational Certificate)</option>
                <option value="diploma-high-vocational-certificate">ประกาศนียบัตรวิชาชีพขั้นสูง (Diploma/High Vocational Certificate)</option>
                <option value="bachelor-degrees">ปริญญาตรี (Bachelor Degrees)</option>
                <option value="master-degrees">ปริญญาโท  (Master Degrees)</option>
                <option value="doctoral-degrees">ปริญญาเอก (Doctoral Degrees)</option>
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
              required
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