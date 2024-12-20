import { MoveLeft } from "lucide-react";
const LessonPlannerConrolPanel = () => {
  return (
    <div className="flex gap-6 bg-white items-center border mb-4 rounded-3xl p-4">
      <button className="text-gray-500 hover:text-gray-700">
        <MoveLeft size={32} />
      </button>
      <h1 className="text-sm text-white px-5 py-2.5 bg-black rounded-2xl">Lesson Planner</h1>
    </div>
  );
};

export default LessonPlannerConrolPanel;
