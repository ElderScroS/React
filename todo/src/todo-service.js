export default class TodoService {
  _base = 'http://localhost:5023/api/Todo'

  async getAll() {
      const resource = (await fetch(this._base)).json();
      return await resource;
  }

  async getById(id) {
      const resource = await fetch(`${this._base}/${id}`)
      return resource.json();
  }

  async addItem(text) {
      return await fetch(this._base,
          {
              method: "POST",
              headers: {
                  "Content-Type": 'application/json'
              },
              body: JSON.stringify({text: text})
          }
      )
  }

  async deleteItem(id) {
      return await fetch(`${this._base}/${id}`,
          {
              method: "DELETE"
          });
  }

  changeStatus(id, status) {
      fetch(`${this._base}/${id}/status`,
          {
              method: "PATCH",
              headers: {
                  "Content-Type": 'application/json'
              },
              body: status
          })
  }
}

// let service = new TodoService()
// service.getAll().then((data)=>{
//     console.log(data.items)
// })

// service.getById(2).then((task)=>{
//     console.log(task)
// })

// service.addItem("Buy Goodbye")

// service.changeStatus(3, true)
// service.changeStatus(2, false)


// fetch('http://localhost:5023/api/Todo')
// .then((result)=>{
//     return result.json()
// })
// .then((data)=>{
//     console.log(data.items[0].text)
// })

// fetch('http://localhost:5023/api/Todo/1')
// .then((result)=>{
//     return result.json()
// })
// .then((data)=>{
//     console.log(data)
// })

// fetch('http://localhost:5023/api/Todo',
//     {
//         method:"POST",
//         headers:{
//             "Content-Type":'application/json'
//         },
//         body:   JSON.stringify({text:"Hello Maga"})
//     }
//     )