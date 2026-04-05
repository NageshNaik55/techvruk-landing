import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";
import roboImg from "./assets/robo.png";

export default function LandingPage() {
  return (
    <div className="bg-surface">
      {/* Navbar - Kept Bootstrap Structure, Updated Styling */}
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          background: "rgba(16, 20, 26, 0.8)",
          backdropFilter: "blur(15px)",
        }}
      >
        <div className="container py-2">
          <a
            className="navbar-brand fw-black text-info fs-3"
            href="#"
            style={{ fontFamily: "var(--headline-font)" }}
          >
            Techvruk
          </a>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item">
                <a
                  className="nav-link text-secondary-emphasis text-uppercase fw-bold"
                  href="#programs"
                >
                  Programs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-secondary-emphasis text-uppercase fw-bold"
                  href="#community"
                >
                  Community
                </a>
              </li>
            </ul>
            <button className="btn btn-techvruk ms-lg-4 px-4 py-2">
              JOIN NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative d-flex align-items-center justify-content-center text-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Animated Background Blobs */}
        <div
          className="position-absolute w-100 h-100 overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div
            className="position-absolute rounded-circle"
            style={{
              top: "10%",
              left: "10%",
              width: "300px",
              height: "300px",
              background: "rgba(195, 245, 255, 0.1)",
              filter: "blur(100px)",
            }}
          ></div>
          <div
            className="position-absolute rounded-circle"
            style={{
              bottom: "10%",
              right: "10%",
              width: "300px",
              height: "300px",
              background: "rgba(216, 185, 255, 0.1)",
              filter: "blur(100px)",
            }}
          ></div>
        </div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <span
            className="badge rounded-pill px-3 py-2 mb-4"
            style={{
              background: "rgba(216, 185, 255, 0.1)",
              color: "var(--secondary)",
              border: "1px solid rgba(216, 185, 255, 0.2)",
              letterSpacing: "2px",
            }}
          >
            ENGINEERING EXCELLENCE
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-1 fw-black mb-4 text-white"
            style={{
              fontFamily: "var(--headline-font)",
              letterSpacing: "-2px",
            }}
          >
            Build the Future with{" "}
            <span className="text-gradient">Techvruk</span>
          </motion.h1>
          <p
            className="lead mx-auto mb-5"
            style={{ maxWidth: "700px", color: "var(--on-surface-variant)" }}
          >
            Empowering engineers through innovation, training, and
            collaboration. Join a community where code meets mechanical
            precision.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button className="btn btn-techvruk btn-lg px-5 py-3">
              Join Now
            </button>
            <button className="btn btn-outline-info btn-lg px-5 py-3 text-white border-info">
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition - Bootstrap Grid + Custom Glass Cards */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-4">
            {[
              { title: "Innovation Contests", icon: "🚀" },
              { title: "Industry Training", icon: "🎓" },
              { title: "Awards & Recognition", icon: "🏆" },
              { title: "Networking", icon: "🌐" },
            ].map((item, i) => (
              <div key={i} className="col-md-3">
                <div className="glass-panel p-5 h-100 rounded-4 text-start transition-all">
                  <div className="fs-1 mb-4">{item.icon}</div>
                  <h3
                    className="h4 fw-bold text-white mb-3"
                    style={{ fontFamily: "var(--headline-font)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="small"
                    style={{ color: "var(--on-surface-variant)" }}
                  >
                    Solve real-world engineering challenges and push the
                    boundaries of technology.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-black border-top border-bottom border-secondary-subtle">
        <div className="container py-4">
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <h2
                className="display-4 fw-black text-info"
                style={{ fontFamily: "var(--headline-font)" }}
              >
                10,000+
              </h2>
              <p className="text-uppercase small tracking-widest text-secondary">
                Engineers Empowered
              </p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h2
                className="display-4 fw-black text-primary"
                style={{ fontFamily: "var(--headline-font)" }}
              >
                200+
              </h2>
              <p className="text-uppercase small tracking-widest text-secondary">
                Industry Events
              </p>
            </div>
            <div className="col-md-4">
              <h2
                className="display-4 fw-black text-info"
                style={{ fontFamily: "var(--headline-font)" }}
              >
                50+
              </h2>
              <p className="text-uppercase small tracking-widest text-secondary">
                Global Mentors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-5 bg-black text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Your Engineering Journey</h2>
          <div className="row g-4">
            {["Sign Up", "Learn & Participate", "Get Recognized"].map(
              (step, i) => (
                <div className="col-md-4" key={i}>
                  <div className="p-4 border rounded">
                    <h5>{step}</h5>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Programs & Opportunities</h2>
          <div className="row g-4">
            {[1, 2].map((_, i) => (
              <div className="col-md-6" key={i}>
                <div className="card bg-dark text-light border">
                  <img src={roboImg} className="card-img-top" alt="program" />
                  <div className="card-body">
                    <h5 className="fw-bold">Program {i + 1}</h5>
                    <p className="text-secondary">
                      Industry-focused training program.
                    </p>
                    <button className="btn btn-info">Apply Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-black mt-5">
        <div className="container text-center">
          <h3 className="text-info mb-3">Techvruk</h3>
          <p className="text-secondary small">
            © 2026 Techvruk. Engineering the Future.
          </p>
        </div>
      </footer>
    </div>
  );
}
