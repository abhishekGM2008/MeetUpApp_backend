const { initialData } = require("./db/db.connect")
initialData()
const Event = require("./models/event.models")

const express = require("express")
const app = express()
app.use(express.json())

const cors = require("cors")
const corsOptions = {
    origin: "*",
    Credentials: true,
    optionSuccessStatus: 200
} 
app.use(cors(corsOptions))

const PORT = 3000
app.listen(PORT, () => {
    console.log("Server running on", PORT)
})

//function to create new event..

const createEvent = async (newEvent) => {
    try {
        const newEventCreated = new Event(newEvent)
        const savedNewEvent = await newEventCreated.save()
        return savedNewEvent
    }
    catch(error){
        console.log("error occured while creating new Event" , error)
    }
}

app.post("/newEvent" , async (req, res) => {
    try{
        const newEventAdded = await createEvent(req.body)
        if(newEventAdded){
            res.status(201).json({message: "Event added successfully" , event: newEventAdded})
        } else {
            res.status(404).json({error: "Event Not Found."})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to add new event."})
    }
})

app.get("/", (req, res) => {
    res.send("Hi , Welcome to Event App..")
})

//function to get all Event from Database...

const readAllEvents = async () => {
    try{
        const eventFound = await Event.find()
        return eventFound
    }
    catch(error){
        console.log("error occured while reading all Events", error)
    }
}

app.get("/Events" , async (req, res) => {
    try{
        const allEvents = await readAllEvents()
        if(allEvents.length > 0){
            res.json(allEvents)
        } else {
            res.status(404).json({error: "No Events are found.."})
        }
    }
    catch(error){
        res.status(500).json({error: "Failed to fetch the Events"})
    }
})