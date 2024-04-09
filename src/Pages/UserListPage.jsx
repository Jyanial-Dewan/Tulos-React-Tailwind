import { userData } from "../Pages/UserFormPage";

export default function UserListPage() {
  return (
    <section className="bg-gray-300 pt-[6rem]">
      <div className="flex flex-wrap items-center justify-center w-86% mx-auto py-10">
      {userData.map((data)=>(
       <>
        <div className="bg-white flex-grow px-6 py-4 mr-6 mt-4 rounded-2xl max-w-[330px] shadow-md">
            <h1 className="text-lg">
               <span className="font-bold">Name:</span> {data.firstName} {data.middleName} {data.lastName}
            </h1>
            <h1 className="text-lg">
                <span className="font-bold">E-mail:</span> {data.email}
            </h1>
            <h1 className="text-lg">
                <span className="font-bold">Organization:</span> {data.organization}
            </h1>
            <h1 className="text-lg">
            <span className="font-bold">Designation:</span> {data.designation}
            </h1>
        </div>
       </>
      ))}
      </div>
    </section>
  )
}
