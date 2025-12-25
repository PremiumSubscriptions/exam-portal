import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(300); // 5 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time === 0) {
      alert("Time Over! Exam Auto Submitted");
    }
  }, [time]);

  return (
    <div style={{ background: "#f3f4f6", minHeight: "100vh", padding: 20 }}>
      
      <div style={{
        background: "linear-gradient(to right,#16a34a,#15803d)",
        color: "white",
        padding: 15,
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold"
      }}>
        LIVE EXAM : JU A Model Test
      </div>

      <div style={{ marginTop: 20, background: "white", padding: 20, borderRadius: 10 }}>
        <h3>1. What is value of g?</h3>

        {["9.8 m/s²", "10 m/s²", "8 m/s²", "6 m/s²"].map((op, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <input type="radio" name="q1" /> {op}
          </div>
        ))}
      </div>

      <div style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#16a34a",
        color: "white",
        padding: "10px 20px",
        borderRadius: 30,
        fontWeight: "bold"
      }}>
        ⏱ {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
      </div>
    </div>
  );
}

export default App;

