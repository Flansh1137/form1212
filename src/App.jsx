import React, { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSc8ynnAO03-9CLFUeBTweqDTj-mUTkRpWVha0wg9uF-gWWRhA/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
        <div className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-2xl shadow-2xl text-center max-w-md animate-fadeIn">
          <h1 className="text-3xl font-extrabold text-green-600 mb-3">
            ✅ Thank You!
          </h1>
          <p className="text-gray-700 font-medium">
            Your application has been submitted successfully to <br />
            <span className="text-blue-600 font-semibold">
              Flantik Solution
            </span>
          </p>

          <hr className="my-6 border-gray-300" />

          <p className="text-lg font-medium text-gray-800">
            📢 Stay connected for job updates!
          </p>

          <div className="flex flex-col gap-3 mt-5">
            <a
              href="https://wa.link/309k3w"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              💬 Join us on WhatsApp
            </a>

            <a
              href="https://www.instagram.com/flantiksolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
            >
              📸 Follow us on Instagram
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl flex flex-col gap-8 animate-fadeIn"
      >
        {/* Brand Heading */}
        <div className="text-center bg-blue-50 rounded-md p-4 shadow-md">
          <h1 className="text-3xl md:text-3xl font-extrabold text-blue-700 drop-shadow-sm">
            Flantik Solution 🚀
          </h1>
          <p className="mt-3 text-blue-600 font-semibold text-lg">
            “Empowering Students with Opportunities,<br /> Apply Now and Start
            Your Career Journey!”
          </p>
          <p className="mt-2 text-gray-500">
            Please fill the application form below carefully.
          </p>
          <div className="w-84 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Full Name", name: "entry.548692708", type: "text" },
            { label: "Phone Number", name: "entry.1575535150", type: "tel" },
            { label: "Email Address", name: "entry.1003072104", type: "email" },
            { label: "Current Location (City, State)", name: "entry.1340577979", type: "text" },
            { label: "Date of Birth / Age", name: "entry.482277223", type: "text" },
            { label: "Post Graduation Degree", name: "entry.1071434855", type: "text" },
            { label: "Under Graduation Degree", name: "entry.864086888", type: "text" },
            { label: "12 / ITI / Diploma", name: "entry.1012953064", type: "text" },
            { label: "Current Employment Status", name: "entry.838127760", type: "text" },
            { label: "Experience (if any)", name: "entry.1730409731", type: "text" },
            { label: "Tech / Non Tech / Both", name: "entry.807434732", type: "text" },
            { label: "Upload Resume Link", name: "entry.633903489", type: "url" },
          ].map((field, idx) => (
            <div className="flex flex-col" key={idx}>
              <label className="text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                required={idx < 3}
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none hover:border-blue-400 transition"
              />
              {field.name === "entry.1575535150" && (
                <small className="text-gray-500 text-xs">
                  Enter 10 digit number only
                </small>
              )}
              {field.name === "entry.633903489" && (
                <small className="text-gray-500 text-xs">
                  Enter Link only
                </small>
              )}
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-10 rounded-xl text-lg font-semibold hover:opacity-90 shadow-lg transition"
          >
            🚀 Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
