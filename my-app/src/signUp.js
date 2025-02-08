import {uuidv4  as uuid} from "uuid";

const app = new Hono();

let donor = [
    {
        id: "1",
        fullname : "Sajedullah Aref",
        email : "rf@gmail.com",
        phone: "01700000000",  
        password: "123456",
        bloodGroup: "O+ve",
        nid : {
            nidNumber : "123456789",
            // nidImg : "https://www.example.com",
            fathersName : "Md.XYZ",
            mothersName : "Mrs.XYZ",
        }
    },
]

app.post('/signup',async(c)=>{
    const {fullname,email,phone,password,bloodGroup,nidNumber,fathersName,mothersName} = await c.req.json();

    const newDonor = {
        id : uuid(),
        fullname,
        email,
        phone,
        password,
        bloodGroup,
        nid : {
            nidNumber,
            // nidImg,
            fathersName,
            mothersName,
        }
    }

    donor.push(newDonor);

    return c.json(newDonor);
})

///signUp for Inst api

let institute = [
    {
        id: "1",
        instName : "Institute",
        licenseNumber : "123456", 
        email : "inst@example.com" ,
        phone : "01700000000",
        address : "Dhaka",
        city:   "Dhaka",
        upazila: "Dhanmondi",  
        password: "123456",
        typeOfInstitute : "Hospital",
        licenseImg :{
            // licenseImg : "https://www.example.com",
        },
    },
]

app.post('/hospital_reg',async(c)=>{
    const {instName,licenseNumber,email,phone,address,city,upazila,password,typeOfInstitute} = await c.req.json();

    const newInstitute = {
        id : uuid(),
        instName,
        licenseNumber,
        email,
        phone,
        address,
        city,
        upazila,
        password,
        typeOfInstitute,
        licenseImg :{
            // licenseImg,
        },
    }

    institute.push(newInstitute);

    return c.json(newInstitute);
})