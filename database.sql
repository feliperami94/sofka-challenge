CREATE DATABASE IF NOT EXISTS questions_db;

USE questions_db;

CREATE TABLE questions(
    question_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    question VARCHAR(200) NOT NULL,
    q_level TINYINT(3) NOT NULL,
    ans_A VARCHAR(30) NOT NULL,
    ans_B VARCHAR(30) NOT NULL,
    ans_C VARCHAR(30) NOT NULL,
    ans_D VARCHAR(30) NOT NULL,
    correct_ans TINYINT(2) NOT NULL
);

INSERT INTO questions(question, q_level, ans_A, ans_B, ans_C, ans_D, correct_ans)
VALUES

("1. About what percentage of the Earth's surface is water??", 1,'15%', '20%', '8%', '70%', 3),
('1. What is the capital of Antioquia, Colombia?', 1,'Apartadó', 'Tunja', 'Medellín', 'Bogotá', 2),
('1. Country to the east of Chile?', 1,'Argentina', 'Brazil', 'Mexico', 'Panama', 0),
('1. What does “www” stand for in a website browser?', 1,'Nothing', 'World Wide Web', 'Web Wide World', 'World Will Web', 1),
('1. In which country was the author Gabriel García Márquez born?', 1,'Venezuela', 'Ecuador', 'Bolivia', 'Colombia', 3),


('2. What is the name of the holy book of Islamic culture?', 2,'Talmud', 'Torah', 'Koran', 'Kojiki', 2),
('2. Someone is said to be famished when:', 2,'Hungry', 'Tired', 'In love', 'Afraid', 0),
('2. Albinism is manifested by lack of?', 2,'Calcium', 'Pigmentation', 'Sun', 'Oxygen', 1),
('2. What kind of musical instrument is the timpani?', 2,'Strings', 'Brasswind', 'Percussion', 'Woodwind', 2),
('2. In the greek mythology, ¿Eros was considered the god of?', 2,'Hate', 'Fear', 'Work', 'Love', 3),


('3. Which of these animals is a ruminant?', 3,'Squirrel', 'Snail', 'Parrot', 'Cow', 3),
('3. How long is an Olympic swimming pool (in meters)??', 3,'50m', '70m', '100m', '200m', 0),
('3. What geometric shape is generally used for stop signs?', 3,'Circle', 'Hexagon', 'Octagon', 'Triangle', 2),
('3. What part of the body is examined in an encephalography?', 3,'Lungs', 'Skull', 'Kidney', 'Heart', 1),
('3. The Tour de France is a famous competition of:', 3,'Golf', 'Soccer', 'Cycling', 'Triathlon', 2),


('4. How many languages are written from right to left?', 4,'6', '12', '18', '9', 1),
('4. What chemical element is represented by the symbol "P"?', 4,'Bromine', 'Boron', 'Rubidium', 'Phosphorus', 3),
('4. Which of these names does not appear in the title of a play by Shakespeare??', 4,'Hamlet', 'Romeo', 'Darren', 'Macbeth', 2),
('4. Which is the capital of Canada?', 4,'Toronto', 'Vancouver', 'Ottawa', 'Montreal', 2),
('4. How many stripes does the United States flag have?', 4,'13', '8', '12', '15', 0),


('5. Where did the Etruscan civilization develop?', 5,'Italian Peninsula', 'Caucasus', 'North of Africa', 'Far East', 0),
('5. Who was the first woman to win a Nobel Prize (in 1903)?', 5, 'Maria Goeppert Mayer', 'Marie Curie', 'Emmanuelle Charpentier', 'Dorothy Crowfoot Hodgkin', 1),
('5. The demolition of the Berlin wall separating East and West Germany began in what year?', 5,'1983', '1992', '1989', '1978', 2),
('5. How many time zones does Russia have?', 5,'7', '8', '13', '11', 3),
('5. Approximately how many kilometers long is the Andes mountain range??', 5,'3500', '7000', '12000', '16000', 1);

CREATE TABLE users(
    user_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(50) UNIQUE NOT NULL ,
    userLevel TINYINT(3) NOT NULL DEFAULT 1
);
