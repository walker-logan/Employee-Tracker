INSERT INTO department (name)
VALUES 
('Narnia'), 
('Hogwarts'), 
('Middle Earth'), 
('Star Wars'), 
('Marvel Universe'), 
('The Shire');

INSERT INTO role (title, salary, department_id)
VALUES 
('High King', 120000, 1), 
('Headmaster', 95000, 2), 
('King', 200000, 3), 
('Jedi Master', 300000, 4), 
('Superhero', 100000, 5), 
('Mayor', 80000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Peter', 'Pevensie', 1, NULL),
('Albus', 'Dumbledore', 2, 7),
('Aragorn', 'Son of Arathorn', 3, NULL),
('Obi-Wan', 'Kenobi', 4, NULL),
('Tony', 'Stark', 5, NULL),
('Samwise', 'Gamgee', 6, NULL),
('Aslan', 'Lion', 1, 1),
('Minerva', 'McGonagall', 2, 2),
('Gandalf', 'Grey', 3, 3),
('Anakin', 'Skywalker', 4, 4),
('Steve', 'Rogers', 5, 5),
('Frodo', 'Baggins', 6, 6);
