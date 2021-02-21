const http = require('./app');
const PORT = 3001;

http.listen(process.env.PORT || PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
