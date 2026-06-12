import axios from "axios";
import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/analytics/all"
      );
      setAnalytics(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const shortenUrl = async () => {
    if (!url.trim()) {
      setError("Please enter a valid URL");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:5000/shorten",
        { url }
      );

      setShortUrl(response.data.shortUrl);
      setUrl("");
      fetchAnalytics();
    } catch (err) {
      setError("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const totalUrls = analytics.length;

  const totalClicks = analytics.reduce(
    (sum, item) => sum + item.clicks,
    0
  );

  const topUrl =
    analytics.length > 0
      ? analytics.reduce((a, b) =>
          a.clicks > b.clicks ? a : b
        )
      : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(135deg,#f8fafc,#eef2ff)",
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "800",
            margin: "0",
            color: "#1e293b",
          }}
        >
          URL Shortener Dashboard
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginTop: "10px",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Create short links, generate QR codes and track analytics
        </p>

        {/* Input Card */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              placeholder="Paste your long URL here..."
              value={url}
              onChange={(e) =>
                setUrl(e.target.value)
              }
              style={{
                flex: 1,
                minWidth: "300px",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                fontSize: "16px",
              }}
            />

            <button
              onClick={shortenUrl}
              disabled={loading}
              style={{
                border: "none",
                padding: "16px 24px",
                borderRadius: "12px",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {loading
                ? "Creating..."
                : "Shorten URL"}
            </button>
          </div>

          {error && (
            <p
              style={{
                color: "red",
                marginTop: "10px",
              }}
            >
              {error}
            </p>
          )}

          {shortUrl && (
            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                borderRadius: "15px",
                background: "#eff6ff",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                }}
              >
                Short URL Created
              </h3>

              <a
                href={shortUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#2563eb",
                  fontWeight: "600",
                }}
              >
                {shortUrl}
              </a>

              <div
                style={{
                  marginTop: "15px",
                }}
              >
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      shortUrl
                    )
                  }
                  style={{
                    border: "none",
                    background: "#10b981",
                    color: "white",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Copy URL
                </button>
              </div>

              <div
                style={{
                  marginTop: "20px",
                  background: "white",
                  padding: "15px",
                  width: "fit-content",
                  borderRadius: "12px",
                }}
              >
                <QRCodeCanvas
                  value={shortUrl}
                  size={180}
                />
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "#2563eb",
              color: "white",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <h3>Total URLs</h3>
            <h1
              style={{
                fontSize: "3rem",
                margin: "10px 0",
              }}
            >
              {totalUrls}
            </h1>
          </div>

          <div
            style={{
              background: "#10b981",
              color: "white",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <h3>Total Clicks</h3>
            <h1
              style={{
                fontSize: "3rem",
                margin: "10px 0",
              }}
            >
              {totalClicks}
            </h1>
          </div>

          <div
            style={{
              background: "#7c3aed",
              color: "white",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <h3>Top URL</h3>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
              }}
            >
              {topUrl
                ? topUrl.shortCode
                : "No Data"}
            </p>
          </div>
        </div>

        {/* Analytics */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "20px",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              color: "#1e293b",
              marginBottom: "20px",
            }}
          >
            Analytics Dashboard
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#2563eb",
                  color: "white",
                }}
              >
                <th style={{ padding: "14px" }}>
                  Original URL
                </th>
                <th style={{ padding: "14px" }}>
                  Short Code
                </th>
                <th style={{ padding: "14px" }}>
                  Clicks
                </th>
              </tr>
            </thead>

            <tbody>
              {analytics.map(
                (item, index) => (
                  <tr
                    key={item._id}
                    style={{
                      background:
                        index % 2 === 0
                          ? "#ffffff"
                          : "#f8fafc",
                    }}
                  >
                    <td
                      style={{
                        padding: "12px",
                        borderBottom:
                          "1px solid #e5e7eb",
                      }}
                    >
                      {item.originalUrl}
                    </td>

                    <td
                      style={{
                        padding: "12px",
                        borderBottom:
                          "1px solid #e5e7eb",
                      }}
                    >
                      {item.shortCode}
                    </td>

                    <td
                      style={{
                        padding: "12px",
                        fontWeight: "bold",
                        borderBottom:
                          "1px solid #e5e7eb",
                      }}
                    >
                      {item.clicks}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;