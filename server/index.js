const http = require('./app');
const PORT = 8080;

http.listen(process.env.PORT || PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
