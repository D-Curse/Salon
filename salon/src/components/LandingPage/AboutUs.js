import Button from "../ui/Button";

const AboutUs = () => {
  return (
    <>
      <div id="about" className="flex mx-4 my-2 py-10 justify-evenly text-gray-500">
        <div className="w-[40%] flex flex-col justify-center pl-32">
          <div className="font-custom1 text-5xl font-semibold">
            Indulge in the 
            <div>
            Extraordinary
            </div>
          </div>
          <div className="font-custom2 py-12 w-[90%] text-lg">
          JUICE is one of India’s trendiest salon chains with 40+ branches across India, with a widespread presence across metros and mini-metros catering to the beauty needs of ardent fashion followers, trendsetters and celebrities. Being in existence for almost two decades, JUICE has become a leader and benchmark in the hair, beauty and nail care industry
          </div>
          <Button label="DISCOVER NOW"/>
        </div>
        <div className="">
          <div className="pr-32">
            <img src="/img/about.png" className="h-[80vh]" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs