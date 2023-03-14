import mongoose from "mongoose";

type connectionProps = {
  isConnected: any
}

const connection: connectionProps = {} as connectionProps

export async function connectDB(){
  if(connection.isConnected){
    console.log('Aready connected to database')
    return;
  }

  if(mongoose.connections.length>0){
    connection.isConnected=mongoose.connections[0].readyState
    if(connection.isConnected===1){
      console.log("Use previus connection to the database")
      return;
    }
    await mongoose.disconnect()
  }

  const db = await mongoose.connect(process.env.MONGODB_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log("New connection to the database.")
  connection.isConnected = db.connections[0].readyState
}


export async function disconnectDB(){
  if(connection.isConnected) {
    if(process.env.NODE_ENV === "production"){
      await mongoose.disconnect();
      connection.isConnected = false;
    } else{
      console.log("not disconnecting from the database.")
    }
  }
}
