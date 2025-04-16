import React, {useState} from "react";
export default function Poem(){
    const [firstName, setFirstName] = useState("")
     const [lastName, setLastName] = useState("");
      const [address, setAddress] = useState("");
      const [favoriteColor, setFavoriteColor] = useState("");
      const [hobby, setHobby] = useState("");
      const [petName, setPetName] = useState("");
      const [isSubmitted, setIsSubmitted] = useState(false);

      const handleSubmit = (e) =>{
        e.preventDefault();
        if (
          !firstName ||
          !lastName ||
          !address ||
          !favoriteColor ||
          !hobby ||
          !petName
        ) { alert("Please fill the form");
            setIsSubmitted(false);
        }
        else{
            console.log("Form submitted");
            setIsSubmitted(true);
            alert("Your form submitted successfully!!!")
        }
      }


      const renderPoem = () =>{
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
          <>
            <p>
              In the land of {address} where the sky is {favoriteColor} , Lived {firstName} 
              {lastName} who loved {hobby} so much. With their pet 
              {petName} always nearby, They laughed and played as the sun went down.
            </p>
          </>
        );
      };
      return (
        <>
          <div>
            <h3>Your Poem:</h3>
            {isSubmitted && <div>{renderPoem()}</div>}
          </div>
          <div className="flex flex-col gap-4 bg-blue-600 w-96">
            <form
              action="submit"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 items-center "
            >
              <input
                type="text"
                value={firstName}
                placeholder="Enter Your First Name"
                className="p-2 border rounded-xl w-96"
                onChange={(event) => setFirstName(event.target.value)}
              />
              <input
                type="text"
                value={lastName}
                placeholder="Enter Your Last Name"
                className="p-2 border rounded-xl w-96"
                onChange={(event) => setLastName(event.target.value)}
              />
              <input
                type="text"
                value={address}
                placeholder="Enter Your Address"
                onChange={(event) => setAddress(event.target.value)}
                className="p-2
              border
              rounded-xl w-96"
              />
              <input
                type="text"
                value={favoriteColor}
                placeholder="Enter Your Favorite Color"
                className="p-2 border rounded-xl w-96"
                onChange={(event) => setFavoriteColor(event.target.value)}
              />
              <input
                type="text"
                value={petName}
                placeholder="Enter Your Pet Name"
                className="p-2 border rounded-xl w-96"
                onChange={(event) => setPetName(event.target.value)}
              />
              <input
                type="text"
                value={hobby}
                placeholder="Enter Your Hobby"
                className="p-2 border rounded-xl w-96"
                onChange={(event) => setHobby(event.target.value)}
              />
              <button type="submit" className="border px-3 bg-blue-200">
                Submit
              </button>
            </form>
          </div>
        </>
      );
}