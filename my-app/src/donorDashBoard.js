import { Hono } from "hono";
import { v4 as uuidv4 } from "uuid";

const app = new Hono ();

let checkUpAppointment = [];

let donor = [{
    userName : "Sajedullah Aref",
    bloodType : "O+ve",
    totalDonation:"12",
    lastDonation : "2 months ago",
    livesSaved : "32",
}];

///Donor
app.get('/donor',async (c)=>{
    return c.json(donor)
})




//Donor Test/Check-Up Request 

app.post('/donor/form',async(c)=>{
    const {bloodType, testType, symptoms, bloodBank, date,comments} = await c.req.json();

    const newCheckUpAppointment = {
        id : uuidv4(),
        bloodType,
        testType,
        symptoms,
        bloodBank,
        date,
        comments,
    }

    checkUpAppointment.push(newCheckUpAppointment);

    return c.json(newCheckUpAppointment);
})

//Blood Donation Appointment

let bloodDonationAppointment = [];

app.post('/donor/appoint',async(c)=>{
    const {eligibility,bloodBank,date,startTime,endTime,additionalInfo} = await c.req.json();

    const newBloodDonationAppointment = {
        id : uuidv4(),
        eligibility,
        bloodBank,
        date,
        startTime,
        endTime,
        additionalInfo,
    }

    bloodDonationAppointment.push(newBloodDonationAppointment);
    return c.json(newBloodDonationAppointment)
})

///checkUpResult

let checkUpResult = [
    {
        location : "Dhaka Medical College Hospital",
        checkUpDate : "5/1/2025",
        healthSummary : {
            bloodPressure : "120/80 mmHg",
            hemoglobin :"14.5 g/dl",
            bloodSugarLevel : "Normal",
            otherNotes : "Healthy and Fit for blood donation."
        }
    }
]


app.get('/donor/checkupresult', async(c)=>{
    return c.json(checkUpResult)
})

///Available Services

let availableServices= [
    {
        title:"Basic Health Checkup",
        place: "Dhaka Medical College Hospital",
        points: 100,
    },
    {
        title:"Dental Cleaning",
        place:"Bangladesh Dental Society",
        points: 150,
    },
    {
        title:"Eye Examination",
        place:"Ispahani Islamia Eye Institute and Hospital",
        points: 120,
    },
    {
        title:"Nutrition Consultation",
        place:"National Institute of prevention and Social Medicine",
        points: 80,
    },
]

app.get('/donor/services', async (c)=>{
    return c.json(availableServices)
})



app.notFound((c)=>{
    return c.json("Not found what you are expecting 404",404)
})

export default  app;