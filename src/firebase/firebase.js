import firebase from 'firebase/app';
import database from 'firebase/database';
import moment from 'moment';

const config = {
  apiKey: "AIzaSyAbJEDf5nvg5qzIHyCAljbTt4kGPRQG4R0",
  authDomain: "expensity-92a10.firebaseapp.com",
  databaseURL: "https://expensity-92a10.firebaseio.com",
  projectId: "expensity-92a10",
  storageBucket: "expensity-92a10.appspot.com",
  messagingSenderId: "128856949432"
};

firebase.initializeApp(config);

const db = firebase.database();




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

db.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

db.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

db.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
});
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

  