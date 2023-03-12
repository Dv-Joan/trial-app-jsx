'use client'
import ClansViewer from "./ClansViewer";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import logo from "../../assets/wt-logo.png";
import { useCrudContext } from "../../context/CrudContext"


export function App() {
  const { modoEdicion } = useCrudContext();
  return (
    <div className="h-auto">
      <div className="bg-[#E8E8E8] shadow-lg text-center ml-56 rounded-xl  w-4/6">
        <span className="text-3xl  bg-slate-500 ml-5 text-white pt-4 pb-2 pl-3 pr-3 rounded-lg drop-shadow-lg">
          ✔️ Clans CRUD
        </span>
        <div className="flex justify-center">
          <img
            className=" animate-pulse drop-shadow-lg align-middle"
            src={logo}
            width={250}
            alt="wt-logo"
          />
        </div>
        <div className="flex-row mb-10">
          {modoEdicion ? (
            <div>
              <EditForm />
            </div>
          ) : (
            <div>
              <CreateForm />
            </div>
          )}
        </div>
        <ClansViewer />
        <div />
      </div>
    </div>
  );
}
