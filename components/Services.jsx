"use client";
import { motion } from "framer-motion";
import { FaDocker, FaAws, FaCogs } from "react-icons/fa";

const services = [
  { icon: <FaCogs />, title: "CI/CD Automation" },
  { icon: <FaDocker />, title: "Docker & Kubernetes" },
  { icon: <FaAws />, title: "AWS Cloud Infrastructure" },
];

export default function Services() {
  return (
    <section className="section">
      <h2 style={{ marginBottom: "30px" }}>Services</h2>

      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "#161b22",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div style={{ fontSize: "2rem", color: "#58a6ff" }}>{s.icon}</div>
            <h3>{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
