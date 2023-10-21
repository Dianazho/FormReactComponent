function Info({ onBackToInitialState }) {
  return (
    <div className="h-screen flex flex-col gap-1 justify-center items-center bg-background text-text p-10">
      <h1 className="leading-8 text-xl mb-4 flex text-center">
        Great news! Your form has been sent successfully 🎉
      </h1>
      <button
        onClick={onBackToInitialState}
        className="max-w-350 flex px-4 py-2 text-center justify-center rounded-md text-white bg-darkPurple hover:bg-hoverPurple"
      >
        Back to the form
      </button>
    </div>
  );
}

export default Info;
