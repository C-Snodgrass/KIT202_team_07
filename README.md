naming convention camelCase

in VS Code hit (Ctrl+Shift+V) to open a new window which will render this file

### blogs 

| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| id (PK) | INT | auto generated | primary key, blog id |
| tagID (FK) | INT | from blog_tags table | foreign key |
| author (FK) | INT | id form users table | author id fk user|
| content | VARCHAR | 3000 (500 word) | the content / text for the blog post |
| title | VARCHAR | 50 characters | title of the blog post |
| date | DATE | - | date of publication |

author is perhaps replaced by user? if we want the users to also be the authors.
i.e. blog will have author

---

### tags 

| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| id (PK) | INT | auto generated | primary key, tag id |
| tagName | VARCHAR | 20 characters | the that name |

blog has many tags
as each tag name will be unique maybe the name can be the PK?

---

### users

| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| id (PK) | INT | auto generated | primary key, user id |
| firstName | VARCHAR | 50 characters | user first name |
| lastName | VARCHAR |  50 characters | user last name |
| role | VARCHAR | 10 character | "author" "admin" "member" "guest", guest is defult, not logged in |

---

### blog_tags 
| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| blogID (FK) | INT | Foreign key | BlogID, from blog table |
| tagId INTEGER | INT | Foreign Key | tagID, from tags table |

---

## Embelishment / requirements 


- Allow the member / author of a blog post to edit it i.e. restrict editing to the author

- When submitting a blog post autor must choose from a list of pre defined tags
    - Maybe we can allow them to add new ones?
    - Or can only admin add new ones?

- Archive, search by tag

- show 5 most resent blogs on home page

- show next 5 most resent on archive

- session tokens

change the roll in the user table

create the post, dynamic sizing box to write in
