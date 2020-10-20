# STRV-Test

For this project, I discovered firebase environment and tried to use it at its maximum potential, with database, functions and hosting. 

```
Language: Javascript
Runtime: Node.js
Framework: Express 
Database: Firebase realtime database
Hosting: Firebase hosting
```

**Problems I had to deal with:**

- my function not being a single file, I had to initiate manualy the `FIREBASE_CONFIG` env variable to initiate the firebase app
- is using `firebase hosting + Cloud functions`, the only accepted cookie name is `__session`, which is [not documented](https://stackoverflow.com/a/44935288/13566406) 

## Functionalities

- Register
- Login 
- Add contact

### Register

- saved in db
- Directly login after register
- name + psw only

### Adding a contact

- saved in db
- First name, Last name, Phone number, Address (text)

## Technos

- NodeJS - Express
- Firebase
- Mocha
