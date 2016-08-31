const getPresentationalPhone = (number) => {
    if (number.length !== 10) return number;
    return number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

export {
    getPresentationalPhone
};
