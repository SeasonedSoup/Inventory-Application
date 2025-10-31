const { Client } = require('pg');

//create category and resource table then proceed to populate it
const SQL = `
    CREATE TYPE resource_type AS ENUM(note, digital-note, 'link-site');

    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      title VARCHAR(100),
      description TEXT
    ); 

    CREATE TABLE IF NOT EXISTS resources (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY
      title VARCHAR(100),
      description TEXT
      type resource_type
      category_id INTEGER REFERENCES categories(id)
    );

    INSERT INTO categories (title, description)
      VALUES 
        ('Blender', 'Resources related to learning and using Blender.'),
        ('React', 'A Front-end library of javascript using a cool utilization through components'),
        ('TOP', 'A well-known curriculum for learning full-stack in web development');

    INSERT INTO resources (title, description, category_id)
      VALUES 
        ('Blender Guru Donut Tutorial', 'The og tutorial for beginners learning to model and render a donut.', 1),
        ('React Hooks' , '');

`