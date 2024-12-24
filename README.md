# 🚀 **Checklist Evaluation API**

### A Node.js-based backend application for validating checklist conditions using real-time data from an external API.

---

## 📸 **Project UI Screenshot**

![Project UI](../Checklist-System/client/public/assets/CheckList%20UI%20ScreenShot.png)  
_A screenshot of frontend application/UI here._

---

## 🛠️ **Technologies Used**

| **Technology**                                                                                            | **Description**              |
| --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)           | Backend runtime environment  |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)     | Web framework for Node.js    |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)                 | HTTP client for API calls    |
| ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E) | Programming language         |
| ![Cors](https://img.shields.io/badge/CORS-0078D7?style=flat&logo=cors&logoColor=white)                    | Middleware for enabling CORS |
| ![Dotenv](https://img.shields.io/badge/Dotenv-000000?style=flat&logo=dotenv&logoColor=white)              | Environment configuration    |

---

## 📑 **Project Overview**

This API validates a checklist based on conditions from an external API. It ensures data consistency and evaluates multiple rules before sending a JSON response.

### ✅ **Key Features**

- Fetch data dynamically from external APIs.
- Validate predefined checklist rules.
- Return structured JSON results to the frontend.
- Secure sensitive data using `.env`.
- Follows a clean and modular file structure.

---

```
📁 project-root
│
├── 📁 client       # Client-side application (frontend)
│ ├── 📁 public
│ ├── 📁 src
│
├── 📁 server       # Server-side application (backend)
│ ├── 📁 config
│ ├── 📁 controllers
│ ├── 📁 routes
│ ├── 📁 services
│ ├── 📁 middleware
│ ├── 📁 utils
│ ├── 📁 logs
│ ├── 📁 uploads
│ ├── .env
│ ├── server.js     # Entry point for server
│ ├── package.json
│
├── .gitignore      # Git ignore rules
├── .prettierrc     # Code formatting rules
├── package.json    # Root-level dependencies
└── README.md       # Project documentation
```

---

## ⚙️ **Setup Instructions**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set environment variables:**
   Create a `.env` file:

   ```env
   PORT=5000
   API_URL=http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639
   ```

4. **Run the server:**

   ```bash
   npm start
   ```

5. **Access the API:**
   ```plaintext
   http://localhost:5000/api/checklist
   ```

---

## 🧪 **API Endpoint**

- **GET /api/checklist**  
   **Description:** Fetches application data and validates checklist conditions.  
   **Response Example:**
  ```json
  [
    { "rule": "Valuation Fee Paid", "status": "Passed" },
    { "rule": "UK Resident", "status": "Failed" }
  ]
  ```

---

## 🛡️ **Security & Environment Variables**

Ensure sensitive credentials are stored securely in the `.env` file. Never expose your API keys in public repositories.

---

## 👥 **Contributors**

- **Your Name** - _Project Lead_
- **Other Team Members**

---

## 📜 **License**

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## ⭐ **Feedback & Support**

If you encounter any issues, feel free to:

- Open an issue on GitHub
- Reach out via email: `youremail@example.com`

---

✅ **Project Overview**  
✅ **UI Screenshot**  
✅ **Technology Badges**  
✅ **Setup Instructions**  
✅ **API Documentation**

Let me know if you’d like more adjustments! 🚀
