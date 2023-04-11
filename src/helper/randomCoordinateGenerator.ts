const randomGenerator = (from, to) => {
  return (Math.random() * (to - from) + from).toFixed(0) * 1;
};

const appendObjTo = (thatArray, newObj) => {
  const frozenObj = Object.freeze(newObj);
  return Object.freeze(thatArray.concat(frozenObj));
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getRandomInRange = (
  from: number,
  to: number,
  arr = [],
  obj = { x: 0, y: 0 }
) => {
  obj.x = randomGenerator(from, to);
  obj.y = randomGenerator(from, to);
  return appendObjTo(arr, obj);
};
