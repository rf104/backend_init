import {uuidv4 as uuid} from "uuid";

const app = new Hono();

let medical = {
    medicalName : "Medical",
    medicalLocation : "Dhaka",
    medicalContact : "01700000000",
    medicalEmail : "example@gamil.com",
    amountOfBloodCollectedToday : "1000",
}

app.get('/medical',async(c)=>{
    return c.json(medical);
});

let bloodRequest = [
    {
        reqId : "1",
        bloodTypeNeeded : "O+ve",
        bloodAmountNeeded : "2",
        urgency : "High",
        testLocation : "Dhaka",
        requireDate : "12/12/2025",
        reasonForRequest : "Accident",
        contact : "01700000000",
    },
    {
        reqId : "2",
        bloodTypeNeeded : "O+ve",
        bloodAmountNeeded : "2",
        urgency : "High",
        testLocation : "Dhaka",
        requireDate : "12/12/2025",
        reasonForRequest : "Accident",
        contact : "01700000000",
    },
    {
        reqId : "3",
        bloodTypeNeeded : "O+ve",
        bloodAmountNeeded : "2",
        urgency : "High",
        testLocation : "Dhaka",
        requireDate : "12/12/2025",
        reasonForRequest : "Accident",
        contact : "01700000000",
    },
 ]

app.post("/medical/request", async (c) => {
    const {bloodTypeNeeded, bloodAmountNeeded, urgency, testLocation, requireDate, reasonForRequest, contact} = await c.req.json();

    const newBloodRequest = {
        reqId : uuid(),
        bloodTypeNeeded,
        bloodAmountNeeded,
        urgency,
        testLocation,
        requireDate,
        reasonForRequest,
        contact,
    }

    bloodRequest.push(newBloodRequest);

    return c.json(newBloodRequest);
});  


let offerList = [
    {
        offerId : "1",
        service : "Blood Test",
        discountPercentage : "10%",
        expireDate : "12/12/2025",
    },
    {
        offerId : "2",
        service : "Blood Test",
        discountPercentage : "10%",
        expireDate : "12/12/2025",
    },
    {
        offerId : "3",
        service : "Blood Test",
        discountPercentage : "10%",
        expireDate : "12/12/2025",
    },
]

app.post("/medical/offer", async (c) => {
    const {service, discountPercentage, expireDate} = await c.req.json();

    const newOffer = {
        offerId : uuid(),
        service,
        discountPercentage,
        expireDate,
    }

    offerList.push(newOffer);

    return c.json(newOffer);
});

app.get("/medical/offer", async (c) => {
    return c.json(offerList);
});