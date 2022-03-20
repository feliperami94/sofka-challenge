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
-- Questions from level 1
('¿Aproximadamente, qué porcentaje de la superficie de la Tierra es agua?', 1,'15%', '20%', '8%', '70%', 3),
('¿Cual es la capital de Antioquia, Colombia?', 1,'Apartadó', 'Tunja', 'Medellín', 'Bogotá', 2),
('¿País que se encuentra al este de Chile?', 1,'Argentina', 'Brasil', 'México', 'Panamá', 0),
('Según el refran, ¿quien es ciego?', 1,'La tristeza', 'El amor', 'La vecina', 'El cirujano', 1),
('En que país nació el autor Gabriel García Márquez', 1,'Venezuela', 'Ecuador', 'Bolivia', 'Colombia', 3),

--Questions from level 2
('¿Cómo se llama el libro sagrado de la cultura Islámica?', 2,'Talmud', 'Torá', 'Corán', 'Kojiki', 2),
('¿Se dice que una persona está famelica cuando está?', 2,'Hambrienta', 'Cansada', 'Enamorada', 'Asustada', 0),
('¿El albinismo se manifiesta por carencia de?', 2,'Calcio', 'Pigmentación', 'Sol', 'Oxigeno', 1),
('¿El timbal es un instrumento de?', 2,'Cuerdas', 'Viento Metal', 'Percusión', 'Viento Maderas', 2),
('En la mitología griega, ¿Eros es considerado el dios del?', 2,'Odio', 'Miedo', 'Trabajo', 'Amor', 3),

--Questions from level 3
('¿Cuál de estos animales es un rumiante?', 3,'Ardilla', 'Caracol', 'Loro', 'Vaca', 3),
('¿Se dice que una persona está famelica cuando está?', 3,'Hambrienta', 'Cansada', 'Enamorada', 'Asustada', 0),
('¿Cuál es el significado del prefijo "epi-"?', 3,'Alrededor', 'Episodio', 'Sobre', 'Inferior', 1),
('¿Qué parte del cuerpo se examina en una encefalografía?', 3,'Ovarios', 'Cráneo', 'Pulmones', 'Hígado', 1),
('El Tour de Francia es una famosa competencia de:', 3,'Golf', 'Fútbol', 'Ciclismo', 'Automovilismo', 2),

--Questions from level 4
('¿Qué clase de palabra es "según"?', 4,'Verbo', 'Preposición', 'Adjetivo', 'Sustantivo', 1),
('¿Qué elemento químico es representado por el símbolo "P"?', 4,'Bromo', 'Boro', 'Rubidio', 'Fósforo', 3),
('¿Cuál de estos nombres no aparece en el título de una obra de Shakespeare?', 4,'Hamlet', 'Romeo', 'Darren', 'Macbeth', 2),
('¿Cuál es la capital de Canadá?', 4,'Toronto', 'Vancouver', 'Ottawa', 'Montreal', 2),
('¿Cuántas franjas tiene la bandera de Estados Unidos?', 4,'13', '8', '12', '15', 0),

--Questions from level 5
('¿Dónde se desarrolló la civilización etrusca?', 5,'Península Itálica', 'Caucaso', 'Norte de África', 'Extremo Oriente', 0),
('Es el espacio de tiempo durante el cual un Estado no tiene soberano', 5, 'Internodio', 'Interregno', 'Internuncio', 'Intermezzo', 1),
('¿Qué lee un quiromante para predecir el futuro?', 5,'El café', 'Los caracoles', 'Las líneas de la mano', 'El tabaco', 2),
('¿Cuántas zonas horarias tiene Rusia?', 5,'7', '8', '13', '11', 3),
('¿Cuántos kilometros de largo tiene aproximadamente la cordillera de Los Andes?', 5,'3500', '7000', '12000', '16000', 1);

CREATE TABLE users(
    user_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(50) UNIQUE NOT NULL ,
    userLevel TINYINT(3) NOT NULL DEFAULT 1
);
