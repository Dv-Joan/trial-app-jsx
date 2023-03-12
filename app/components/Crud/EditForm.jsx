import { useForm } from "react-hook-form";
import { useCrudContext } from "../../context/CrudContext";

function EditForm() {
  const { updateClan, currentClan } = useCrudContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: currentClan,
  });

  const setValues = (currentClan) => {
    setValue("name", currentClan.name);
    setValue("mode", currentClan.mode);
  };

  const onSubmit = (data) => {
    setValues(data);
    updateClan(currentClan.id, data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
        <div className=" flex flex-col mt-1">
          <div className="">
            <label className=" font-TiltPrism font-semibold drop-shadow-lg text-gray-600 ">
              Name :
            </label>
            <input
              className="mx-2 mb-1 py-1.5 px-4 rounded-lg border-[1px]  border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-600 font-TiltNeon"
              type="text"
              name="name"
              placeholder="Ej: PiscoSour™"
              {...register("name", {
                required: {
                  value: true,
                  message: "Callsign",
                },
              })}
            />
          </div>
          <span className="text-red-500 text-sm text-left pl-16">
            {errors?.name?.message}
          </span>
        </div>
        <div className=" flex flex-col mt-1 ml-5">
          <div className="">
            <label className="text-gray-600 font-TiltPrism font-semibold drop-shadow-lg ">
              Mode :
            </label>
            <input
              className="mx-2 mb-1 py-1.5 px-4 rounded-lg border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-gray-600 font-TiltNeon"
              type="text"
              name="mode"
              placeholder="Loberos"
              {...register("mode", {
                required: {
                  value: true,
                  message: "Modalidad",
                },
              })}
            />
          </div>
          <span className="text-red-500 text-sm font-thin text-left pl-16">
            {errors?.mode?.message}
          </span>
        </div>
        <button className="h-10 mt-[3px] py-1 px-5 ml-10 rounded-xl border-2 bg-slate-700 text-white border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditForm;
