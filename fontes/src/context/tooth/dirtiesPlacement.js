import { isEqual } from './dirtUtils';
import { DirtTypes } from './dirtTypes';

/* Superior tooth */
const superiorDirt = [
  [[19, 12], [22, 22], DirtTypes.TOOTH],
  [[25, 8], [25, 18], DirtTypes.TOOTH],
  [[30, 6], [30, 15], DirtTypes.TOOTH],
  [[35, 3], [35, 13], DirtTypes.TOOTH],
  [[45, 3], [45, 12], DirtTypes.TOOTH],
  [[55, 4], [55, 12], DirtTypes.TOOTH],
  [[64, 8], [64, 17], DirtTypes.TOOTH],
  [[68, 10], [68, 19], DirtTypes.TOOTH],
];

/* Inferior tooth */
const inferiorDirt = [
  [[69, 50], [71, 60], DirtTypes.TOOTH],
  [[64, 60], [67, 68], DirtTypes.TOOTH],
  [[58, 68], [59, 79], DirtTypes.TOOTH],
  [[52, 71], [52, 83], DirtTypes.TOOTH],
  [[40, 73], [40, 83], DirtTypes.TOOTH],
  [[30, 69], [30, 78], DirtTypes.TOOTH],
  [[22, 60], [24, 68], DirtTypes.TOOTH],
  [[19, 50], [21, 60], DirtTypes.TOOTH]
];

/* Tonge */
const tongeDirt = [
  [[30, 50], [30, 59], DirtTypes.TONGUE],
  [[35, 60], [35, 69], DirtTypes.TONGUE],
  [[38, 48], [38, 57], DirtTypes.TONGUE],
  [[43, 60], [43, 69], DirtTypes.TONGUE],
  [[48, 47], [48, 58], DirtTypes.TONGUE],
  [[53, 57], [53, 66], DirtTypes.TONGUE],
  [[58, 46], [58, 58], DirtTypes.TONGUE],
  [[61, 45], [61, 57], DirtTypes.TONGUE]
];

const dirties = superiorDirt.concat(inferiorDirt).concat(tongeDirt);
dirties.forEach(dirt => {
  const randStyle = Math.trunc(Math.random() * 4) + 1;
  const dirtProps = { style: randStyle };
  dirt.push(dirtProps);
});

const provideDirt = currentDirties => {
  const remainingDirties = dirties
    .filter(currentDirt => !currentDirties.find(dirt => isEqual(currentDirt, dirt)));

  if (remainingDirties.length === 0)   {
    return null;
  }

  const index = Math.trunc(remainingDirties.length * Math.random());
  return remainingDirties[index >= remainingDirties.length ? remainingDirties.length - 1 : index];
}

export { provideDirt };