
// interface User {
//   name: String;
//   email:  String;
//   password: Number;
// }

export default function Home() {
  return (
    <main>
      <div className="users">
    <div className="container">
      <section>
        <h5 className="title">New User</h5>
        <form>
          <input type="text" placeholder="Name" v-model="form.name" />
          <input type="text" placeholder="E-mail" v-model="form.email" />
          <button type="submit">Add</button>
        </form>
      </section>
      <section>
        <h5 className="title">User List</h5>
        <ul>
          <li v-for="(user, index) in users">
            <p></p>
            <small></small>
            <a className="destroy"></a>
          </li>
        </ul>
      </section>
    </div>
  </div>
    </main>
  )
}
