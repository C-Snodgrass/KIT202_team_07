naming convention camelCase

in VS Code hit (Ctrl+Shift+V) to open a new window which will render this file

### blogs 

| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| id (PK) | INT | auto generated | primary key, blog id |
| author (FK) | INT | id form users table | author id fk user|
| content | VARCHAR | 3000 (500 word) | the content / text for the blog post |
| title | VARCHAR | 50 characters | title of the blog post |
| date | DATE | - | date of publication |

---

### tags 

| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| id (PK) | INT | auto generated | primary key, tag id |
| tagName | VARCHAR | 20 characters | the that name |


---

### users

| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| id (PK) | INT | auto generated | primary key, user id |
| username | VARCHAR | 100 character | username, must be unique to existing usernames |  
| password | VARCHAR | 12 characters | hashed password |
| role | VARCHAR | 10 character | "author" "admin" "member" "guest", guest is defult, not logged in |
| email | VARCHAR | 255 characters | email address of user |

---

### blog_tags 
| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| blogID (FK)(PK) | INT | Foreign key | BlogID, from blog table |
| tagId INTEGER (FK)(PK) | INT | Foreign Key | tagID, from tags table |

---
