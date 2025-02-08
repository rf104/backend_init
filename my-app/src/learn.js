import {Hono} from 'hono';
import {v4 as uuidv4 } from "uuid"
import {stream, streamText, streamSSE} from "hono/streaming"

let videos = []

const app = new Hono()

app.get('/', (c)=>(
    c.html("<h1>Welcome Aref104</h1>")
))

app.post('/video', async(c)=>{
    const {videoName,channelName,duration} = await c.req.json()

    const newVideo = {
        id:uuidv4(),
        videoName,
        channelName,
        duration,
    }
    
    videos.push(newVideo);
    return c.json(newVideo);

})

///read all Json()

app.get('/videos', (c)=>{
    return streamText(c, async(stream)=>{
        for( const video of videos){
            await stream.writeln(JSON.stringify(video));
            await stream.sleep(1000);
        }
    })
})


///read by id

app.get('/video/:id',(c)=>{
    const {id} = c.req.param();
    const video = videos.find((video)=> video.id==id)
    if(!video){
        return c.json(( {message:"video is not found"}))
    }
    return c.json(video);
})

///update
app.put('/video/:id',async(c) => {
    const {id}  = c.req.param();
    const index = videos.findIndex((video)=> video.id==id)
    if(index==-1){
        return c.json(({message:"Not Found Bro!!"}))
    }
    const {videoName,channelName,duration} = await c.req.json()
    videos[index] = {...videos[index],videoName,channelName,duration}
    return c.json(videos[index])
})

//delete by id

app.delete('/video/:id',(c)=>{
    const {id} = c.req.param();
    videos = videos.filter((video)=> video.id!==id)
    return c.json({message:"video deleted"})
})

//delete all
app.delete('/videos',(c)=>{
    videos = []
    return c.json({message:"All videos are deleted!"})
})



export default app