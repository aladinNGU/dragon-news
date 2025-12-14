import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-6 items-center bg-base-200 p-3 mt-6">
      <p className="text-base-100 bg-secondary px-3 py-2">latest</p>
      <Marquee pauseOnHover={true} speed={100}>
        <p className="mr-4">Concern is going to die </p>
        <p className="mr-4">Concern is going to die </p>
        <p className="mr-4">Concern is going to die </p>
        <p className="mr-4">Concern is going to die </p>
        <p className="mr-4">Concern is going to die </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
