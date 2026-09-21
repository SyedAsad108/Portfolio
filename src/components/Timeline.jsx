import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ExternalLink, ChevronDown, Cpu, Shield, MessageSquare, MapPin, Activity, Workflow } from 'lucide-react';

const Github = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Reverse-chronological order
const timelineProjects = [
  {
    id: 'incident-graph',
    title: 'IncidentGraph',
    subtitle: 'AI-Assisted Incident Investigation Platform',
    date: 'Sep 2026',
    icon: <Activity size={20} />,
    color: '#c084fc',
    gradient: 'linear-gradient(135deg, rgba(192,132,252,0.15), rgba(192,132,252,0.03))',
    tags: ['Next.js', 'AWS Lambda', 'CloudWatch', 'EventBridge', 'DynamoDB', 'Gemini', 'Bedrock', 'Terraform'],
    description:
      'AI-assisted, project-agnostic incident investigation platform connecting telemetry, service dependencies, deployment records, and runbooks to guide engineers through an evidence-driven diagnosis workflow.',
    bullets: [
      'Detects incidents via CloudWatch alarms and EventBridge, retrieving supporting diagnostics through AWS APIs',
      'Correlates multi-dimensional evidence into diagnostic timelines, topology graphs, and suggested next steps',
      'Integrates LLM reasoning (Gemini / Bedrock) for failure analysis, explanations, and runbook knowledge retrieval',
      'Features IncidentGraph Lab to inject controlled failures into serverless WebSocket & DynamoDB workloads',
    ],
    github: 'https://github.com/SyedAsad108/IncidentGraph',
  },
  {
    id: 'videotube-devops',
    title: 'VideoTube DevOps',
    subtitle: 'Cloud-Native Video Streaming Platform',
    date: 'Sep 2026',
    icon: <Workflow size={20} />,
    color: '#2dd4bf',
    gradient: 'linear-gradient(135deg, rgba(45,212,191,0.15), rgba(45,212,191,0.03))',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Docker', 'Amazon ECS', 'AWS ALB', 'S3', 'Terraform', 'GitHub Actions'],
    description:
      'Production-oriented video streaming platform designed around a scalable, resilient, and multi-AZ distributed cloud architecture on AWS with automated CI/CD.',
    bullets: [
      'Load-balanced ECS-on-EC2 container deployment with Auto Scaling Groups and Capacity Providers across multi-AZ subnets',
      'Decoupled large media storage to Amazon S3 while Redis caching and MongoDB aggregation power responsive API delivery',
      'Multi-layer health checks and self-healing recovery via ALB target groups, Docker health checks, and stateless JWT auth',
      'Modular Terraform IaC alongside GitHub Actions CI/CD for automated testing, ECR image publishing, and rolling ECS deployments',
    ],
    github: 'https://github.com/SyedAsad108/videotube-devops',
  },
  {
    id: 'autoforge',
    title: 'AutoForge',
    subtitle: 'Manufacturing Monitoring Platform',
    date: 'May 2026',
    icon: <Cpu size={20} />,
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.03))',
    tags: ['Python', 'FastAPI', 'AWS Kinesis', 'Lambda', 'S3', 'Glue', 'Athena', 'React.js', 'CloudWatch'],
    description:
      'Real-time manufacturing telemetry platform with cloud-native ingestion pipelines, ETL workflows, and live anomaly detection dashboards.',
    bullets: [
      'Built telemetry ingestion pipelines using FastAPI and AWS Kinesis for real-time sensor data processing',
      'Developed ETL workflows using AWS Glue and Athena over structured datasets stored in Amazon S3',
      'Implemented event-driven data processing with AWS Lambda and monitored execution via CloudWatch',
      'Created React.js dashboards for live anomaly detection and operational monitoring',
    ],
    github: 'https://github.com/SyedAsad108/AutoForge', // Assuming repo name
  },
  {
    id: 'secure-file',
    title: 'Secure File Upload & Sharing',
    subtitle: 'Cloud Storage Platform',
    date: 'Apr 2026',
    icon: <Shield size={20} />,
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(129,140,248,0.03))',
    tags: ['React.js', 'Node.js', 'Express.js', 'AWS S3', 'IAM'],
    description:
      'Secure cloud file management system using AWS S3 pre-signed URLs and IAM least-privilege policies for controlled, time-limited file sharing.',
    bullets: [
      'Built secure upload system using AWS S3 pre-signed URLs for backend-controlled uploads',
      'Configured IAM least-privilege policies to restrict cloud storage access permissions',
      'Implemented temporary signed URLs for secure and time-limited file sharing',
      'Secured workflows using authentication middleware and CORS-protected S3 bucket policies',
    ],
    github: 'https://github.com/SyedAsad108/secure-file-upload', // Assuming repo name
  },
  {
    id: 'serverless-chat',
    title: 'Serverless Real-Time Chat',
    subtitle: 'WebSocket Application',
    date: 'Feb 2026',
    icon: <MessageSquare size={20} />,
    color: '#34d399',
    gradient: 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.03))',
    tags: ['React.js', 'Node.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'WebSockets', 'JWT'],
    description:
      'Fully serverless real-time chat app leveraging AWS Lambda and API Gateway WebSocket APIs with JWT authentication and DynamoDB-backed chat history.',
    bullets: [
      'Developed fully serverless architecture using AWS Lambda and API Gateway WebSocket APIs',
      'Implemented JWT authentication and bcrypt password hashing for secure credential management',
      'Built real-time messaging with DynamoDB-backed chat history and active connection management',
      'Achieved scalable WebSocket communication without dedicated backend servers',
    ],
    github: 'https://github.com/SyedAsad108/serverless-realtime-chat',
  },
  {
    id: 'navisafe',
    title: 'NaviSafe',
    subtitle: 'Tourist Safety Monitoring System',
    date: 'Oct 2025',
    icon: <MapPin size={20} />,
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.03))',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API', 'Leaflet.js'],
    description:
      'Real-time geospatial safety platform with live location tracking, geo-fencing alerts, and interactive incident mapping for tourist safety.',
    bullets: [
      'Built real-time geospatial safety platform with live location tracking and geo-fencing alerts',
      'Developed RESTful backend services using Node.js, Express.js, and MongoDB',
      'Integrated Google Maps API and Leaflet.js for interactive incident mapping and emergency visualization',
      'Designed monitoring dashboards for incident management and multi-user alert handling',
    ],
    github: 'https://github.com/SyedAsad108/NaviSafe',
  },
];

const TimelineCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="timeline-card group"
      style={{
        background: 'rgba(13, 22, 38, 0.85)',
        border: `1px solid ${project.color}25`,
        borderRadius: 20,
        padding: '1.75rem',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'col',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.color}60`;
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
        e.currentTarget.style.boxShadow = `0 20px 40px ${project.color}20, 0 4px 20px rgba(0,0,0,0.5)`;
        e.currentTarget.style.background = 'rgba(17, 30, 53, 0.95)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${project.color}25`;
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.background = 'rgba(13, 22, 38, 0.85)';
      }}
    >
      <div className="flex flex-col w-full">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: project.gradient, color: project.color, border: `1px solid ${project.color}30` }}
          >
            {project.icon}
          </div>
          <div className="flex flex-col items-end gap-2">
            <div
              className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
              style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
            >
              <Calendar size={12} />
              {project.date}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide transition-all duration-200 hover:scale-105"
              style={{ color: '#94a3b8', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = project.color; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
            >
              <Github size={13} /> View Repo
            </a>
          </div>
        </div>

        <h3
          className="text-xl font-bold mb-1 transition-colors duration-300"
          style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#f8fafc' }}
        >
          {project.title}
        </h3>
        <p className="text-sm font-semibold mb-3" style={{ color: project.color }}>
          {project.subtitle}
        </p>
        <p className="text-sm leading-relaxed mb-5" style={{ color: '#cbd5e1' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg font-medium transition-colors duration-300 group-hover:bg-opacity-20"
              style={{
                background: `${project.color}10`,
                color: project.color,
                border: `1px solid ${project.color}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 w-fit"
          style={{
            color: project.color,
            background: 'transparent',
            border: `1px solid ${project.color}30`,
            borderRadius: 8,
            cursor: 'pointer',
            padding: '6px 12px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${project.color}15`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          {expanded ? 'Hide Details' : 'Key Highlights'}
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={13} />
          </motion.div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="overflow-hidden space-y-3"
            >
              {project.bullets.map((b, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 text-sm leading-relaxed" 
                  style={{ color: '#94a3b8' }}
                >
                  <span
                    className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: project.color, boxShadow: `0 0 8px ${project.color}` }}
                  />
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const TimelineItem = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative grid items-center w-full"
      style={{ gridTemplateColumns: '1fr 60px 1fr', marginBottom: '3rem' }}
    >
      {/* LEFT column */}
      <div className="pr-2 md:pr-8 flex justify-end w-full">
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
            animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ width: '100%' }}
          >
            <TimelineCard project={project} />
          </motion.div>
        ) : (
          <div /> // empty
        )}
      </div>

      {/* CENTER: dot */}
      <div className="flex flex-col items-center relative h-full justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: project.color,
            boxShadow: `0 0 20px ${project.color}80, 0 0 0 6px rgba(13,22,38,0.8), 0 0 0 8px ${project.color}40`,
            zIndex: 2,
            flexShrink: 0,
          }}
        />
      </div>

      {/* RIGHT column */}
      <div className="pl-2 md:pl-8 flex justify-start w-full">
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 50, filter: 'blur(5px)' }}
            animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ width: '100%' }}
          >
            <TimelineCard project={project} />
          </motion.div>
        ) : (
          <div /> // empty
        )}
      </div>
    </div>
  );
};

const MobileTimelineItem = ({ project }) => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  
  return (
    <div ref={ref} className="relative w-full">
      {/* Mobile dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute -left-9 top-6"
        style={{
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: project.color,
          boxShadow: `0 0 15px ${project.color}80, 0 0 0 4px rgba(13,22,38,0.8), 0 0 0 5px ${project.color}40`,
          zIndex: 10,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full"
      >
        <TimelineCard project={project} />
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-4 md:px-6 overflow-hidden"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* Decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '5%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          left: '5%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#38bdf8', letterSpacing: '0.15em' }}
          >
            Portfolio
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#e2e8f0' }}
          >
            Projects & Journey
          </h2>
          <div
            className="mx-auto mt-5"
            style={{ width: 80, height: 4, background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: 99 }}
          />
          <p className="mt-6 max-w-xl mx-auto text-sm md:text-base" style={{ color: '#94a3b8', lineHeight: 1.8 }}>
            A chronological view of my featured projects — each one a step deeper into cloud engineering, system architecture, and full-stack development.
          </p>
        </motion.div>

        {/* Timeline (desktop) */}
        <div className="hidden lg:block relative w-full">
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute top-0"
            style={{
              left: '50%',
              width: 2,
              transform: 'translateX(-50%)',
              background: 'linear-gradient(180deg, #c084fc, #2dd4bf, #38bdf8, #818cf8, #34d399, #fb923c)',
              borderRadius: 99,
              zIndex: 1,
            }}
          />

          {/* Items */}
          <div className="relative w-full" style={{ zIndex: 2 }}>
            {timelineProjects.map((project, i) => (
              <TimelineItem key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Timeline (mobile/tablet) */}
        <div className="lg:hidden relative pl-6 w-full">
          {/* Mobile vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-0 top-0"
            style={{
              width: 2,
              background: 'linear-gradient(180deg, #c084fc, #2dd4bf, #38bdf8, #818cf8, #34d399, #fb923c)',
              borderRadius: 99,
            }}
          />

          <div className="space-y-10 w-full">
            {timelineProjects.map((project) => (
              <MobileTimelineItem key={project.id} project={project} />
            ))}
          </div>
        </div>
        
        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            id="view-github-btn"
            href="https://github.com/SyedAsad108"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
            style={{ textDecoration: 'none' }}
          >
            <Github size={16} />
            View All Repos on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
