import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ExternalLink,
  Cpu,
  Shield,
  MessageSquare,
  MapPin,
  ChevronDown,
  ChevronUp,
  Calendar,
  ArrowUpRight,
  Activity,
  Workflow,
} from 'lucide-react';

const Github = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    id: 'incident-graph',
    title: 'IncidentGraph',
    subtitle: 'AI-Assisted Incident Investigation Platform',
    date: 'Sep 2026',
    icon: <Activity size={24} />,
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
    icon: <Workflow size={24} />,
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
    icon: <Cpu size={24} />,
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
    github: 'https://github.com/SyedAsad108',
  },
  {
    id: 'secure-file',
    title: 'Secure File Upload & Sharing',
    subtitle: 'Cloud Storage Platform',
    date: 'Apr 2026',
    icon: <Shield size={24} />,
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
    github: 'https://github.com/SyedAsad108',
  },
  {
    id: 'serverless-chat',
    title: 'Serverless Real-Time Chat',
    subtitle: 'WebSocket Application',
    date: 'Feb 2026',
    icon: <MessageSquare size={24} />,
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
    github: 'https://github.com/SyedAsad108',
  },
  {
    id: 'navisafe',
    title: 'NaviSafe',
    subtitle: 'Tourist Safety Monitoring System',
    date: 'Oct 2025',
    icon: <MapPin size={24} />,
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
    github: 'https://github.com/SyedAsad108',
  },
];

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [cardRef, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <motion.div
      ref={cardRef}
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="flex flex-col h-full"
      style={{
        background: 'rgba(13, 22, 38, 0.85)',
        border: `1px solid ${project.color}20`,
        borderRadius: 18,
        padding: '1.75rem',
        transition: 'all 0.4s ease',
        backdropFilter: 'blur(16px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.color}50`;
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = `0 20px 60px ${project.color}18, 0 4px 24px rgba(0,0,0,0.4)`;
        e.currentTarget.style.background = 'rgba(17, 30, 53, 0.95)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${project.color}20`;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.background = 'rgba(13, 22, 38, 0.85)';
      }}
    >
      {/* Icon + date row */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: project.gradient, color: project.color, border: `1px solid ${project.color}30` }}
        >
          {project.icon}
        </div>
        <div className="flex flex-col items-end gap-2">
          <div
            className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}30` }}
          >
            <Calendar size={11} />
            {project.date}
          </div>
          {/* GitHub link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-github-${project.id}`}
            className="flex items-center gap-1 text-xs font-medium transition-all duration-200"
            style={{ color: '#64748b', textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = project.color; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; }}
            aria-label={`GitHub repo for ${project.title}`}
          >
            <Github size={14} />
            <span>GitHub</span>
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold mb-1"
        style={{ fontFamily: "'Times New Roman', Georgia, serif", color: '#e2e8f0', lineHeight: 1.2 }}
      >
        {project.title}
      </h3>
      <p className="text-sm font-medium mb-4" style={{ color: project.color }}>
        {project.subtitle}
      </p>

      <p className="text-sm leading-relaxed mb-5" style={{ color: '#94a3b8' }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-lg font-medium"
            style={{
              background: `${project.color}0d`,
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
        id={`expand-${project.id}`}
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-xs font-semibold mt-auto transition-all duration-200 w-fit"
        style={{
          color: project.color,
          background: 'none',
          border: `1px solid ${project.color}30`,
          borderRadius: 8,
          cursor: 'pointer',
          padding: '6px 12px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${project.color}12`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'none';
        }}
      >
        {expanded ? 'Hide Details' : 'Key Highlights'}
        {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-4 space-y-2.5"
          >
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                <span
                  className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                  style={{ background: project.color }}
                />
                {b}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* bg decoration */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 500,
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
            Featured Projects
          </h2>
          <div
            className="mx-auto mt-4"
            style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #38bdf8, #818cf8)', borderRadius: 99 }}
          />
          <p className="mt-5 max-w-lg mx-auto text-sm" style={{ color: '#64748b', lineHeight: 1.8 }}>
            Real-world applications spanning cloud engineering, serverless architecture, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
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
            View All on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
