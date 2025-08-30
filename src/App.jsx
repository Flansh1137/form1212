import React, { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Send data to Google Form silently
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSc8ynnAO03-9CLFUeBTweqDTj-mUTkRpWVha0wg9uF-gWWRhA/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    setSubmitted(true); // show success screen
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
          <h1 className="text-2xl font-bold text-green-600">✅ Thank You!</h1>
          <p className="text-gray-600 mt-2">
            Your application has been submitted successfully to Flantik Solution.
          </p>

          <hr className="my-4" />

          <p className="text-lg font-medium text-gray-700">
            📢 Follow for more job updates!
          </p>

          {/* WhatsApp Link */}
          <a
            href="https://wa.link/309k3w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            💬 Join us on WhatsApp
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/flantiksolutions.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            📸 Follow us on Instagram
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg flex flex-col gap-5"
      >
        {/* Brand Heading */}
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-2">
          Flantik Solution 🚀
        </h1>
        <h3 className="text-center font-bold text-blue-500">“Empowering Students with Opportunities <br /> Apply Now and Start Your Career Journey!”</h3>
        <p className="text-center text-gray-500 mb-6">
          Please fill the application form below carefully.
        </p>

        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Full Name</label>
          <input type="text" name="entry.548692708" required className="border p-2 rounded" />
        </div>

        {/* Phone Number (10 digits validation) */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="entry.1575535150"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            className="border p-2 rounded"
          />
          <small className="text-gray-500 text-xs">Enter 10 digit number only</small>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email Address</label>
          <input type="email" name="entry.1003072104" required className="border p-2 rounded" />
        </div>

        {/* Other Inputs (same as before) */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Current Location (City, State)</label>
          <input type="text" name="entry.1340577979" className="border p-2 rounded" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Date of Birth / Age</label>
          <input type="text" name="entry.482277223" className="border p-2 rounded" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Post Graduation Degree</label>
          <input type="text" name="entry.1071434855" className="border p-2 rounded" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Under Graduation Degree</label>
          <input type="text" name="entry.864086888" className="border p-2 rounded" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">12 / ITI / Diploma</label>
          <input type="text" name="entry.1012953064" className="border p-2 rounded" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Current Employment Status</label>
          <input type="text" name="entry.838127760" className="border p-2 rounded" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Experience (if any)</label>
          <input type="text" name="entry.1730409731" className="border p-2 rounded" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Tech / Non Tech / Both</label>
          <input type="text" name="entry.807434732" className="border p-2 rounded" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Upload Resume Link</label>
          <input type="url" name="entry.633903489" className="border p-2 rounded" />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default App;
