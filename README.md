# Joypad Judge

<img width="100%" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTc1Y2l5Z2gycnMzcXN6cnVpcTlydTlvdmd0aWplY3ExOHRzeHJ0OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ardMfW1w53UvC/giphy.gif" alt="An pixel art animation of a duck being shot and a dog jumping after it. From the old, retro NES game Duck Hunt">

Become your own video/computer game critic! Create a list of the games you've conquered, rate them based on your experience, and leave detailed reviews.

## 🚀 Setup

📋 **Requirements**

- Angular CLI
- Node.js *(see exact version in `./.nvmrc`)*
- npm

🔥 This project requires you setting up your very own Firebase project. Once you've done that, you'll need to configure the following:

- A Firestore Database *(look into 'Storage')*.
  - Start a collection named `reviews` containing the fields `game` *(string)* and `text` *(string)*.
- Add a web app of your project.
  - Copy your given SDK credentials and paste them in accordingly into `src/env-example.ts`. Once finished, rename `env-example.ts` into `env.ts`.

Create a new shell session and `cd` into root directory.

```shell
# Install dependencies.
$ npm i
# Create a bundle of the project and start up a server.
$ npm run start
```

In the output you should find a url from where the project is running.
Visit the given url from your browser. Now you should be able to interact with the project as intended.
