
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
         description:"See the majesty of Paintbrush Canyon in beautiful Grand Teton Park guided by an experienced professional",
         trip_photo: "/uploads/paintbrush.jpg",
         user_id: 4

       },
        {id: 2,
         location: 'Lake Okeechobee',
         quantity: 8,
         units: "hours",
         trip_type: "guided bass fishing",
         service_type: "professional",
         description:"Enjoy good Southern hospitality, company while doing some of the best fishing in the world!",
         trip_photo: "/uploads/lakeok.jpg",
         user_id: 3

       },
        {id: 3,
         location: 'Catalina Island',
         quantity: 3,
         units: "hour",
         trip_type:"guided boat tour - sightseeing",
         service_type:"professional",
         description:"See why Catalina Island is famed for its beauty by taking this exciting boat tour!",
         trip_photo: "/uploads/catalina.jpg",
         user_id: 10


       },
        {id: 4,
         location: 'Catalina Island',
         quantity: 8,
         units: "hours",
         trip_type:"guided boat tour - fishing",
         service_type:"professional",
         description:"This tour is the same as our 3 hour tour, but at a much more leisurely pace, allowing for more time to take pictures and visit places along the way.",
         trip_photo: "/uploads/catalina.jpg",
         user_id: 10


       },
        {id: 5,
         location: 'New Orleans',
         quantity: 3,
         units: "hours",
         trip_type:"guided city tour",
         service_type:"private",
         description:"History. Music. Friendly folks. New Orleans has it all! Get to know this legendary city by taking a tour with a native of the area.",
         trip_photo: "/uploads/neworleans.jpg",
         user_id: 9


       },
        {id: 6,
         location: 'New Orleans Famous Graveyards',
         quantity: 1,
         units: "day",
         trip_type:"guided tour",
         service_type:"private",
         description:"Delve into some of New Orleans' mysteries by visiting its famous graveyards. See how the unique Louisiana topography results in the unique practice of burying people above ground, and visit the graves of some very famous people.",
         trip_photo: "/uploads/neworleansgrave.jpg",
         user_id: 9


       },
        {id: 7,
         location: 'New York City',
         quantity: 1,
         units: "day",
         trip_type:"sightseeing",
         service_type:"professional",
         description:"The Big Apple! A unique whole-day tour to America's biggest city. See world-famous landmarks, like the Statue of Liberty, the Empire State Building and Central Park.",
         trip_photo:"/uploads/nyc.jpg",
         user_id:6


       },
        {id: 8,
         location: 'Statue of Liberty',
         quantity: 4,
         units: "hours",
         trip_type:"sightseeing",
         service_type:"professional",
         description:"Lady Liberty graces any photo in which she appears, but you can't appreciate her until you've visited in person. Take this unforgettable tour!",
         trip_photo: "/uploads/statue.jpg",
         user_id:6
       },
        {id: 9,
         location: 'Cascade Canyon Trail',
         quantity: 3,
         units: "days",
         trip_type:"hiking adventure",
         service_type:"professional",
         description:"A true gem, Cascade Canyon Trail is one of the most beautiful hikes in the United States. ",
         trip_photo: "/uploads/cascade.jpg",
         user_id:4
       }



      ]);
    });
};
