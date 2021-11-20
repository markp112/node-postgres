import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("json-data",
    (table) => {
      table.bigIncrements("id").unsigned().primary;
      table.json("data")
    }
  )
}


export async function down(knex: Knex): Promise<void> {
}

