export default function Button({ buttonShouldBeDisabled, onHandleFormSubmit }) {
  return (
    <button
      type="button"
      disabled={buttonShouldBeDisabled}
      className={`max-w-350 flex w-full text-center justify-center py-2 rounded-md text-white ${
        !buttonShouldBeDisabled ? "bg-darkPurple" : "bg-lightPurple"
      }`}
      onClick={onHandleFormSubmit}
    >
      Send Application
    </button>
  );
}
// To fix: Button's width goes smaller when screen does
