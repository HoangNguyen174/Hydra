import getId from '../utilities/uuid';

abstract class Component {

  public mId: string;
  public mType: string;

  constructor(type: string) {
    this.mId = getId();
    this.mType = type;
  }

  abstract startup();
  abstract update();
  abstract shutdown();
}

export { Component }
