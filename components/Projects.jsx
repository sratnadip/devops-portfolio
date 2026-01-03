"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HRMS Portal",
    desc: "End-to-end DevOps deployment with CI/CD, Docker, Kubernetes, and AWS.",
    tech: "AWS | Docker | Kubernetes | GitHub Actions | Grafana",
  },
  {
    title: "Health Insurance Platform",
    desc: "Cloud-native deployment with monitoring, scalability, and automation.",
    tech: "AWS | Docker | Kubernetes | Prometheus | CloudWatch",
  },
];

export default function Projects() {
  return (
    <section className="section">
      <h2 style={{ marginBottom: "30px" }}>Projects</h2>

      {projects.map((p, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -8 }}
          style={{
            background: "#161b22",
            padding: "25px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <span style={{ color: "#8b949e" }}>{p.tech}</span>
        </motion.div>
      ))}
    </section>
  );
}
