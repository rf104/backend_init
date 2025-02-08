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

///Login api

