import { createContext, useState } from "react";
import Navbar from "./navbar";
import HomeUser from "./home-user";
import HomeAdmin from "./home-admin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];
export const customContext = createContext({});
const Home = () => {
  const [employee, setEmployee] = useState(mockEmployees);
  const [sector, setSector] = useState();
  return (
    <customContext.Provider value={{ employee, setEmployee }}>
      <header>
        <Navbar />
      </header>
      <main className="h-screen bg-gray-200">
        <section className="flex justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-center my-10">
              Generation Thailand
              <br/>
              {sector === "user" ? (
                <>Home - User Sector</>
              ) : sector === "admin" ? (
                <>Home - Admin Sector</>
              ) : (
                <>React - Assessment</>
              )}
            </h1>
            <div className="flex justify-between gap-20">
              <button className="btn shadow-xl hover:bg-gray-500" onClick={() => setSector("user")}>
                User Home Sector
              </button>
              <button className="btn shadow-xl hover:bg-gray-500" onClick={() => setSector("admin")}>
                Admin Home Sector
              </button>
            </div>
          </div>
        </section>
        <section>
          {sector === "user" ? (
            <HomeUser />
          ) : sector === "admin" ? (
            <HomeAdmin />
          ) : (
            <></>
          )}
        </section>
      </main>
    </customContext.Provider>
  );
};
export default Home;
