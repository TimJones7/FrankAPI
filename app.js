const express = require("express");
const service = express();

service.get("/tickets", (req, res) => {
   //return all of the tickets
   res.send("Reading Tickets.");
});

service.get("/tickets/:id", (req, res) => {
   //return one single ticket
   //get information from url parameters
   const { id } = req.params;
   res.send(`Reading Ticke: ${id}.`);
});

service.post("/tickets", (req, res) => {
   //create a ticket
   res.send("Creating a Ticket.");
});

service.listen(3000, () => {
   console.log("This service is listening to Port: 3000.");
});
