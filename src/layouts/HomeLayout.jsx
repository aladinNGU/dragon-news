import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/Header/LatestNews";
import Navbar from "../components/Header/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="max-w-10/12 mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav className="max-w-10/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      {/* <main className="w-11/12 mx-auto my-3 *:border grid grid-cols-12"></main> */}
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 mt-10 gap-10">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
