const http = require("http") //importando biblioteca http do node
const app = require("./config/express")(); //importando aplicação 

http.createServer(app).listen(app.get("port"), function(){
  console.log("Express Server escutando na porta " + app.get("port"));
});
