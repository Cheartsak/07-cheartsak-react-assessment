import { useContext } from "react";
import { customContext } from "./Home";

const HomeUser = () => {
  const { employee } = useContext(customContext);
  return (
    <div className="flex flex-col justify-center items-center mt-6 px-2">
      <table >
        <thead>
          <tr>
            <th className="px-10 border border-black">Name</th>
            <th className="px-10 border border-black">Last Name</th>
            <th className="px-10 border border-black">Position</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((user) => {
            const { id, name, lastname, position } = user;
            return (
              <tr key={id}>
                <td className="px-10 border border-black">{name}</td>
                <td className="px-10 border border-black">{lastname}</td>
                <td className="px-10 border border-black">{position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default HomeUser;
