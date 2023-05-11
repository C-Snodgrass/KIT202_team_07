
CREATE TABLE tags (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    tagName VARCHAR(20)
);

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    role VARCHAR(10)
);

-- this inplimentation can only have one "author / user" per blog
CREATE TABLE blogs (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(3000),
    title VARCHAR(50),
    author INTEGER,
    date DATE,
    FOREIGN KEY (author) REFERENCES users(id)
);

-- many blogs can have many tags so the "bridging" table
CREATE TABLE blog_tags (
  blogId INTEGER,
  tagId INTEGER,
  FOREIGN KEY (blogId) REFERENCES blogs(id),
  FOREIGN KEY (tagId) REFERENCES tags(id),
  PRIMARY KEY (blogId, tagId)
);

-- don't need to pass an id in as auto increment??
INSERT INTO users (firstName, lastName, role) VALUES
('Paul', 'McCartney', 'admin'),
('George', 'Harrison', 'member'),
('Ringo', 'Starr', 'author'),
('John', 'Lennon', 'member');

-- the author should be referencing the users 
INSERT INTO blogs (content, title, author, date) VALUES
('This is the content of blog post #1', 'Blog Post #1', 1, '2023-05-01'),
('This is the content of blog post #2', 'Blog Post #2', 2, '2023-05-02'),
('This is the content of blog post #3', 'Blog Post #3', 3, '2023-05-03'),
('This is the content of blog post #4', 'Blog Post #4', 4, '2023-05-03'),
('This is the content of blog post #5', 'Blog Post #5', 1, '2023-05-03'),
('This is the content of blog post #6', 'Blog Post #6', 2, '2023-05-03'),
('This is the content of blog post #7', 'Blog Post #7', 3, '2023-05-03'),
('This is the content of blog post #8', 'Blog Post #5', 4, '2023-05-03'),
('This is the content of blog post #9', 'Blog Post #9', 1, '2023-05-03'),
('This is the content of blog post #10', 'Blog Post #10', 2, '2023-05-03');

-- Insert sample data into the 'tags' table
INSERT INTO tags (tagName) VALUES
('Romance'),
('Music'),
('Horror'),
('Science Fiction'),
('technology'),
('fashion'),
('food'),
('travel'),
('sports'),
('music');

-- Insert sample data into the 'blog_tags' table
INSERT INTO blog_tags (blogId, tagId) VALUES
-- tags for table one
(1, 1),
(1, 2),
-- tags for table two
(2, 2),
-- tags for table three
(3, 1),
(3, 2),
(3, 3),
-- tags for table four
(4, 4),
-- tags for table five 
(5, 8),
(5, 9),
(5, 10),
-- tags for table six 
(6, 7),
(6, 3),
(6, 5),
(6, 9),
-- tags for table seven 
(7, 5),
(7, 3),
(7, 9),
(7, 2),
(7, 1),
(7, 10),
-- tags for table eight 
(8, 8),
(8, 9),
(8, 6),
(8, 5),
(8, 3),
-- tags for table nine 
(9, 2),
(9, 8),
-- tags for table ten 
(10, 4),
(10, 5);