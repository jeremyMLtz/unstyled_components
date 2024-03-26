import { Registry } from "@/registry/schema";

const components: Registry = [
  {
    name: "avatar",
    type: "ui",
    files: ["ui/avatar/avatar.tsx", "ui/avatar/avatar.module.css"],
  },
  {
    name: "badge",
    type: "ui",
    files: ["ui/badge/badge.tsx", "ui/badge/badge.module.css"],
  },
  {
    name: "button",
    type: "ui",
    files: ["ui/button/button.tsx", "ui/button/button.module.css"],
  },
  {
    name: "card",
    type: "ui",
    files: ["ui/card/card.tsx", "ui/card/card.module.css"],
  },
  {
    name: "dialog",
    type: "ui",
    files: ["ui/dialog/dialog.tsx", "ui/dialog/dialog.module.css"],
  },
  {
    name: "form",
    type: "ui",
    dependencies: ["@hookform/resolvers", "zod", "react-hook-form"],
    registryDependencies: ["button", "label"],
    files: ["ui/form/form.tsx", "ui/form/form.module.css"],
  },
  {
    name: "input",
    type: "ui",
    files: ["ui/input/input.tsx", "ui/input/input.module.css"],
  },
  {
    name: "label",
    type: "ui",
    files: ["ui/label/label.tsx", "ui/label/label.module.css"],
  },
  {
    name: "switch",
    type: "ui",
    files: ["ui/switch/switch.tsx", "ui/switch/switch.module.css"],
  },
  {
    name: "textarea",
    type: "ui",
    files: ["ui/textarea/textarea.tsx", "ui/textarea/textarea.module.css"],
  },
  {
    name: "tooltip",
    type: "ui",
    files: ["ui/tooltip/tooltip.tsx", "ui/tooltip/tooltip.module.css"],
  },
];

const demos: Registry = [
  {
    name: "avatar-demo",
    type: "demo",
    registryDependencies: ["avatar"],
    files: ["demo/avatar-demo.tsx"],
  },
  {
    name: "badge-demo",
    type: "demo",
    registryDependencies: ["badge"],
    files: ["demo/badge-demo.tsx"],
  },
  {
    name: "badge-destructive",
    type: "demo",
    registryDependencies: ["badge"],
    files: ["demo/badge-destructive.tsx"],
  },
  {
    name: "badge-outline",
    type: "demo",
    registryDependencies: ["badge"],
    files: ["demo/badge-outline.tsx"],
  },
  {
    name: "badge-secondary",
    type: "demo",
    registryDependencies: ["badge"],
    files: ["demo/badge-secondary.tsx"],
  },
  {
    name: "button-demo",
    type: "demo",
    registryDependencies: ["button"],
    files: ["demo/button-demo.tsx"],
  },
  {
    name: "button-secondary",
    type: "demo",
    registryDependencies: ["button"],
    files: ["demo/button-secondary.tsx"],
  },
  {
    name: "button-destructive",
    type: "demo",
    registryDependencies: ["button"],
    files: ["demo/button-destructive.tsx"],
  },
  {
    name: "button-outline",
    type: "demo",
    registryDependencies: ["button"],
    files: ["demo/button-outline.tsx"],
  },
  {
    name: "button-ghost",
    type: "demo",
    registryDependencies: ["button"],
    files: ["demo/button-ghost.tsx"],
  },
  {
    name: "card-demo",
    type: "demo",
    registryDependencies: ["button", "card", "input", "label", "textarea"],
    files: ["demo/card-demo.tsx"],
  },
  {
    name: "dialog-demo",
    type: "demo",
    registryDependencies: ["dialog", "button"],
    files: ["demo/dialog-demo.tsx"],
  },
  {
    name: "input-demo",
    type: "demo",
    registryDependencies: ["input"],
    files: ["demo/input-demo.tsx"],
  },
  {
    name: "input-disabled",
    type: "demo",
    registryDependencies: ["input"],
    files: ["demo/input-disabled.tsx"],
  },
  {
    name: "input-file",
    type: "demo",
    registryDependencies: ["input"],
    files: ["demo/input-file.tsx"],
  },
  {
    name: "input-form",
    type: "demo",
    registryDependencies: ["input", "button", "form"],
    files: ["demo/input-form.tsx"],
  },
  {
    name: "label-demo",
    type: "demo",
    registryDependencies: ["label"],
    files: ["demo/label-demo.tsx"],
  },
  {
    name: "switch-demo",
    type: "demo",
    registryDependencies: ["switch"],
    files: ["demo/switch-demo.tsx"],
  },
  {
    name: "switch-form",
    type: "demo",
    registryDependencies: ["switch", "form"],
    files: ["demo/switch-form.tsx"],
  },
  {
    name: "textarea-demo",
    type: "demo",
    registryDependencies: ["textarea"],
    files: ["demo/textarea-demo.tsx"],
  },
  {
    name: "textarea-disabled",
    type: "demo",
    registryDependencies: ["textarea"],
    files: ["demo/textarea-disabled.tsx"],
  },
  {
    name: "textarea-with-label",
    type: "demo",
    registryDependencies: ["textarea", "label"],
    files: ["demo/textarea-with-label.tsx"],
  },
  {
    name: "tooltip-demo",
    type: "demo",
    registryDependencies: ["tooltip"],
    files: ["demo/tooltip-demo.tsx"],
  },
  {
    name: "tooltip-bottom",
    type: "demo",
    registryDependencies: ["tooltip"],
    files: ["demo/tooltip-bottom.tsx"],
  },
];

export const registry: Registry = [...components, ...demos];
