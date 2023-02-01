export const convertMoneyToString = x => {
    return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const convertMoneyToStringWithCurrency = x => {
    return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' UAH';
};
