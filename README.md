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
- when using `firebase hosting + Cloud functions`, the only accepted cookie name is `__session`, which is [not documented](https://stackoverflow.com/a/44935288/13566406) 

## Usage

### Prod

https://strv-addressbook-duverney.web.app

### Local emulator

```
> git clone https://github.com/EtienneDuv/STRV-Test.git 
> cd STRV-Test
> npm i
> cd functions
> npm i
```

At this point, you will need to add `.runtimeconfig.js` file in `/functions` directory.
I should have sent it to you in a secure way.

```
> npm run emul
```

### Testing

- First, run the app locally 
- run `npm run test`

### Future upgrades

Using session cookie to store userId, I could do better testing.
Also the prod application would not stay connected for everyone.

## Functionalities

- Register
- Login 
- Add contact

**Register**

- saved in db
- Directly login after register
- name + psw only

**Adding a contact**

- saved in db
- First name, Last name, Phone number, Address (text)

**Technos**

- NodeJS - Express
- Firebase
- Mocha
