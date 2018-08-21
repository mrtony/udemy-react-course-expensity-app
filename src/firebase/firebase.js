import firebase from 'firebase/app';
import database from 'firebase/database';
import auth from 'firebase/auth';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: 'select_account'
});

const db = firebase.database();

// //新增/覆寫單一資料-使用set()
// //set()沒有回傳(void)
// const profileRef = db.ref('/profile');
// profileRef.set({
//   name: 'Tony',
//   age: 18,
//   auth: 'admin'
// }).then(res => console.log('set data return', res));

// //讀出單一資料
// //回傳: key, ...
// const profile = profileRef.once('value', snapshot => {
//   console.log('profile', snapshot.val());
// }).then(res => console.log('read a ref data return', res));

// //寫入list
// const messagesRef = db.ref('/messages');
// messagesRef.push({
//   createdAt: +moment(),
//   message: 'test'
// }).then(ref => console.log(ref.key));

// //讀出list
// //output:
// //LKHfyQmjZh0mWooBv6
// //createdAt:1534690584304
// //message:"test"
// messagesRef.once('value', snapshot => {
//   snapshot.forEach(childSnapshot => {
//     console.log('key', childSnapshot.key);
//     console.log('value', childSnapshot.val());
//   });
// });


export { firebase, googleAuthProvider, db as default};


// const handleExpensesUpdate = snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot
//     });
//   });
//   console.log('expenses are:', expenses);
// };

// db.ref('expenses')
// .on('value', handleExpensesUpdate);

// db.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// db.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// db.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// const expensesRef = db.ref('expenses');
// expensesRef.push({
//   description: 'Gas bill',
//   amount: 10000,
//   note: 'May gas bill',
//   createdAt: +moment().subtract(4, 'day')
// });
// expensesRef.push({
//   description: 'Water bill',
//   amount: 20000,
//   note: 'May water bill',
//   createdAt: +moment()
// });
// expensesRef.push({
//   description: 'Car insurence',
//   amount: 1400000,
//   note: 'Honda car',
//   createdAt: +moment().add(4, 'day')
// });



// const onValueChange = db.ref().on('value', snapshot => {
//   const {name, job: {company, title}} = snapshot.val();
//   console.log(`${name} is a ${title} in ${company}`);
// }, e => {
//   console.log('Error with data fetching', e);
// });

// read - using on with off
// const onValueChange = db.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log((val));
// }, e => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   db.ref().off('value', onValueChange);  
// }, 2000);


// read - using once
// db.ref('location').once('value')
// .then(snapshot => {
//   const val = snapshot.val();
//   console.log((val));
// }).catch(error => {
//   console.log('Fetch data fail!', error);
// });

// db.ref().set({
//   name: 'Jimmy Chen',
//   age: 14,
//   stressLevel: 9,
//   job: {
//     company: 'Amazon',
//     title: 'Software Developer'
//   },
//   location: {
//     city: 'Taipei',
//     country: 'ROC'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch(error => {
//   console.log('Data save fail!', error);
// });

// db.ref('attributes').set({
//   height: 170,
//   weight: 70
// }).then(() => {
//   console.log('attributes is saved!');
// }).catch(error => {
//   console.log('attributes save fail!', error);
// });

// update
// db.ref().update({
//   name: 'Tony',
//   'location/city': 'New York'
// });

// remove
// const isSingle = db.ref('isSingle');
// isSingle.remove()
// .then(() => {
//   console.log('isSingle is removed!');
// }).catch(error => {
//   console.log('remove isSingle fail!', error);
// });

  