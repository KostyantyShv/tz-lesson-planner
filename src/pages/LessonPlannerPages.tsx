import Layout from "../components/Layout";
import LessonPlannerConrolPanel from "../components/LessonPlannerConrolPanel";
import LessonPlannerForm from "../components/LessonPlannerForm";

const LessonPlannerPages = () => {
  return (
    <Layout>
      <div className="w-full max-w-2xl">
        <LessonPlannerConrolPanel />
        <LessonPlannerForm />
      </div>
    </Layout>
  );
};

export default LessonPlannerPages;
