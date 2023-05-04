naming convention camelCase

in VS Code hit (Ctrl+Shift+V) to open a new window which will render this file

### blogs 

| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| id (PK) | int | auto generated | primary key, blog id |
| content | varchar | 3000 (500 word) | the content / text for the blog post |
| title | varchar | 50 characters | title of the blog post |
| author | varchar | 50 characters | author name|

author is perhaps replaced by user? if we want the users to also be the authors.
i.e. blog will have author

### tags 

| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| id (PK) | int | auto generated | primary key, tag id |
| tagName | varchar | 20 characters | the that name |

blog has many tags
as each tag name will be unique maybe the name can be the PK?

#### user

| Column Name | Data Type | size | Description |
| --- | --- | --- | --- |
| id (PK) | int | auto generated | primary key, user id |
| firstName | varchar | 50 characters | user first name |
| lastName | varchar |  50 characters | user last name |
| member | int | 1 | 1 or 0 for yes or no |
| admin | int | 1 | 1 or 0 for yes or no |

as there are only members and admin these could be rolled into one?


---

## Embelishment goals

- Allow the member / author of a blog post to edit it i.e. restrict editing to the author
- When submitting a blog post autor must choose from a list of pre defined tags
    - Maybe we can allow them to add new ones?
    - Or can only admin add new ones?
- Archive, search by tag