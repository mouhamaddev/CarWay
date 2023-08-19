import * as firebase from 'firebase';

const firebaseConfig = {

};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
