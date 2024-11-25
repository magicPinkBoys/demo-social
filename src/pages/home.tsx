import "../scss/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-app">
      <div className="form-body">
      <div className="form-to-home">
        <p>
          เอสิก แลป ได้ดำเนินการตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ.
          2562 ซึ่งมีผลบังคับใช้เมื่อวันที่ 1 มิถุนายน 2565
          สำหรับการเก็บรวบรวมใช้ประมวลผลและเปิดเผยข้อมูลส่วนบุคคลโดยให้ความสำคัญอย่างยิ่งต่อการคุ้มครองข้อมูลส่วนบุคคลและเพื่อให้เจ้าของข้อมูลส่วนบุคคลเชื่อมั่นว่า
          เอสิกแลป และ บริษัท เอสิก พลัส จำกัด จะดูแลรักษาข้อมูลส่วนบุคคล และ
          จัดให้มีมาตรการรักษาความมั่นคงปลอดภัยที่เหมาะสมจึงขอใช้ข้อมูลส่วนบุคคลที่ท่านลงทะเบียนไว้เพื่อวัตถุประสงค์ดังต่อไปนี้
        </p>
        <div className="list-to-point">
          <li>
            เพื่อจัดทำฐานข้อมูลและการแสดงผลข้อมูลด้วยแผนภาพ (Data Visualization)
            ประกอบด้วย กลุ่มอุตสาหกรรมสร้างสรรค์ อาชีพ และ ทักษะความเชี่ยวชาญ
            โดยไม่เปิดเผยข้อมูลส่วนบุคคลของท่าน อาทิเช่น ชื่อ นามสกุล อีเมล และ
            เบอร์โทรศัพท์
          </li>
          <li>
            เพื่อนำเสนอนโยบายให้แก่ภาครัฐผ่านการขับเคลื่อนด้วยข้อมูลเพื่อเป็นแนวทางในการสนับสนุนกลุ่มคนที่เกี่ยวข้องกับงาน
            digital และ creative ให้ตรงเป้าหมาย
          </li>
        </div>
        <p>
          ทั้งนี้หากท่านมีข้อสงสัยเกี่ยวกับการเก็บรวบรวมใช้
          หรือเปิดเผยข้อมูลส่วนบุคคล ระยะเวลาที่จะเก็บข้อมูลส่วนบุคคลของท่าน
          สิทธิ์ในข้อมูลส่วนบุคคล
          ช่องทางและวิธีการใช้สิทธิ์ของท่านในฐานะเจ้าของข้อมูลส่วนบุคคลรวมถึงสิทธิ์ในการขอถอนความยินยอมของท่านสามารถดูข้อมูลเพิ่มเติมได้ที่นโยบายความเป็นส่วนตัว
          https://www.esiclab.tech/privacy-policy
          หรือติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลได้ที่ info@esicplus.co.th
        </p>
        <p>
          โดยทาง เอสิกแลป และ บริษัท เอสิก พลัส จำกัด
          จะใช้ข้อมูลส่วนบุคคลของท่านสำหรับติดต่อประสานงาน
          ดำเนินการจัดทำระบบฐานข้อมูลรวมถึงการประชาสัมพันธ์ฐานข้อมูลนี้เท่านั้น
        </p>
      </div>
      <div className="check-home flex justify-center w-[80vh]">
        <div className="checkbox-wrapper-13">
          <input
            type="checkbox"
            id="c1-13"
            name="con"
            className="accent-[#C5564D] "
          />
          <label className="tx-color">
            {" "}
            ข้าพเจ้ายินยอมให้เอสิกแลปเก็บรวบรวม ใช้
            และเปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าสู่สาธารณะ ได้แก่
            กลุ่มอุตสาหกรรมสร้างสรรค์ อาชีพ ละ ทักษะ ความเชี่ยวชาญ
            กลุ่มอุตสาหกรรมสร้างสรรค์
            พื่อนําใปใช้ในการจัดทําระบบฐานข้อมูลและการแสดงผลข้อมูลด้วยภาพ
          </label>
        </div>
      </div>
      <div>
        <button className=" text-white mt-4 bg-gradient-to-r from-[#9C3FE4] to-[#C65647] px-10 py-2 rounded-[15px] text-lg sm:text-xl">
          <Link to="/form">Next</Link>
        </button>
      </div>
    </div>
    </div>
  );
}
