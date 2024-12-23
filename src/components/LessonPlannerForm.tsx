import React, { useState } from "react";
import { toast } from "react-hot-toast";
import avatarForm from "../assets/avatar-content.png";
import FileUpload from "./FileUpload";
import { useLessonPlanner } from "../hooks/useLessonPlanner";
import { handleDownloadPdfAPI } from "../services/handleDownloadPdfAPI";
import { grades } from "../contents/lessonPlannerContent";

const LessonPlannerForm: React.FC = () => {
  const [topic, setTopic] = useState<string>("");
  const [duration, setDuration] = useState<number>(60);
  const [generatedText, setGeneratedText] = useState<string>("");
  const { handleGenerateLessonPlan, loading } = useLessonPlanner();
  const [tempValue, setTempValue] = useState<string>(duration.toString());

  const handleBlur = () => {
    const numValue = Number(tempValue);
    if (numValue >= 15 && numValue <= 120) {
      setDuration(numValue);
    } else {
      setTempValue(duration.toString());
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
    toast.success("Text copied to clipboard!");
  };

  const handleDownloadAndNotifyPDF = async (text: string) => {
    try {
      await handleDownloadPdfAPI(text);
      toast.success("PDF generated successfully!");
    } catch {
      toast.error("Failed to generate PDF.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !duration) {
      toast.error("Both topic and duration are required.");
      return;
    }
    handleGenerateLessonPlan(topic, duration, setGeneratedText);
  };

  return (
    <div className="bg-white rounded-3xl shadow p-6">
      <img
        src={avatarForm}
        alt="avatar form"
        className="mb-6 w-[70px] h-[70px] rounded-2xl"
      />
      <h2 className="text-2xl font-medium">Lesson Planner</h2>
      <p className="text-customGray text-xs mb-6">
        This AI tool helps you with creating lesson plans for your class!
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-customBlack font-semibold text-base">
            Grade level:
          </label>
          <select className="w-full mt-1 px-5 py-6 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500">
            {grades && grades.length > 0 ? (
              grades.map((grade, index) => (
                <option key={index} value={grade}>
                  {grade}
                </option>
              ))
            ) : (
              <option>No grades available</option>
            )}
          </select>
        </div>
        <div>
          <label className="block text-customBlack font-semibold text-base">
            Lecture duration (in minutes):
          </label>
          <input
            type="number"
            className="w-full mt-1 border rounded-full px-5 py-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onBlur={handleBlur}
            min={15}
            max={120}
            required
          />
        </div>

        <div>
          <label className="block text-customBlack font-semibold text-base mb-1.5">
            Topic, Standard, or Objective:
          </label>
          <textarea
            className="w-full mt-1 h-36 p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Describe the topic or standard..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          ></textarea>
        </div>
        <FileUpload />

        {generatedText && (
          <>
            <div>
              <label
                htmlFor="editable-text-area"
                className="block text-gray-700 font-medium mb-2"
              >
                Generated Text (Editable):
              </label>
              <textarea
                id="editable-text-area"
                placeholder="Your generated text will be here!"
                value={generatedText}
                onChange={(e) => setGeneratedText(e.target.value)}
                className="w-full border rounded-md p-2 h-32 focus:ring-2 focus:customGray focus:outline-none"
              ></textarea>
            </div>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                className="py-3 px-2 bg-customBlack font-normal text-white rounded-2xl"
                onClick={handleCopyToClipboard}
              >
                Copy
              </button>
              <button
                type="button"
                className="py-3 px-2 bg-customBlack font-normal text-white rounded-2xl"
                onClick={() => handleDownloadAndNotifyPDF(generatedText)}
              >
                Download PDF
              </button>
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full py-5 bg-customBlack font-normal text-white rounded-full"
          disabled={loading}
        >
          {loading ? "Generating..." : "Create lesson plan"}
        </button>
      </form>
    </div>
  );
};

export default LessonPlannerForm;
