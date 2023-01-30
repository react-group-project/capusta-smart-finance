const monthsList = {
  Январь: { id: 1, month: 'January' },
  Февраль: { id: 2, month: 'February' },
  Март: { id: 3, month: 'March' },
  Апрель: { id: 4, month: 'April' },
  Май: { id: 5, month: 'May' },
  Июнь: { id: 6, month: 'June' },
  Июль: { id: 7, month: 'July' },
  Август: { id: 8, month: 'August' },
  Сентябрь: { id: 9, month: 'September' },
  Октябрь: { id: 10, month: 'October' },
  Ноябрь: { id: 11, month: 'November' },
  Декабрь: { id: 12, month: 'December' },
};

export const convertMonthToEng = month => monthsList[month];
