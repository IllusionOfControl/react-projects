const Newsletters = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-5xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="">Sign up to your newsletters and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="max-w-[500px] p-3 w-full rounded-md text-black"
            ></input>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 text-black hover:scale-105 duration-300">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our
            <span className="text-[#00df9a] underline ml-1" href="#">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
