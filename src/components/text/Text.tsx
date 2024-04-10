import Separator from "../seperator/Separator"

const Text = () => {
  return (
    <div>
      <Separator />
      <div className="text-[1rem] lg:text-[4rem] text-gray-500 pt-10 pb-10 pl-6 pr-6 font-bold">
        <h1>
          <span className="text-black">CONCEPT</span> HOUSE DEVELOPMENT
        </h1>
        <span>
          HOUSE DEVELOPMENT <b className="text-black">IDEA</b>
        </span>
      </div>
    </div>
  );
}

export default Text