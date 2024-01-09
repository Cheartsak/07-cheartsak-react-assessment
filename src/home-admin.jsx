import { useContext, useState } from "react";
import { customContext } from "./Home";

const HomeAdmin = () => {
  const { employee, setEmployee } = useContext(customContext);
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [position, setPosition] = useState();
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="mt-6 mb-12">
        <label htmlFor="createuser" className="font-bold">
          Create User Here
        </label>
        <div className="flex flex-row gap-6 mt-2">
          <input
            type="text"
            name="createuser"
            id="Name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="placeholder:italic pl-4"
            value={name}
            required
          />
          <input
            type="text"
            name="createuser"
            id="Last name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            className="placeholder:italic pl-4"
            value={lastname}
            required
          />
          <input
            type="text"
            name="createuser"
            id="Position"
            placeholder="Position"
            onChange={(e) => setPosition(e.target.value)}
            className="placeholder:italic pl-4"
            value={position}
            required
          />
          <button
            type="submit"
            className="btn-save bg-indigo-600 text-white hover:bg-indigo-800"
            onClick={() => {
              if (name && lastname && position) {
                const id = Math.floor(Math.random() * 10000) + 3;
                setEmployee((prev) => [
                  ...prev,
                  { id, name, lastname, position },
                ]);
                setName("");
                setLastName("");
                setPosition("");
              }
            }}
          >
            Save
          </button>
        </div>
      </form>

      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-10 border border-black">Name</th>
            <th className="px-10 border border-black">Last Name</th>
            <th className="px-10 border border-black">Position</th>
            <th className="px-10 border border-black">Action</th>
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
                <td
                  className="text-red-600 font-bold link-delete px-10 border border-black"
                  onClick={() => {
                    setEmployee(() =>
                      employee.filter((user) => user.id !== id)
                    );
                  }}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default HomeAdmin;
