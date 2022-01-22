# <img align="left" width="44" src="https://img.icons8.com/color/50/000000/gmail-new.png"/> Gmail Clone

This is a clone of the Gmail web app. It was built using ReactJS, Redux and Firebase.

#### ✅ Link: https://mailclone-ac.web.app

## 📜 Table of contents

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## 📝 Overview

### Introduction

- This web app allows the user to register/ sign in with their google accounts.
- User can then send mails using the compose button.
- User can see all mails on their feed.

### Screenshot

<img src="https://user-images.githubusercontent.com/59930625/150648016-f5be5c4f-9ed9-4507-856e-6b8c8b205d55.png">
<br>

## 💡 My process

### Built with

- ReactJS
- React Redux
- Firebase Authentication
- Firebase Firestore
- Material UI Components
- react-hook-form for Validation

### What I learned

#### 😎 Proud of this code:

Showing different formats of timings (day or time) on the mail list depending on whether the mail arrived today or not.

```js
const getMailTiming = (timestamp) => {
  const date = new Date(timestamp?.seconds * 1000).toUTCString().slice(5, 11);
  const time = new Date(timestamp?.seconds * 1000).toUTCString().slice(17, 22);
  const currentDate = new Date().toUTCString().slice(5, 11);

  if (date === currentDate) {
    // today's mail - show time eg: 15:56
    return time;
  } else {
    // old mail - show date eg: Jan 22
    return date;
  }
};

<div className="emailList__list">
  {emails.map((email) => (
    <EmailRow
      id={email.id}
      title={email.data.to}
      subject={email.data.subject}
      description={email.data.message}
      time={getMailTiming(email.data.timestamp)}
    />
  ))}
</div>;
```

## ⭐ Author

- GitHub - [@anushkachauhxn](https://github.com/anushkachauhxn)
- Behance - [@anushka_creates](https://www.behance.net/anushka_creates)

- LinkedIn - [@anushka-chauhan](https://www.linkedin.com/in/anushka-chauhan)
- Twitter - [@anushka_creates](https://twitter.com/anushka_creates)
