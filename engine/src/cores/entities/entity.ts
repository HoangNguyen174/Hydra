import { Component } from "./component"

class Entity {
    public mId: string;
    public mComponents: Array<Component>;

    constructor() {

    }

    addComponnent(component: Component) {
      for(let i = 0; i < this.mComponents.length; i++) {
        if(this.mComponents[i].mType == component.mType)
          this.mComponents[i] = component;
        else
          this.mComponents.push(component);
      }
    }

    removeComponent(component: Component) {
      for(let i = 0; i < this.mComponents.length; i++) {
        if(this.mComponents[i].mType == component.mType) {
          this.mComponents.splice(i, 1);
          return;
        }
      }
    }
}

export { Entity };
