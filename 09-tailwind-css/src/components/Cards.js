import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt=""
            className="w-20 mx-auto"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single user</h2>
          <p className="text-center text-4xl font-bold">Free</p>
          <div className="text-center font-medium pt-8">
            <p className="py-2 border-y mx-8">500 GB storage</p>
            <p className="py-2 border-b mx-8">1 granted user</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto mt-4 px-6 py-3 text-black">
            Try now!
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            alt=""
            className="w-20 mx-auto"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double user</h2>
          <p className="text-center text-4xl font-bold">19$/y</p>
          <div className="text-center font-medium pt-8">
            <p className="py-2 border-y mx-8">3 TB storage</p>
            <p className="py-2 border-b mx-8">2 granted user</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto mt-4 px-6 py-3 text-black">
            Buy now!
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt=""
            className="w-20 mx-auto"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple user</h2>
          <p className="text-center text-4xl font-bold">59$/y</p>
          <div className="text-center font-medium pt-8">
            <p className="py-2 border-y mx-8">Unlimited storage</p>
            <p className="py-2 border-b mx-8">3 granted user</p>
            <p className="py-2 border-b mx-8">Send up to 100 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto mt-4 px-6 py-3 text-black">
            Buy now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
