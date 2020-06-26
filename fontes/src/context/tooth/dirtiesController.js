import { provideDirt } from './dirtiesPlacement';
import { isEqual } from './dirtUtils';
import { DirtEvents } from './dirtEvents';

const DIRTY_INTERVAL = 1000;

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
        const newDirt = this.addDirt();
        this.listeners[DirtEvents.ADDED_DIRT].forEach(listener => listener(newDirt));
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
    this.dirties.push(newDirt);
    return newDirt;
  }

  removeDirt(toRemove) {
    this.dirties = this.dirties.filter(dirt => !isEqual(dirt, toRemove));
    this.listeners[DirtEvents.REMOVED_DIRT].forEach(listener => listener());
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
