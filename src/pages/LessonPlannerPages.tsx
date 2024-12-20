import Layout from "../components/Layout";
import LessonPlannerConrolPanel from "../components/LessonPlannerConrolPanel";
import LessonPlannerContent from "../components/LessonPlannerContent";

const LessonPlannerPages = () => {
  return (
    <Layout>
      <div className="w-full max-w-2xl">
        <LessonPlannerConrolPanel />
        <LessonPlannerContent />
      </div>
    </Layout>
  );
};

export default LessonPlannerPages;
