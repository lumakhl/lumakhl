import { provideDirt } from './dirtiesPlacement';
import { isEqual } from './dirtUtils';
import { DirtEvents } from './dirtEvents';

const DIRTY_INTERVAL = 5000;

class DirtiesController {

  dirties = [];
  dirtiesInterval;

  listeners = {
    [DirtEvents.ADDED_DIRT]: [],
    [DirtEvents.REMOVED_DIRT]: []
  }

  start() {
    if (!this.dirtiesInterval) {
      this.dirtiesInterval = setInterval(() => {
        this.addDirt();
      }, DIRTY_INTERVAL);
    }
  }
  
  on(eventType, listener) {
    if (!this.listeners[eventType]) {
      throw Error('Listener not found');
    }
    this.listeners[eventType].push(listener);
  }
  

  addDirt() {
    const newDirt = provideDirt(this.dirties);
    if (newDirt) {
      this.dirties.push(newDirt);
      this.listeners[DirtEvents.ADDED_DIRT].forEach(listener => listener(newDirt)); 
    }
    return newDirt;
  }

  removeDirt(toRemove) {
    const beforeRemoved = this.dirties.length;
    this.dirties = this.dirties.filter(dirt => !isEqual(dirt, toRemove));
    const afterRemoved = this.dirties.length;
    if (beforeRemoved !== afterRemoved) {
      this.listeners[DirtEvents.REMOVED_DIRT].forEach(listener => listener());
    }
  }

  stop() {
    if (this.dirtiesInterval) clearInterval(this.dirtiesInterval);
  }

  getDirties() {
    return [
      ...this.dirties
    ]
  }

}

export default DirtiesController;
