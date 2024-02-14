import { FilePlusIcon, IdCardIcon, MagnifyingGlassIcon, PaperPlaneIcon } from "@radix-ui/react-icons";

interface FormProps {
    formStep: number,
    selectFormStep: any,
    watch: any
}

export function Steps({ formStep, selectFormStep, watch }: FormProps) {
  return (
    <div className="flex-1 p-2 max-w-[250px] w-full ">
      <ul>
        <li
          className={`mb-3 cursor-pointer p-2 rounded-md w-full hover:bg-blue-500 transition-all flex items-center
      ${formStep === 0 ? "bg-blue-500 " : ""}`}
          onClick={() => selectFormStep(0)}
        >
          <MagnifyingGlassIcon className="mr-3" width="20" height="20" />{" "}
          Getting Start
        </li>

        <li
          className={`mb-3 p-2 rounded-md w-full  flex items-center
      ${formStep === 1 && "bg-blue-500"} ${
            watch("media.idTmdb") !== 0 &&
            "hover:bg-blue-500 transition-all cursor-pointer"
          }`}
          onClick={() => watch("media.idTmdb") !== 0 && selectFormStep(1)}
        >
          <IdCardIcon className="mr-3" width="20" height="20" /> Media Details
        </li>

        <li
          className={`mb-3 p-2 rounded-md w-full transition-all flex items-center
      ${formStep === 2 && "bg-blue-500"} ${
            watch("media.idTmdb") !== 0 &&
            "hover:bg-blue-500 transition-all cursor-pointer"
          }`}
          onClick={() => watch("media.idTmdb") !== 0 && selectFormStep(2)}
        >
          <FilePlusIcon className="mr-3" width="20" height="20" /> Additional
          Details
        </li>
        <li
          className={`mb-3 cursor-default p-2 rounded-md w-full flex items-center
      ${formStep === 3 ? "bg-green-500" : ""}`}
        >
          <PaperPlaneIcon className="mr-3" width="20" height="20" /> Verify &
          Save
        </li>
      </ul>
    </div>
  );
}
