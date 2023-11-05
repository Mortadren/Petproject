const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'];
const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];
const ages = [25, 30, 35, 40, 45];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
const genders = ['male', 'female'];
const favoriteFoods = ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad'];




const generateUsers = (arg)=>{
    const users = [{
        id:0,
        name:'Jessica',
        surname: 'Pinkovich',
        age:'18',
        city:'Belgrad',
        gender: 'female',
        favoriteFood: 'Banana',
        login: 'admin',
        password: 'admin',

    }]
    const randomFrom = (massive) => {
        return massive[Math.round(Math.random() * (massive.length - 1))]                                                    //максимальный индекс из массива
    } 
    for (i=1; i <= arg; i++){
        const user = {
            id:i,
            name:randomFrom(names),
            surname:randomFrom(surnames),
            age:randomFrom(ages),
            city:randomFrom(cities),
            gender:randomFrom(genders),
            favoriteFood:randomFrom(favoriteFoods),
    }
        users.push(user) 
    }
    return users
}
module.exports = generateUsers