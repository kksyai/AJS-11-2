class Team {
    constructor() {
        this.team = [
          {name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence:10},
          {name:'Маг', type:'Mag', health:100, level:2, attack: 100, defence:80},
          {name:'Воин', type:'Warior', health:60, level:6, attack: 70, defence:20},
        ];
      }
  
    * [Symbol.iterator]() {
      for (const person of this.team) {
        yield person;
      }
    }
  }