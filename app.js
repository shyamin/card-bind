var express = require('express');
var app = express();

/** pre adminapp configurations before routes */
require('./appconfig').pre(app);

// require('./controllers').pre();

/** config app and adding plugins */
require('./appconfig')(app, express);

/** routing point*/

app.use('/api/v1/', require('./routes/index'));


require('./appconfig').post(app);
print("GET => http://localhost:3000/api/v1/cat/bind")
print("GET => http://localhost:3000/api/v1/cat/bind?greeting=Hi&&who=Sha&&width=400&&height=500&&color=red&&format=jpeg&&size=100")
print("GET => http://localhost:3000/api/v1/swagger/ui")
module.exports = app;