//templates btn filter
class Btn {
  constructor(props) {
    const key = props.key ? props.key : props.name;
    this.btn = `<button class="btn-filter-anime" data-type="${props.type}" data-filter="${key}">${props.name}</button>`;
  }
}



//data filter
export const allFilter = {
  years: [],
  types: [],
  genres: [],
  studios: []
};


//data constructor filter
let years = 2026;


const btnValue = {
genres: [
  [1, 'Екшен'],
  [2, 'Пригоди'],
  [4, 'Комедія'],
  [8, 'Драма'],
  [10, 'Фентезі'],
  [14, 'Жахи'],
  [7, 'Містика'],
  [22, 'Романтика'],
  [24, 'Наукова фантастика'],
  [36, 'Повсякденність'],
  [30, 'Спорт'],
  [37, 'Надприродне'],
  [41, 'Трилер'],
  [27, 'Сьонен'],
  [25, 'Сьоджьо'],
  [42, 'Сейнен'],
  [43, 'Джьосей'],
  [15, 'Для дітей'],
  [13, 'Історичні'],
  [17, 'Бойові мистецтва'],
  [18, 'Меха'],
  [19, 'Музика'],
  [23, 'Школа'],
  [31, 'Суперсили'],
  [38, 'Військові'],
  [39, 'Поліція'],
  [40, 'Психологічні'],
  [9, 'Еччі'],
  [49, 'Еротика'],
  [12, 'Хентай']
],


types: [
  ['tv', 'Телесеріали'],
  ['movie', 'Фільми'],
  ['ova', 'OVA'],
  ['special', 'Спешели'],
  ['ona', 'ONA'],
  ['music', 'Музичні відео']
],


studios: [
  [4, 'Bones'],
  [10, 'Production I.G'],
  [11, 'Madhouse'],
  [18, 'Toei Animation'],
  [21, 'Studio Ghibli'],
  [28, 'OLM'],
  [29, 'Nippon Animation'],
  [37, 'Studio Deen'],
  [43, 'ufotable'],
  [44, 'Shaft'],
  [47, 'Sunrise'],
  [56, 'A-1 Pictures'],
  [79, 'Genco'],
  [91, 'Studio Pierrot'],
  [112, 'Kyoto Animation'],
  [314, 'White Fox'],
  [569, 'MAPPA'],
  [858, 'Wit Studio'],
  [1835, 'CloverWorks']
]
};



//logic push btn filter
while (years > 1965) {
  allFilter.years.push(new Btn({type: 'years', name: years}).btn);
  years -= 1;
}

function addGeneral(value) {
  btnValue[value].forEach(e => {
    allFilter[value].push(new Btn({type: value, key: e[0], name: e[1]}).btn);
  });
}

addGeneral('types');
addGeneral('genres');
addGeneral('studios');


