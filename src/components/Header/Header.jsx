import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-6">
      <img className="w-96" src={logo} alt="" />
      <p className="font-bold text-base-400">
        Journalism without fear and favour
      </p>
      <p className="text-2xl text-semibold text-accent">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
