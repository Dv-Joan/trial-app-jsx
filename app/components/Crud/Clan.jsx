import { useCrudContext } from "../../context/CrudContext";

function Clan({ clan }) {
  const { deleteClan, editClan } = useCrudContext();
  const { name, mode, id } = clan;
  const spanBgColor = {
    color: mode === "Loberos" ? "bg-gray-700" : "bg-blue-500",
  };
  return (
    <tr className="hover:bg-neutral-400">
      <td className="font-TiltNeon font-bold pr-16 pl-7">{name}</td>
      <td className="lowercase text-sm">
        <div
          className={`${spanBgColor} w-auto text-center text-gray-700 rounded-full py-0.5 px-2`}
        >
          {mode}
        </div>
      </td>
      <td className="pl-16 pr-7">
        <button
          onClick={() => editClan(clan)}
          className="m-2 text-sm px-5 rounded-lg py-0.5 border-2 bg-slate-700 text-white border-cyan-400 focus:outline-none hover:ring-2 hover:ring-cyan-600 active:bg-cyan-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteClan(id)}
          className="m-2 text-sm px-5 rounded-lg py-0.5 border-2 bg-slate-700 text-white border-cyan-400 focus:outline-none hover:ring-2 hover:ring-cyan-600 active:bg-cyan-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Clan;
