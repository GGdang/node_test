const express = require("express");
const app = express();

app.use("/", (req, res)=>{
  res.send("qwertyuio");
  res.end();
})
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});