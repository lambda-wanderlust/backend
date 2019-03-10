
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {id: 1,
         location: 'Paintbrush Canyon, Grand Teton National Park',
         quantity: 3,
         units: "days",
         trip_type:"mountain adventure",
         service_type:"professional",
         user_id: 4

       },
        {id: 2,
         location: 'Lake Okeechobee',
         quantity: 8,
         units: "hours",
         trip_type: "guided bass fishing",
         service_type: "professional",
         user_id: 3

       },
        {id: 3,
         location: 'Catalina Island',
         quantity: 3,
         units: "hour",
         trip_type:"guided boat tour - sightseeing",
         service_type:"professional",
         user_id: 10


       },
        {id: 4,
         location: 'Catalina Island',
         quantity: 8,
         units: "hours",
         trip_type:"guided boat tour - fishing",
         service_type:"professional",
         user_id: 10


       },
        {id: 5,
         location: 'New Orleans',
         quantity: 3,
         units: "hours",
         trip_type:"guided city tour",
         service_type:"private",
         user_id: 9


       },
        {id: 6,
         location: 'New Orleans Famous Graveyards',
         quantity: 1,
         units: "day",
         trip_type:"guided tour",
         service_type:"private",
         user_id: 9


       },
        {id: 7,
         location: 'New York City',
         quantity: 1,
         units: "day",
         trip_type:"sightseeing",
         service_type:"professional",
         user_id:6


       },
        {id: 8,
         location: 'Statue of Liberty',
         quantity: 4,
         units: "hours",
         trip_type:"sightseeing",
         service_type:"professional",
         user_id:6
       },
        {id: 9,
         location: 'Cascade Canyon Trail',
         quantity: 3,
         units: "days",
         trip_type:"hiking adventure",
         service_type:"professional",
         user_id:4
       }



      ]);
    });
};
