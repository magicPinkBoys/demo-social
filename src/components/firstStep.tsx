import { useState } from "react";

export default function firstStep() {
    const [author, setAuthor] = useState('');

    return (<>
    <div className="se-fo">
        <div className="te-la-fo">
        ชื่อ(Name)*
            <input type="text" />
        </div>
        <div className="te-la-fo">
        นามสกุล(Surname)*
            <input type="text" />
        </div>
        <div className="te-la-fo">
        Email Address *
            <input type="email" placeholder="email@mail.com" />
        </div>
        <div className="te-la-fo">
        Phone number
            <input type="text" />
        </div>
        <div className="te-la-fo">
        วันเดือนปีเกิด (Date of Birth)
            <input type="date" />
        </div>
        <div className="te-la-fo">
        เพศ(Gender)
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