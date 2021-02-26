const listItemSchema = require('./Models/ListItemSchema.js');

var query = '{ hello }';

graphql(listItemSchema, query).then((result) => {
  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);
});