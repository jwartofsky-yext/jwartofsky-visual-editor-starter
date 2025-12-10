import "@yext/visual-editor/style.css";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  TemplateConfig,
} from "@yext/pages";

export const config = {
  name: "Repo Non-VE Location",
  stream: {
    $id: "repo-location-stream",
    filter: {
      entityTypes: ["location"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "slug",
      "name",
      "hours",
      "address",
      "additionalHoursText",
      "mainPhone",
      "emails",
    ],
    localization: {
      locales: ["en", "es"],
    },
    // @ts-expect-error pending pages update
    includeCertifiedFacts: true,
  },
} as const satisfies TemplateConfig;

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `non-ve/${document.locale}/${document.id}`;
};

const NonVELocation: Template<TemplateRenderProps> = (props) => {
  const { document } = props;

  return (
    <div className="max-w-[1000px] mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">{document.name}</h1>
      <p>Welcome!</p>
    </div>
  );
};

export default NonVELocation;
