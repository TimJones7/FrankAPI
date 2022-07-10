const express = require("express");
const service = express();

//Configure Node JS so it knows what endpoints to hit on WebAPI Request
service.get("/tickets", (req, res) => {
   //return all of the tickets

   //Authorization

   //

   res.send("Reading Tickets.");
});

/*
Use method as example of what a framework is going to be doing for us,
so we as developers can focus on the business logic
*/
service.get("/tickets/:id", (req, res) => {
   //return one single ticket
   //get information from url parameters

   //Versioning -> allow updating while preventing cutting off old versions

   //Authorization

   //model binding -> take request and only info you need, ex. -> ID

   const { id } = req.params;

   //Model Validation -> determine whether parameter is the proper data

   //Exception Handling

   //Result Formatting
   res.send(`Reading Ticket: ${id}.`);
});

service.post("/tickets", (req, res) => {
   //create a ticket

   res.send("Creating a Ticket.");
});

service.put("/tickets", (req, res) => {
   //update a ticket

   res.send("Updating a Ticket.");
});

service.delete("/tickets/:id", (req, res) => {
   //Delete a ticket
   const { id } = req.params;
   res.send(`Deleting Ticket: ${id}.`);
});

service.listen(3000, () => {
   console.log("This service is listening to Port: 3000.");
});
