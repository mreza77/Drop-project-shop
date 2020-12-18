exports.AscendingAbv = (a, b) => {
    if (a.abv < b.abv) {
        return -1; // sooodi
    }
    if (a.abv > b.abv) {
        return 1;
    }
    return 0;
}

exports.DescendingAbv = (a, b) => {
    if (a.abv > b.abv) {
        return -1; // noozooli
    }
    if (a.abv < b.abv) {
        return 1;
    }
    return 0;
}
exports.AscendingName = (a, b) => {
    if (a.name < b.name) {
        return -1; // sooodi
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
exports.DescendingName = (a, b) => {
    if (a.name > b.name) {
        return -1; // noozooli
    }
    if (a.name < b.name) {
        return 1;
    }
    return 0;
}