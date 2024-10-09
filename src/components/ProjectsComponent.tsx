export default function ProjectsComponent() {
  return (
    <div className="flex flex-row h-screen">
      <div className="bg-black w-1/6 h-screen"></div>
      <div className="bg-white w-5/6 h-screen flex flex-row justify-end">
        <div className="flex flex-col w-full">
          <div className="flex-grow"></div>
          <div className="flex flex-row justify-end">
            <div className="bg-red-600 w-1/3 h-screen"></div>
            <div className="bg-blue-700 w-2/3 h-screen flex flex-col justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
