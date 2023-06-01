// const names = ["charles", "susan", "billy", "jill"]


// const arr = []
// for (let i = 0; i < 500; i++) {
//   var user = {
//     username: names[Math.round(Math.random() * names.length)] + names[Math.round(Math.random() * names.length)],
//     email: `${names[Math.round(Math.random() * names.length)]}@gmail.com`
//   }
//   if(!arr.includes(user)){
//     arr.push(user)

//   }
// }

const users = [
  {
    username: "taylorswift",
    email: "tswift@gmail.com"
  },
  {
    username: "noitsbecky",
    email: "notswift@gmail.com"
  },
  {
    username: "joe",
    email: "joe@gmail.com"
  }
]

const thoughts = [
  {
    thoughtText: "I don't know about you, but I'm feeling 22",
    createdAt: "12/13/2011",
    username: "taylorswift"
  },
  {
    thoughtText: "The waitress said I looked like an American singer",
    createdAt: "6/03/2019",
    username: "noitsbecky"
  }
]

module.exports = { users, thoughts }