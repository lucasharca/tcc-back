import { createConnection } from 'typeorm';



export class DBConnection {
  async connect() {
    try {
      await createConnection().then(e => {
        console.log("connected to DB");
        setTimeout(() => {
          e.runMigrations().catch(err => {
            console.log("error running migrations:", err.message)
            return
          })
        }, 10000);
      })
  } catch(err) {
    throw new Error(err)
  }

}
}

