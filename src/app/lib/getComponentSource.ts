import path from "path";
import fs from "fs";
import { Index } from "../__registry__";

export default function getComponentSource(name: string) {
  if (!name) {
    return null;
  }

  let combinedSources = [];

  // Get the source code for the component .tsx file
  const component = Index[name];
  if (!component) {
    return [];
  }
  const componentSrc = component.files[0];

  // Read the source file.
  const filePath = path.join("./src/", componentSrc);
  let source = fs.readFileSync(filePath, "utf8");

  source = source.replaceAll(`@/registry/`, "@/components/");
  source = source.replaceAll("export default", "export");
  combinedSources.push(source);

  // Get the CSS file for the component
  const cssSrc = component.files[1];
  const cssFilePath = path.join("./src/", cssSrc);
  const cssSource = fs.readFileSync(cssFilePath, "utf8");
  combinedSources.push(cssSource);

  return combinedSources;
}
