import { useState } from "react";

export const useLessonPlanner = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerateLessonPlan = async (
    topic: string,
    duration: number,
    setGeneratedText: (text: string) => void
  ) => {
    if (duration < 15 || duration > 120) {
      alert("Duration must be between 15 and 120 minutes.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://scentia-api-app-esd2apfgcyhyhwdg.swedencentral-01.azurewebsites.net/ai_tools/lesson_planner",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer k8Kx4w0Zr6qT9yB1U5nM7A2p",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic,
            duration: duration.toString(),
          }),
        }
      );

      const responseBody = await response.text();
      setGeneratedText(responseBody);
    } catch (error) {
      console.error("Error generating lesson plan:", error);
      alert("Failed to generate lesson plan.");
    } finally {
      setLoading(false);
    }
  };

  return { handleGenerateLessonPlan, loading };
};
