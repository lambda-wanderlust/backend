
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', function(tbl){
    tbl.increments()

    tbl.string("location", 255)
      .notNullable()

    tbl.integer("quantity").defaultTo(0)

    tbl.string("units", 255)
      .notNullable()

    tbl.string("trip_type", 255)
      .notNullable()

    tbl.string("service_type", 255)
      .notNullable()

    tbl.integer('user_id')
      .references('id')
      .inTable('users')


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("trips")
};
