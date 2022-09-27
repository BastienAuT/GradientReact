export const CHANGE_DIRECTION_TO_45_DEG = 'CHANGE_DIRECTION_TO_45_DEG';

export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  direction: direction,
});
