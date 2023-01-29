const expenseList = {
  Продукты: 'Products',
  Алкоголь: 'Alcohol',
  Развлечения: 'Entertainment',
  Здоровье: 'Health',
  Транспорт: 'Transport',
  'Всё для дома': 'Housing',
  Техника: 'Technique',
  'Коммуналка и связь': 'Communal, communication',
  'Спорт и хобби': 'Sports, hobbies',
  Образование: 'Education',
  Прочее: 'Other',
};

const incomesList = {
  'З/П': 'Salary',
  'Доп. доход': 'Add. income',
};

export const convertListFromRuToEng = (list, categoryList) => {
  return list.map(category => categoryList[category]);
};

export const convertCategoryValueFromEngToRu = (value, categoryList) =>
  Object.keys(categoryList).find(key => categoryList[key] === value);

// Expenses
export const convertExpenseListToEng = list =>
  convertListFromRuToEng(list, expenseList);

export const convertExpenseValueToEng = value => expenseList[value];

export const convertExpenseValueToRu = value =>
  convertCategoryValueFromEngToRu(value, expenseList);

// Incomes
export const convertIncomeListToEng = list =>
  convertListFromRuToEng(list, incomesList);

export const convertIncomeValueToEng = value => incomesList[value];

export const convertIncomeValueToRu = value =>
  convertCategoryValueFromEngToRu(value, incomesList);
