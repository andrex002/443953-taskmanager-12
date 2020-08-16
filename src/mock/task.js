import {COLORS} from "../const.js";
import {getRandomInteger} from "../utils.js";

const DESCRIPTION = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на 100%`
];

const generateDescription = () => DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)];

const generateDate = () => {
  const isDate = Boolean(getRandomInteger(0, 1));

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

const generateRepeating = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(getRandomInteger(0, 1)),
    th: false,
    fr: Boolean(getRandomInteger(0, 1)),
    sa: false,
    su: false
  };
};

const getRandomColor = () => COLORS[getRandomInteger(0, COLORS.length - 1)];

export const generateTask = () => {
  const dueDate = generateDate();
  const repeating = (dueDate === null)
    ? generateRepeating()
    : {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false
    };

  return {
    description: generateDescription(),
    dueDate,
    repeating,
    color: getRandomColor(),
    isArchive: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
