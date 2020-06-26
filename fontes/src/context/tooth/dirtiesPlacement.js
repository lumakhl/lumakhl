import { isEqual } from './dirtUtils';

/* Superior tooth */
const superiorDirt = [
  [[19, 12], [19, 12]],
  [[25, 8], [25, 8]],
  [[30, 6], [30, 6]],
  [[35, 3], [35, 3]],
  [[45, 3], [45, 3]],
  [[55, 4], [55, 4]],
  [[64, 8], [64, 8]],
  [[68, 10], [68, 10]],
];

/* Inferior tooth */
const inferiorDirt = [
  [[69, 50], [69, 50]],
  [[64, 60], [64, 60]],
  [[58, 68], [58, 68]],
  [[52, 71], [52, 71]],
  [[40, 73], [40, 73]],
  [[30, 69], [30, 69]],
  [[22, 60], [22, 60]],
  [[19, 50], [19, 50]]
];

/* Tonge */
const tongeDirt = [
  [[30, 50], [30, 50]],
  [[35, 60], [35, 60]],
  [[38, 48], [38, 48]],
  [[43, 60], [43, 60]],
  [[48, 47], [48, 47]],
  [[53, 57], [53, 57]],
  [[58, 46], [58, 46]],
  [[61, 45], [61, 45]]
];

const dirties = superiorDirt.concat(inferiorDirt).concat(tongeDirt);

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