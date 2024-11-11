import { useState } from "react";

export default function firstStep() {
    const [author, setAuthor] = useState('');

    return (<>
    <div className="se-fo">
        <div className="te-la-fo tex-in">
        ชื่อ(Name)*
            <input type="text" className="in-te"/>
        </div>
        <div className="te-la-fo">
        นามสกุล(Surname)*
            <input type="text" className="in-te"/>
        </div>
        <div className="te-la-fo">
        Email Address *
            <input type="email" placeholder="email@mail.com" className="in-te"/>
        </div>
        <div className="te-la-fo">
        Phone number
            <input type="text" className="in-te"/>
        </div>
        <div className="te-la-fo">
        วันเดือนปีเกิด (Date of Birth)
            <input type="date" className="in-te" />
        </div>
        <div className="te-la-fo">
        เพศ(Gender)
            <select className="in-te" value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="male">ชาย</option>
                <option value="female">หญืง</option>
                <option value="none">ไม่ระบุ</option>
            </select>
        </div>
    </div>
    <div className="se-bu">
            <button className="btn-grad">Back</button>
            <button className="btn-grad">Next</button>
    </div>
    </>);
}