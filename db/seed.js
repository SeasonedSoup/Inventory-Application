const { Client } = require('pg');
require('dotenv').config();

//create category and resource table then proceed to populate it
const SQL = `
    DO $$
      BEGIN 
        CREATE TYPE resource_type AS ENUM(note, digital-note, 'link');
      EXCEPTION 
        WHEN duplicate_object THEN 
        null;
    END $$;

    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      title VARCHAR(100),
      description TEXT
    ); 

    CREATE TABLE IF NOT EXISTS resources (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY
      title VARCHAR(100),
      description TEXT,
      type resource_type,
      category_id INTEGER,
      CONSTRAINT fk_category
        FOREIGN KEY (category_id) 
        REFERENCES categories(id)
    );

    INSERT INTO categories (title, description)
      VALUES 
        ('Blender', 'Resources related to learning and using Blender.'),
        ('React', 'A Front-end library of javascript using a cool utilization through components'),
        ('Math', 'A fundamental subject to understand patterns, numbers, space and change');

    INSERT INTO resources (title, description, type, category_id)
      VALUES 
        ('Blender Guru Donut Tutorial', 'The og tutorial for beginners learning to model and render a donut.', 'link' , 1),
        ('React Hooks' , 'Explains basic hooks such as useState, useEffect, useContext, useRef and more', 'digital-note', 2),
        ('Khan Academy Geometry, 'My notes about Geometry learning specifically transformations', 'note', 3);
`
async function main(){
  console.log('seeding values...')
  const client = new Client({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'resource-notes',
    port: 5432
  })

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log('seeding finished...')
}