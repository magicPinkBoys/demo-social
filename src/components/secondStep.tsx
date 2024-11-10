import { useState } from "react";

export default function secondStep() {
    const [author, setAuthor] = useState('');

    return (<>
    <div className="se-fo">
        <div className="te-la-fo">
        กลุ่มอุตสาหกรรม(Industry)*
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="male">ชาย</option>
                <option value="female">หญืง</option>
                <option value="none">ไม่ระบุ</option>
            </select>
        </div>
        <div className="te-la-fo">
        อาชีพ(Job)*
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="male">ชาย</option>
                <option value="female">หญืง</option>
                <option value="none">ไม่ระบุ</option>
            </select>
        </div>
        <div className="te-la-fo">
        ทักษะและความเชี่ยวชาญ(Skill)*
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="male">ชาย</option>
                <option value="female">หญืง</option>
                <option value="none">ไม่ระบุ</option>
            </select>
        </div>
        <div className="te-la-fo">
        Phone number
            <input type="text" />
        </div>
        <div className="te-la-fo">
        ลักษณะการทำงาน
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="male">ชาย</option>
                <option value="female">หญืง</option>
                <option value="none">ไม่ระบุ</option>
            </select>
        </div>
        <div className="te-la-fo">
        ระดับการศึกษา(Education level)
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="male">ชาย</option>
                <option value="female">หญืง</option>
                <option value="none">ไม่ระบุ</option>
            </select>
        </div>
    </div>
    <div className="se-bu">
            <button>Next</button>
    </div>
    </>);
}