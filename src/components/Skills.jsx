import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ── CDN sources ──────────────────────────────────────────────────────────────
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";
// Local official AWS architecture icons (saved in /public/aws-icons/)
const AWS = "/aws-icons";

// ── Flat single-grid skill list ──────────────────────────────────────────────
// Every skill has:
//   src   → primary image URL (devicons / simpleicons / local SVG)
//   fb    → short fallback text shown if image fails
//   fc    → fallback text color (also used for hover border tint)
//   fbg   → fallback background
//   filter → optional CSS filter for icons that need to be lightened/inverted
const skills = [
  // — Languages ——————————————————————————————————————————————————————————————
  {
    name: "JavaScript",
    src: `${DEVICON}/javascript/javascript-original.svg`,
    fb: "JS",
    fc: "#F7DF1E",
    fbg: "rgba(247,223,30,0.12)",
  },
  {
    name: "Python",
    src: `${DEVICON}/python/python-original.svg`,
    fb: "PY",
    fc: "#3776AB",
    fbg: "rgba(55,118,171,0.12)",
  },
  {
    name: "Java",
    src: `${DEVICON}/java/java-original.svg`,
    fb: "JAVA",
    fc: "#ED8B00",
    fbg: "rgba(237,139,0,0.12)",
  },
  {
    name: "C",
    src: `${DEVICON}/c/c-original.svg`,
    fb: "C",
    fc: "#A8B9CC",
    fbg: "rgba(168,185,204,0.1)",
  },
  {
    name: "SQL",
    src: `${DEVICON}/mysql/mysql-original.svg`,
    fb: "SQL",
    fc: "#4479A1",
    fbg: "rgba(68,121,161,0.12)",
  },

  // — Frontend ———————————————————————————————————————————————————————————————
  {
    name: "React.js",
    src: `${DEVICON}/react/react-original.svg`,
    fb: "RCT",
    fc: "#61DAFB",
    fbg: "rgba(97,218,251,0.1)",
  },
  {
    name: "Next.js",
    src: `${DEVICON}/nextjs/nextjs-original.svg`,
    fb: "NX",
    fc: "#000000",
    fbg: "rgba(0,0,0,0.1)",
  },

  {
    name: "HTML5",
    src: `${DEVICON}/html5/html5-original.svg`,
    fb: "HTML",
    fc: "#E34F26",
    fbg: "rgba(227,79,38,0.12)",
  },
  {
    name: "CSS3",
    src: `${DEVICON}/css3/css3-original.svg`,
    fb: "CSS",
    fc: "#1572B6",
    fbg: "rgba(21,114,182,0.12)",
  },
  {
    name: "Tailwind",
    src: `${SI}/tailwindcss/06B6D4`,
    fb: "TW",
    fc: "#06B6D4",
    fbg: "rgba(6,182,212,0.1)",
  },

  // — Backend ————————————————————————————————————————————————————————————————
  {
    name: "Node.js",
    src: `${DEVICON}/nodejs/nodejs-original.svg`,
    fb: "NODE",
    fc: "#339933",
    fbg: "rgba(51,153,51,0.12)",
  },
  {
    name: "Express.js",
    src: `${DEVICON}/express/express-original.svg`,
    filter: "invert(0.85) brightness(0.9)",
    fb: "EXP",
    fc: "#cccccc",
    fbg: "rgba(255,255,255,0.07)",
  },
  {
    name: "FastAPI",
    src: `${DEVICON}/fastapi/fastapi-original.svg`,
    fb: "FAPI",
    fc: "#009688",
    fbg: "rgba(0,150,136,0.12)",
  },
  {
    name: "WebSockets",
    src: `${SI}/socketdotio/ffffff`,
    fb: "WS",
    fc: "#ffffff",
    fbg: "rgba(255,255,255,0.07)",
  },
  {
    name: "JWT Auth",
    src: `${SI}/jsonwebtokens/FB015B`,
    fb: "JWT",
    fc: "#FB015B",
    fbg: "rgba(251,1,91,0.12)",
  },
  {
    name: "REST APIs",
    src: `${SI}/openapiinitiative/6BA539`,
    fb: "REST",
    fc: "#6BA539",
    fbg: "rgba(107,165,57,0.12)",
  },

  // — AWS — official architecture icons from /public/aws-icons/ ——————————————
  {
    name: "AWS",
    src: `${AWS}/aws.svg`,
    fb: "AWS",
    fc: "#FF9900",
    fbg: "rgba(255,153,0,0.12)",
  },
  {
    name: "Lambda",
    src: `${AWS}/lambda.svg`,
    fb: "λ",
    fc: "#FF9900",
    fbg: "rgba(255,153,0,0.12)",
  },
  {
    name: "S3",
    src: `${AWS}/s3.svg`,
    fb: "S3",
    fc: "#6CAE3E",
    fbg: "rgba(108,174,62,0.12)",
  },
  {
    name: "DynamoDB",
    src: `${AWS}/dynamodb.svg`,
    fb: "DDB",
    fc: "#527FFF",
    fbg: "rgba(82,127,255,0.12)",
  },
  {
    name: "API Gateway",
    src: `${AWS}/apigateway.svg`,
    fb: "APIG",
    fc: "#BF0683",
    fbg: "rgba(191,6,131,0.12)",
  },
  {
    name: "CloudWatch",
    src: `${AWS}/cloudwatch.svg`,
    fb: "CW",
    fc: "#FF4F8B",
    fbg: "rgba(255,79,139,0.12)",
  },
  {
    name: "Kinesis",
    src: `${AWS}/kinesis.svg`,
    fb: "KIN",
    fc: "#A166FF",
    fbg: "rgba(161,102,255,0.12)",
  },
  {
    name: "AWS Glue",
    src: `${AWS}/glue.svg`,
    fb: "GLU",
    fc: "#A166FF",
    fbg: "rgba(161,102,255,0.12)",
  },
  {
    name: "Athena",
    src: `${AWS}/athena.svg`,
    fb: "ATH",
    fc: "#A166FF",
    fbg: "rgba(161,102,255,0.12)",
  },
  {
    name: "IAM",
    src: `${AWS}/iam.svg`,
    fb: "IAM",
    fc: "#DD344C",
    fbg: "rgba(221,52,76,0.12)",
  },

  // — Databases & Tools ——————————————————————————————————————————————————————
  {
    name: "MongoDB",
    src: `${DEVICON}/mongodb/mongodb-original.svg`,
    fb: "MDB",
    fc: "#47A248",
    fbg: "rgba(71,162,72,0.12)",
  },
  {
    name: "Git",
    src: `${DEVICON}/git/git-original.svg`,
    fb: "GIT",
    fc: "#F05032",
    fbg: "rgba(240,80,50,0.12)",
  },
  {
    name: "GitHub",
    src: `${SI}/github/ffffff`,
    fb: "GH",
    fc: "#ffffff",
    fbg: "rgba(255,255,255,0.07)",
  },
  {
    name: "Postman",
    src: `${SI}/postman/FF6C37`,
    fb: "PM",
    fc: "#FF6C37",
    fbg: "rgba(255,108,55,0.12)",
  },
];

const concepts = [
  "Serverless Architecture",
  "Distributed Systems",
  "Systems Design",
  "Cloud-Native ETL",
  "Event-Driven Design",
  "Data Structures & Algorithms",
  "Full Stack Development",
  "Microservices",
  "Computer Networks",
  "Operating Systems",
  "Database Systems",
  "Container Concepts",
];

// ── Single card ──────────────────────────────────────────────────────────────
const SkillCard = ({ skill, index }) => {
  const [err, setErr] = useState(false);
  const [cardRef, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const iconNode =
    skill.src && !err ? (
      <img
        src={skill.src}
        alt={skill.name}
        width={46}
        height={46}
        loading="lazy"
        style={{
          objectFit: "contain",
          filter: skill.filter || "none",
          flexShrink: 0,
        }}
        onError={() => setErr(true)}
      />
    ) : (
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 10,
          background: skill.fbg,
          color: skill.fc,
          border: `1px solid ${skill.fc}35`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: skill.fb.length > 3 ? "0.58rem" : "0.78rem",
          fontWeight: 800,
          fontFamily: "Space Grotesk, monospace",
          letterSpacing: "-0.02em",
          flexShrink: 0,
        }}
      >
        {skill.fb}
      </div>
    );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: (index % 15) * 0.04 }}
      className="skill-icon-card"
      style={{
        background: "rgba(13, 22, 38, 0.85)",
        border: "1px solid rgba(56, 189, 248, 0.1)",
        borderRadius: 14,
        padding: "18px 10px 14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 9,
        cursor: "default",
        transition: "all 0.28s ease",
        minWidth: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${skill.fc}55`;
        e.currentTarget.style.transform = "translateY(-5px) scale(1.04)";
        e.currentTarget.style.boxShadow = `0 14px 40px ${skill.fc}20, 0 4px 16px rgba(0,0,0,0.35)`;
        e.currentTarget.style.background = "rgba(17, 30, 53, 0.95)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.1)";
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.background = "rgba(13, 22, 38, 0.85)";
      }}
    >
      {iconNode}
      <span
        style={{
          color: "#cbd5e1",
          fontSize: "0.7rem",
          fontWeight: 500,
          textAlign: "center",
          lineHeight: 1.3,
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

// ── Section ──────────────────────────────────────────────────────────────────
const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: "var(--color-bg)" }}
    >
      {/* bg glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "-5%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(52,211,153,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#38bdf8", letterSpacing: "0.15em" }}
          >
            Tech Stack
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Times New Roman', Georgia, serif",
              color: "#e2e8f0",
            }}
          >
            Skills & Technologies
          </h2>
          <div
            className="mx-auto mt-4"
            style={{
              width: 60,
              height: 3,
              background: "linear-gradient(90deg, #38bdf8, #818cf8)",
              borderRadius: 99,
            }}
          />
          <p
            className="mt-4 max-w-md mx-auto text-sm"
            style={{ color: "#64748b", lineHeight: 1.8 }}
          >
            Technologies I use to build cloud-native, full-stack, and serverless
            applications.
          </p>
        </motion.div>

        {/* ── Unified flat grid ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* ── Concepts strip ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="glass-card p-6"
        >
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              color: "#64748b",
              letterSpacing: "0.12em",
              fontFamily: "'Times New Roman', Georgia, serif",
            }}
          >
            Concepts & Paradigms
          </h3>
          <div className="flex flex-wrap gap-2">
            {concepts.map((concept) => (
              <span
                key={concept}
                className="skill-badge px-3 py-1.5 rounded-lg text-xs"
                style={{
                  background: "rgba(129, 140, 248, 0.07)",
                  color: "#818cf8",
                  border: "1px solid rgba(129, 140, 248, 0.18)",
                }}
              >
                {concept}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
