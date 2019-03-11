
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1,
         userName: 'js1985',
         password: "password",
         name:"John Smith",
         role:"tourist",
         email:"js@usersmail.com",
         phone:"555-589-9000"
      },
        {id: 2,
        userName: 'msanchez1',
        password: "password",
        name:"Melissa Sanchez",
        role:"guide",
        email:"info@mstours.com",
        phone:"555455303"
      },
        {id: 3,
        userName: 'luckysam',
        password: "password",
        name:"Samantha Williams",
        role:"guide",
        email:"sam@lucktours.net",
        phone:"6748946522"
      },
        {id: 4,
        userName: 'HappyTrailsTours',
        password: "password",
        name:"Bart Beery",
        role:"guide",
        email:"help@htt.com",
        phone:"4353651398"
      },
        {id: 5,
        userName: 'djohnson1993',
        password: "password",
        name:"Daniel Johnson",
        role:"tourist",
        email:"djohnson1993@fakemail.com",
        phone:"2355056789"
      },
        {id: 6,
        userName: 'courtney2018',
        password: "password",
        name:"Courtney Holt",
        role:"guide",
        email:"travel@holttours.com",
        phone:"6534567980"
      },
        {id: 7,
        userName: 'mpowell65',
        password: "password",
        name:"Mark Powell",
        role:"tourist",
        email:"mpowell65@zmail.com",
        phone:"6734553211"
      },
        {id: 8,
        userName: 'ilovedogs1995',
        password: "passwordpassword",
        name:"Joan Gannon",
        role:"tourist",
        email:"ilovedogs1995@usermail.com",
        phone:"3214567341"
      },
        {id: 9,
        userName: 'Best Tours',
        password: "passwordpassword",
        name:"Robert McGregor",
        role:"guide",
        email:"robert@besttours.com",
        phone:"8807816528"
      },
        {id: 10,
        userName: 'Sea Star Adventures',
        password: "passwordpassword",
        name:"Elias Jensen",
        role:"guide",
        email:"ejensen@ssadventures.com",
        phone:"4325679999"
      }
      ]);
    });
};
