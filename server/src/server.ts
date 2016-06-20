
import * as express from 'express';
import * as bodyParser  from 'body-parser';
var app:express.Express = express();

app.use(bodyParser.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Coucou my first api");
});
/*
app.post('/mail/create', (req: express.Request, res: express.Response) => {
     var message = req.body;
    console.log(message);
    res.send("Coucou my first api");
});*/
app.route('/mail')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
      console.log(req.body);
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

