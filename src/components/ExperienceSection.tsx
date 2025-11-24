import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    role: 'Lead Data Scientist',
    company: 'Horizon Tech Services',
    location: 'Islamabad Pakistan',
    period: 'Oct 2023 – Present',
    achievements: [
      'Leading a Generative AI project implementing Stable Diffusion models for text-to-image generation, enhancing the fidelity and creativity of visual outputs based on textual prompts.',
      'Fine-tuned large language models (LLMs) with domain-specific knowledge bases to align responses with client-specific areas of interest, leveraging advanced Generative AI techniques, including Retrieval-Augmented Generation (RAG).',
      'Developed an advanced WhatsApp-based chatbot leveraging GPT-4 and generative Al, designed to act as a friendly companion. Utilized Firebase for managing chat history and WhatsApp webhooks for seamless integration.',
       'Leveraged advanced Computer Vision (CV) techniques for image processing, object detection, image recognition, and remote sensing. Led supervised fine-tuning of YOLO model to enhance task-specific performance and applicability.',
        'Effectively communicated complex findings to diverse stakeholders, from executives to non-technical teams. Skillfully utilized storytelling techniques and visualizations to convey insights, ensuring actionable recommendations were clearly understood and embraced.'
    ]
  },
  {
    role: 'Machine Learning Engineer',
    company: 'PinVan Technologies',
    location: 'Peshawar Pakistan',
    period: 'Sep 2021 – Sep 2023',
    achievements: [
      'Lead a high-impact project for one of Pakistan largest corporations, leveraging advanced Natural Language Processing (NLP) techniques to extract actionable business insights from complex real-world data. Led supervised fine-tuning of the state-of-the-art Open AI’s whisper model, enhancing its applicability to intricate audio recordings.',
      'Trained and Deployed a Machine learning model in Tensorflow that combined 3 state of the art face recognition models (VggFace, Arcface, Facenet) using backbones (Resnet and Inception-Resnet) in a way that a small dense neural network combines the output of these models.',
      'Containerizing the solution to scale the model and deploy on Cloud Run-GCP.',
      'Automated the end to end machine learning pipeline processes including optimized inference and model output data storage. App is live on Playstore: https://cutt.ly/WQyQXn4',
    ]
  },
  {
    role: 'Machine Learning Engineer',
    company: 'National Center For Big Data & Cloud Computing (NCBC)',
    location: 'University of Engineering & Technology - UET',
    period: 'Aug 2020 – Aug 2021',
    achievements: [
      'Worked on a project funded by Pakistan Tobacco board. To analyze and estimate the production of tobacco growth in Pakistan using Satellite imagery. LSTM-based approach for fusing PlanetScope and Sentinel-2 satellite imagery.',
      'Responsible for research on how to improve detection and classification of major crops of Pakistan using Satellite imagery. Published a research paper for PLOS ONE journal.',
      'Applied Deep Siamese Convolutional Networks to create a robust biometric authentication framework, exploring signal preprocessing, feature engineering, and model architecture design tailored to neurophysiological data.',
      
    ]
  }
];

const certifications = [
  'Generative AI with Large Language Models – DeepLearning.AI 2025',
  'IBM Professional Data Analyst Certification – IBM 2025',
  'Machine Learning Specialization – Deeplearning.AI, Stanford University 2025'
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold mb-16 text-center glow-text"
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all perspective-card group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-bold glow-text">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-4 bg-card/30 backdrop-blur border-border hover:border-secondary/50 transition-all h-full">
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
