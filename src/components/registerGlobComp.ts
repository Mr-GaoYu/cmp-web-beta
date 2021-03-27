import type { App } from "vue";

import {
  // Need
  Button as AntButton,
} from "ant-design-vue";

const compList = [AntButton.Group];

export function registerGlobComp(app: App) {
  compList.forEach((comp: any) => {
    app.component(comp.name || comp.displayName, comp);
  });
}
