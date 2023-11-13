export const users = [
    {
      username: 'cristian',
      email: 'cristiandracedo@ymail.com'
    },
    {
            username: 'Bret',
      email: 'Sincere@april.biz',
      userData: {
        name: 'Leanne Graham',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874'
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      }
    },
    {
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      userData: {
        name: 'Ervin Howell',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771'
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains'
        }
      }
    },
    {
            username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      userData: {
        name: 'Patricia Lebsack',
        address: {
          street: 'Hoeger Mall',
          suite: 'Apt. 692',
          city: 'South Elvis',
          zipcode: '53919-4257'
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
          name: 'Robel-Corkery',
          catchPhrase: 'Multi-tiered zero tolerance productivity',
          bs: 'transition cutting-edge web services'
        }
      }
    },
    {
            username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      userData: {
        name: 'Chelsey Dietrich',
        address: {
          street: 'Skiles Walks',
          suite: 'Suite 351',
          city: 'Roscoeview',
          zipcode: '33263'
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
          name: 'Keebler LLC',
          catchPhrase: 'User-centric fault-tolerant solution',
          bs: 'revolutionize end-to-end systems'
        }
      }
    },
    {
      username: 'c215714n',
      email: 'cristiandracedo@hotmail.com',
      userData: {
        name: 'Cristian Racedo',
        age: 33,
        gender: 'masculino',
        personalId: { type: 'DNI', number: '35336446' }
      }
    },
    {
            username: 'Samantha',
      email: 'Nathan@yesenia.net',
      userData: {
        name: 'Clementine Bauch',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157'
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications'
        }
      }
    }
]
const User = function(name, email, userData){
  this.userName = name;
  this.email = email;
  this.userData = userData;
}
User.Create = (User, callBack) =>{
  users.push(User)
  return callBack(null, User)
}
User.Read = (id, callBack) =>{
  const data = !id ? users : 
    users.filter(u => u.username.toLowerCase() === id.toLowerCase())
  return callBack(null, data)
}
User.Update = (id, data, callBack) => {
  for(let i in users)
  if(users[i].username.toLowerCase() === id.toLowerCase()){ 
    users[i] = data 
    return callBack(null, users[i])
  }
  return callBack(true, null);
}
User.Delete = (id, callBack) =>{
  for (let i in users) 
  if (users[i].username.toLowerCase() === id.toLowerCase()){ 
    users.splice(i, 1) 
    return callBack(null, users.length)
  }
  return callBack(true, null);
}
export default User;