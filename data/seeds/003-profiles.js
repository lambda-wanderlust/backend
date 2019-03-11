
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1,
         userName: 'js1985',
         name:"John Smith",
         role:"tourist",
         email:"js@usersmail.com",
         phone:"555-589-9000",
         user_id:1
      },
        {id: 2,
        userName: 'msanchez1',
        name:"Melissa Sanchez",
        role:"guide",
        email:"info@mstours.com",
        phone:"555455303",
        user_id:2

      },
        {id: 3,
        userName: 'luckysam',
        name:"Samantha Williams",
        role:"guide",
        email:"sam@lucktours.net",
        phone:"6748946522",
        user_id:3

      },
        {id: 4,
        userName: 'HappyTrailsTours',
        name:"Bart Beery",
        role:"guide",
        email:"help@htt.com",
        phone:"4353651398",
        user_id:4

      },
        {id: 5,
        userName: 'djohnson1993',
        name:"Daniel Johnson",
        role:"tourist",
        email:"djohnson1993@fakemail.com",
        phone:"2355056789",
        user_id:5

      },
        {id: 6,
        userName: 'courtney2018',
        name:"Courtney Holt",
        role:"guide",
        email:"travel@holttours.com",
        phone:"6534567980",
        user_id:6

      },
        {id: 7,
        userName: 'mpowell65',
        name:"Mark Powell",
        role:"tourist",
        email:"mpowell65@zmail.com",
        phone:"6734553211",
        user_id:7

      },
        {id: 8,
        userName: 'ilovedogs1995',
        name:"Joan Gannon",
        role:"tourist",
        email:"ilovedogs1995@usermail.com",
        phone:"3214567341",
        user_id:8

      },
        {id: 9,
        userName: 'Best Tours',
        name:"Robert McGregor",
        role:"guide",
        email:"robert@besttours.com",
        phone:"8807816528",
        user_id:9

      },
        {id: 10,
        userName: 'Sea Star Adventures',
        name:"Elias Jensen",
        role:"guide",
        email:"ejensen@ssadventures.com",
        phone:"4325679999",
        user_id:10

      },
      {id: 11,
      userName: 'wladmin',
      name:"Duke Cortina",
      role:"admin",
      email:"dcortina@wanderlust.com",
      phone:"9031038348"
    }
      ]);
    });
};
