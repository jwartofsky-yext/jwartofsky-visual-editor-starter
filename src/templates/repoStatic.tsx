import "@yext/visual-editor/style.css";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";

export const getPath: GetPath<TemplateProps> = () => {
  return `staticPage`;
};

const StaticPage: Template<TemplateRenderProps> = () => {
  return (
    <div className="max-w-[1000px] mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Static Page</h1>
      <p>Welcome!</p>
    </div>
  );
};

export default StaticPage;
