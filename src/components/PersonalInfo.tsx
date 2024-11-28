import useFormSchema from "../pages/form-data-for-graph";
import { personalInfoSchema } from "./validationSchema";
import { useState } from "react";
// import { Country, State, City } from "country-state-city";

function PersonalInfo() {
  const { prevStep, nextStep, formData, setPersonalInfo } = useFormSchema();
  const [error, setError] = useState<string>("");

  // const [countries] = useState(Country.getAllCountries());
  // const [states, setStates] = useState([]);
  // const [cities, setCities] = useState([]);



  // const [selectedCountry, setSelectedCountry] = useState<Array<never>>([]);
  // const [selectedState, setSelectedState] = useState(null);
  // const [selectedCities, setSelectedCities] = useState(null);

  // const handleCountryChange = (country) => {
  //   setSelectedCountry(country);
  //   setStates(State.getStatesOfCountry(country.isoCode));
  //   setCities([]);
  // };

  // const handleStateChange = (state) => {
  //   setSelectedState(state);
  //   setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
  //   // setCities([]);
  // };



  // const handleCitiesChange = (cities) => {
  //   setSelectedCities(cities);
  //   // setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
  //   // setCities([]);
  // };

  // district

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setPersonalInfo({ [e.target.name]: e.target.value });
  };

  // const handleChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
  //   setError("");
  //   setPersonalInfo({ [e.target.name]: e.target.value });
  // };

  const validateAndNext = () => {
    try {
      personalInfoSchema.parse(formData.personalInfo);
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
        <div className="grid gap-[2rem] mb-2 md:grid-cols-2">
          <div>
            <label
              className="text-lg font-medium text-[#A4A4A4]"
              htmlFor="firstName"
            >
              ชื่อ(Name)*
            </label>
            <input
              type="text"
              name="firstName"
              
              value={formData.personalInfo.firstName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5 mt-1"
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-[#A4A4A4]"
              htmlFor="lastName"
            >
              นามสกุล(Surname)*
            </label>
            <input
              type="text"
              name="lastName"
              
              value={formData.personalInfo.lastName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-[#A4A4A4]"
              htmlFor="email"
            >
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              placeholder="yourmail@example.com"
              value={formData.personalInfo.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-[#A4A4A4]"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="0800000000"
              value={formData.personalInfo.phone}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-[#A4A4A4]"
              htmlFor="dateOfBirth"
            >
              วันเดือนปีเกิด (Date of Birth)
            </label>
            <input
              type="date"
              name="dateOfBirth"
            //  id="birthday"
              value={formData.personalInfo.dateOfBirth} 
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5"
              // required
            />
          </div>
          <div>
            <label
              className="text-lg font-medium text-[#A4A4A4]"
              htmlFor="gender"
            >
              เพศ(Gender)
            </label>
            <select name="gender" onChange={e => setPersonalInfo({[e.target.name]: e.target.value})} value={formData.personalInfo.gender ??""} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
                <option value=""></option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญืง</option>
                <option value="ไม่ระบุ">ไม่ระบุ</option>
            </select>
          </div>

          {/* <div>
            <label
              className="text-lg font-medium text-[#A4A4A4]"
              htmlFor="birthday"
            >
              ประเทศ
            </label>
            <select onChange={(e) => handleCountryChange(countries.find((c) => c.isoCode === e.target.value),)} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
                <option value="">Select Country</option>
                {countries.map((Country) => (
                  <option key={Country.isoCode} value={Country.isoCode}>{Country.name}</option>
                ))}
                
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-[#A4A4A4]"
              htmlFor="birthday"
            >
              จังหวัด
            </label>
            <select disabled={!selectedCountry} 
            onChange={(e) => handleStateChange(states.find((s) => s.name === e.target.value),)} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
               <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                ))}
                
            </select>
          </div>
          <div>
            <label
              className="text-lg font-medium text-[#A4A4A4]"
              htmlFor="birthday"
            >
              เขต
            </label>
            <select disabled={!selectedState} 
            onChange={e => setPersonalInfo({ [e.target.name]: e.target.value })}  
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
              rounded-lg block w-full p-2.5" >
                <option value="">Selcet City</option>
                {cities.map((city) => (
                  <option key={city.isoCode} value={city.isoCode}>{city.name}</option>
                ))}
            </select>
          </div> */}


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

export default PersonalInfo;