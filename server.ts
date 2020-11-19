import app from './app'

const port = parseInt(process.env.PORT || '4200')
const server = new app().Start(port)
  .then(port => console.log(`Server running on port ${port}`))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });

export default server;

process.on("SIGINT", ()=>{
  process.exit(0)
})

process.on("SIGTERM", ()=>{
  process.exit(0)
})