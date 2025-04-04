const express =require(('express'))

const app=express();

const db=require('./models');
const cors=require('cors');
app.use(express.json());
app.use(cors());

const postRouter=require('./routes/Posts');
app.use('/posts',postRouter);



db.sequelize.sync().then(()=>{
    console.log('db has been synced');

    app.listen(3001,()=>{
        console.log('server is running on port 3001');
    })
    
    
})


