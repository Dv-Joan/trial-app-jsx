import Clan from "./Clan";
import { useCrudContext } from "../../context/CrudContext";

function ClansViewer() {
  const { clans } = useCrudContext();
  return (
    <div className="flex justify-center">
      <table className=" overflow-auto rounded-xl mb-16 border-slate-300 text-left drop-shadow-xl bg-neutral-200 ">
        <thead className="uppercase text-sm ">
          <tr>
            <th scope="col" className=" py-5 pl-10">
              Clan
            </th>
            <th scope="col" className="py-5 pl-3">
              Mode
            </th>
            <th scope="col" className=" text-center py-5 pl-12">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-neutral-300">
          {clans.length > 0 ? (
            clans.map((clan) => (
              <Clan
                key={clan.id}
                clan={clan}
              />
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-28 ">No hay Clanes Seleccionados Aún</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ClansViewer;
