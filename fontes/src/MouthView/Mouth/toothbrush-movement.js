const createBushMovement = positions => {
  const motion = [0, 2, 1, 3];
  const toothbrushMovement = [];
  for (let i = 0; i <= (positions.length - motion.length); i++) {
    for (let y = 0; y < motion.length; y++) {
      const position = positions[i + motion[y]];
      toothbrushMovement.push(position);
    }
  }
  return toothbrushMovement;
}

let toothbrushPositions = [];

/* Superior tooth */
toothbrushPositions = toothbrushPositions.concat(createBushMovement([
  [19, 12],
  [25, 8],
  [30, 6],
  [35, 3],
  [45, 3],
  [55, 4],
  [64, 8],
  [68, 10],
]));

/* Inferior tooth */
toothbrushPositions = toothbrushPositions.concat(createBushMovement([
  [69, 50],
  [64, 60],
  [58, 68],
  [52, 71],
  [40, 73],
  [30, 69],
  [22, 60],
  [19, 50],
]));

/* Tonge */
toothbrushPositions = toothbrushPositions.concat(createBushMovement([
  [30, 50],
  [35, 60],
  [38, 48],
  [43, 60],
  [48, 47],
  [53, 57],
  [58, 46],
  [61, 45],
]));

export { toothbrushPositions };
