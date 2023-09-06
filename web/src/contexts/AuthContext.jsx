import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(nick, email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
    .then((userCredentials)=>{
      if(userCredentials.user){
        userCredentials.user.updateProfile({
          displayName: nick
        })
        
        db.collection("Users").doc(userCredentials.user.uid)
        .set({
          uid: userCredentials.user.uid,
          Nick: nick,
          Email: email,
          Admin: false
        })
        .catch((e) => console.log(e))
      }
    })
    .catch((e) => {
      throw new Error(e.message);
    });
  }

  async function login(text, password) {
    const regex = /^.*@.*\..+$/
    if (!text.match(regex)) { // username
      await db.collection("Users")
      .where("Nick", "==", text)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) return auth.signInWithEmailAndPassword(querySnapshot.docs[0].data().Email, password)
        else throw new Error("Username or Email is wrong, please try again.")
      })
    }
    else return auth.signInWithEmailAndPassword(text, password) // email
  }

  function logout() {
    return  auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateDisplayName(name) {
    db.collection("Users").where("Nick", "==", currentUser.displayName).get()
    .then(doc => {
      doc = doc.docs[0]
      let data = doc.data()
      data.Nick = name

      db.collection("Users").doc(doc.id)
      .update(data)
      .catch((e) => {
        alert("error while changing priviledges:")
        console.log(e)
      })
    })
    
    return currentUser.updateProfile({ displayName: name })
  }

  function updateEmail(email) {
    db.collection("Users").where("Email", "==", currentUser.email).get()
    .then(doc => {
      doc = doc.docs[0]
      let data = doc.data()
      data.Email = email

      db.collection("Users").doc(doc.id)
      .update(data)
      .catch((e) => {
        alert("error while changing priviledges:")
        console.log(e)
      })
    })

    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateDisplayName,
    updateEmail,
    updatePassword
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}