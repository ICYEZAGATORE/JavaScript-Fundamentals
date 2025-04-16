import React, { useState } from "react";

export default function Poem() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [hobby, setHobby] = useState("");
  const [petName, setPetName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !address ||
      !favoriteColor ||
      !hobby ||
      !petName
    ) {
      alert("Please fill the form");
      setIsSubmitted(false);
    } else {
      console.log("Form submitted");
      setIsSubmitted(true);
      alert("Your form submitted successfully!!!");
    }
  };

  const renderPoem = () => {
    if (
      !firstName ||
      !lastName ||
      !address ||
      !favoriteColor ||
      !hobby ||
      !petName
    ) {
      return <em>Fill in the form to reveal your Poem...</em>;
    }
    return (
      <p>
        In the land of <strong>{address}</strong> where the sky is{" "}
        <strong>{favoriteColor}</strong>, lived{" "}
        <strong>
          {firstName} {lastName}
        </strong>{" "}
        who loved <strong>{hobby}</strong> so much. With their pet{" "}
        <strong>{petName}</strong> always nearby, they laughed and played as the
        sun went down.
      </p>
    );
  };

  return (
    <>
      <div className="max-w-xl mx-auto my-10 p-6 rounded-xl shadow-md bg-white dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
          Your Poem:
        </h3>
        {isSubmitted && (
          <div className="text-gray-800 dark:text-gray-100 leading-relaxed">
            {renderPoem()}
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-blue-100 dark:bg-blue-900 p-6 rounded-xl shadow-md w-full max-w-md"
        >
          <input
            type="text"
            value={firstName}
            placeholder="Enter Your First Name"
            className="p-3 border border-blue-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Enter Your Last Name"
            className="p-3 border border-blue-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            value={address}
            placeholder="Enter Your Address"
            className="p-3 border border-blue-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            value={favoriteColor}
            placeholder="Enter Your Favorite Color"
            className="p-3 border border-blue-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setFavoriteColor(e.target.value)}
          />
          <input
            type="text"
            value={petName}
            placeholder="Enter Your Pet Name"
            className="p-3 border border-blue-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPetName(e.target.value)}
          />
          <input
            type="text"
            value={hobby}
            placeholder="Enter Your Hobby"
            className="p-3 border border-blue-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setHobby(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
