import {uuid as uuidv4} from "uuid";
const app = new Hono();

let bloodBank = {
    bloodBankName : "Blood Bank",
    bloodBankLocation : "Dhaka",
    bloodBankContact : "01700000000",
    bloodBankEmail : "example@gmail.com",
    tests:{
        bloodTest : "1000",
        bloodGroupTest : "500",
        himoglobinTest : "300",
        ToxonomyTest : "200",
        plateletTest : "400",
    },
}


app.get('/bloodbank',async(c)=>{
    return c.json(bloodBank);
})

let labReport = [
    {
        userId: "1",
        userName: "Sajedullah Aref",
        bloodType: "O+ve",
        img: "https://www.exaple.com",
    },
    {
        userId: "2",
        userName: "Aref",
        bloodType: "O+ve",
        img: "https://www.exaple.com",
    },
];

app.post('/bloodbank/update',async(c)=>{
    const {userId,userName,bloodType,img} = await c.req.json();

    const newLabReport = {
        userId:uuidv4(),
        userName,
        bloodType,
        img,
    }

    labReport.push(newLabReport);

    return c.json(newLabReport);
})

app.get('/bloodbank',async(c)=>{
    return c.json(labReport);
})

let bloodRequest = [
    {
        userName : "Sajedullah Aref",
        bloodType : "O+ve",
        urgency : "High",
    },
    {
        userName : "Tawsif",
        bloodType : "O+ve",
        urgency : "High",
    },
]


app.get('/bloodbank/requests',async(c)=>{
    return c.json(bloodRequest);
})

let bloodStock =[
    {
        bloodType : "O+ve",
        stock : "100",
    },
    {
        bloodType : "A+ve",
        stock : "200",
    },
]

app.get('/bloodbank/inventory',async(c)=>{
    return c.json(bloodStock);
})

app.post('/bloodbank/inventory',async(c)=>{
    const {bloodType,stock} = await c.req.json();

    const newBloodStock = {
        bloodType,
        stock,
    }

    bloodStock.push(newBloodStock);

    return c.json(newBloodStock);
})

let bloodHospitalRequest = [
    {
        hispitalName : "Dhaka Medical College", 
        bloodType : "O+ve",
        urgency : "High",
        status : "Pending",
        quantity : "10",
    },
    {
        hispitalName : "Dental Medical College", 
        bloodType : "B+ve",
        urgency : "High",
        status : "Pending",
        quantity : "30",
    },
    {
        hispitalName : "Kurmitula Medical College", 
        bloodType : "A+ve",
        urgency : "low",
        status : "Pending",
        quantity : "100",
    },
]


app.get('/bloodbank/blood', async(c)=>{
    return c.json(bloodHospitalRequest);
})

let testPending = [
    {
        userName : "Sajedullah Aref",
        testName : "Blood Test",
        status : "Pending",
        urgency : "High",
    },
    {
        userName : "Aref",
        testName : "Himoglobin Test",
        status : "Pending",
        urgency : "Low",
    },
    {
        userName : "Tawsif",
        testName : "Blood Test",
        status : "Pending",
        urgency : "High",
    },
    {
        userName : "Itachi Uchiha",
        testName : "Blood Test",
        status : "Pending",
        urgency : "Medium",
    },

]

app.get('/bloodbank/test_req', async(c)=>{
    return c.json(testPending);
})