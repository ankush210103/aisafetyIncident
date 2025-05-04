import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Seed initial data if needed
    await seedInitialData();
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
};

const seedInitialData = async () => {
  const IncidentModel = mongoose.model('Incident');
  const count = await IncidentModel.countDocuments();
  
  if (count === 0) {
    const initialIncidents = [
      {
        title: "Unauthorized data access",
        description: "AI system accessed user data without proper authorization.",
        severity: "High"
      },
      {
        title: "Bias in hiring algorithm",
        description: "Algorithm showed gender bias in resume screening.",
        severity: "Medium"
      }
    ];
    
    await IncidentModel.insertMany(initialIncidents);
    console.log('Initial incident data seeded');
  }
};

export default connectDB;