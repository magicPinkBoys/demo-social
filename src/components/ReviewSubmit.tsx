import useFormSchema from "../pages/form-data-for-graph";

function ReviewSubmit() {
  const { submitForm, prevStep, formData } = useFormSchema();

  return (
    <div>
      <h2 className="text-xl font-semibold">Review your Information</h2>

      <div>
        <h3 className="text-lg font-semibold">Personal Info</h3>
        <div className="grid gap-6 mb-6 mt-2 md:grid-cols-2 border p-2 border-gray-300 rounded-lg">
          <p>
            <span className="font-semibold">First Name:</span>
            {formData.personalInfo.firstName}
          </p>
          <p>
            <span className="font-semibold">Last Name:</span>
            {formData.personalInfo.lastName}
          </p>
          <p>
            <span className="font-semibold">Email:</span>
            {formData.personalInfo.email}
          </p>
          <p>
            <span className="font-semibold">Phone Number:</span>
            {formData.personalInfo.phone}
          </p>

        </div>
      </div>


      <div className="flex justify-between mt-5">
        <button
          className="text--blue-500 text-lg sm:text-xl"
          onClick={prevStep}
        >
          {"\u2190"} Previous
        </button>
        <button
          className="text-white bg-blue-500 px-3 py-1 rounded-lg text-lg sm:text-xl"
          onClick={submitForm}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReviewSubmit;