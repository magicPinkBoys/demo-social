import { useState } from "react";
import useFormSchema from "../pages/form-data-for-graph";

import { industries } from "../data/graphData";

function ReviewSubmit() {
  const { submitForm, prevStep, formData, setCon1, setCon2 , setCon3, con1 , con2, con3 } = useFormSchema();

  return (
    <div>
      {/* <h2 className="text-xl font-semibold">Review your Information</h2> */}

      <div>
        {/* <h3 className="text-lg font-semibold">Personal Info</h3> */}
        <div className="text-white grid gap-6 mb-6 mt-2 md:grid-cols-2 p-2 ">
          <p>
            <span className="font-semibold">ชื่อ(Name)*: </span>
            {formData.personalInfo.firstName}
          </p>
          <p>
            <span className="font-semibold">นามสกุล(Surname)*: </span>
            {formData.personalInfo.lastName}
          </p>
          <p>
            <span className="font-semibold">Email Address *: </span>
            {formData.personalInfo.email}
          </p>
          <p>
            <span className="font-semibold">Phone number: </span>
            {formData.personalInfo.phone}
          </p>
          <p>
            <span className="font-semibold">วันเดือนปีเกิด 
            (Date of Birth): </span>
            {formData.personalInfo.dateOfBirth}
          </p>
          <p>
            <span className="font-semibold">เพศ: </span>
            {formData.personalInfo.gender}
          </p>
          

        </div>
        <div className="text-white grid gap-6 mb-6 mt-2 md:grid-cols-2  p-2  ">
          <p>
            <span className="font-semibold">กลุ่มอุตสาหกรรม(Industry)*: </span>
            {formData.jobsPositionInfo.industry}
          </p>
          <p>
            <span className="font-semibold">อาชีพ(Job)*: </span>
            
            {formData.jobsPositionInfo.job}
          </p>
          <p>
            <span className="font-semibold">ทักษะและความเชี่ยวชาญ
            (Skill)*: </span>
            {formData.jobsPositionInfo.skill}
          </p>
          <p>
            <span className="font-semibold">ลักษณะการทำงาน
            (Type of work): </span>
            {formData.jobsPositionInfo.workDescription}
          </p>
          <p>
            <span className="font-semibold">ระยะเวลาในการทำงาน: </span>
            {formData.jobsPositionInfo.yearOfWork}
          </p>
          <p>
            <span className="font-semibold">รายได้ต่อเดือน(Salary): </span>
            {formData.jobsPositionInfo.salary}
          </p>
          <p>
            <span className="font-semibold">ระดับการศึกษา
            (Education level): </span>
            {formData.jobsPositionInfo.educationLevel}
          </p>
          <p>
            <span className="font-semibold">ท่านเป็นสมาชิกสมาคม สมาพันธ์(): </span>
            {formData.jobsPositionInfo.member}
          </p>

        </div>
      </div>

      <div className="check-home flex flex-col items-center text-white">
        <div>
        <input type="checkbox" id="con1" name="con1" checked={con1} onChange={e => setCon1()} />
        <label className="tx-color" > ยินดีให้เราติดต่อกับเพื่อร่วมกันพัฒนาฐานข้อมูลให้ดียิ่งขึ้น</label><br></br>
        </div>
        <div>
        <input type="checkbox" id="con2" name="con2"  checked={con2} onChange={e => setCon2()}/>
        <label className="tx-color" > การให้ความยินยอมข้อมูลส่วนบุคคล(Term&Conditions)</label><br></br>
        </div>
        <div>
        <input type="checkbox" id="con3" name="con3"  checked={con3} onChange={e => setCon3()}/>
        <label className="tx-color" > ฉันยอมรับ เงื่อนไขการใช้เว็บไซต์ และ นโยบายความเป็นส่วนตัว</label>
        </div>
            
           
            
        </div>


      <div className="flex justify-center gap-4 mt-5">
        <button
          className="text-white bg-gradient-to-r from-[#9C3FE4] to-[#C65647] px-10 py-2 rounded-[15px] text-lg sm:text-xl"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          className="text-white bg-gradient-to-r from-[#9C3FE4] to-[#C65647] px-10 py-2 rounded-[15px] text-lg sm:text-xl"
          onClick={submitForm}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReviewSubmit;