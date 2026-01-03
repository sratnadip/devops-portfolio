"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "3rem", marginBottom: "10px" }}
      >
        Ratnadip Shinde
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ color: "#58a6ff", marginBottom: "20px" }}
      >
        DevOps Engineer | Cloud & CI/CD Specialist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ maxWidth: "600px" }}
      >
        I design and automate scalable, secure cloud infrastructure using AWS,
        Docker, Kubernetes, and CI/CD pipelines.
      </motion.p>
    </section>
  );
}
