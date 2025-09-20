// models/Project.ts
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  link: String,
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
