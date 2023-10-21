//React icons
import { AiFillExclamationCircle } from "react-icons/ai";

export default function MainInfo({
  onSetFirstName,
  onSetLastName,
  validEmail,
  onSetValidEmail,
  onSetEmail,
}) {
  function handleAddFirstName(e) {
    const firstName = e.target.value.toLowerCase();
    onSetFirstName(firstName);
  }
  function handleAddLastName(e) {
    const lastName = e.target.value.toLowerCase();
    onSetLastName(lastName);
  }

  function isValidEmail(e) {
    return /\S+@\S+\.\S+/.test(e);
  }

  const handleCheckAndAddEmail = (e) => {
    if (!isValidEmail(e) && e !== "") {
      onSetValidEmail(false);
    } else {
      onSetValidEmail(true);
    }

    onSetEmail(e);
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-3 w-350">Personal info</h1>
      <div className="flex flex-col mb-2">
        <label htmlFor="firstName" className="mb-2 w-350">
          First Name
        </label>
        <input
          className="w-70 h-70 bg-white rounded-md p-1 border-2 border-lightPurple focus:border-darkPurple focus:outline-none focus:ring-0"
          id="firstName"
          // value={lastName}
          onChange={(e) => handleAddFirstName(e)}
        ></input>
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="lastName" className="mb-2 w-350">
          Last Name
        </label>
        <input
          className="w-70 h-70 bg-white rounded-md p-1 border-2 border-lightPurple focus:border-darkPurple focus:outline-none focus:ring-0"
          id="lastName"
          // value={lastName}
          onChange={(e) => handleAddLastName(e)}
        ></input>
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="email" className="mb-2 w-350">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className={`w-70 h-70 bg-white rounded-md p-1 border-2 border-lightPurple focus:border-darkPurple focus:outline-none focus:ring-0 ${
            validEmail ? "" : "border-darkRed focus:border-darkRed bg-lightRed"
          }`}
          // value={email}
          onChange={(e) => handleCheckAndAddEmail(e.target.value)}
        ></input>
        {/* This should be visible only when email is incorrect */}
        {validEmail ? (
          <></>
        ) : (
          <div className="flex mt-2 gap-2 w-64">
            <AiFillExclamationCircle size="1rem" color="#ec4444" />
            <div className="flex flex-col text-xs">
              <span>Please use correct formating</span>
              <span>Example: address@email.com</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
