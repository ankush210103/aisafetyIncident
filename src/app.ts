import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import incidentsRouter from './routes/incidents.route';

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/incidents', incidentsRouter);

// Health check
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK' });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

export default app;