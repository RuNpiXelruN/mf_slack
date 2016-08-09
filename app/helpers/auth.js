export default function auth () {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'James',
        email: 'james.winestock@mentallyfriendly.com',
        avatar: '',
        uid: 'james123',
      })
    }, 1000)
  })
}

export function checkIfAuthed(store) {
  return store.getState().isAuthed
}

export function logout () {
  console.log('Logged out')
}
