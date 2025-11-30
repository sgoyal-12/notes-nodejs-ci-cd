Sure! Here's the full **README.md** file in proper markdown format exactly how you can use it. You can copy-paste it directly into a `README.md` file at the root of your GitHub repository.

---

### 📄 **README.md**

```markdown
# 📝 Notes App – CI/CD Pipeline using Jenkins, Docker & AWS

A simple **Notes taking web application (Node.js + Express)** deployed with a **fully automated CI/CD pipeline** using **Jenkins**, **Docker**, **GitHub Webhooks**, and **AWS EC2 instance**.

---

## 🚀 Project Overview

This project demonstrates a complete DevOps pipeline:
- App built using **Node.js**
- Containerized with **Docker**
- Source hosted on **GitHub**
- CI/CD automated using **Jenkins Pipeline**
- Automatically builds on every **git push**
- Deploys container on **AWS EC2**
- Tests implemented via **Jest**

---

## 🛠️ Tech Stack

| Layer         | Technology |
|--------------|------------|
| Backend      | Node.js, Express.js |
| Frontend     | HTML, CSS, JavaScript |
| CI/CD        | Jenkins (Pipeline as Code) |
| Container    | Docker |
| Testing      | Jest |
| Repository   | Git & GitHub |
| Deployment   | AWS EC2 (
Ubuntu) |
| Webhooks     | GitHub → Jenkins |
| Port         | `3000` |

---

## 📁 Folder Structure

```

notes-nodejs-ci-cd/
├── public/             # Frontend static files
├── views/              # EJS templates
├── tests/              # Jest test cases
├── server.js           # Application entry point
├── Dockerfile          # Docker config
├── Jenkinsfile         # CI/CD pipeline script
├── package.json        # Node.js dependencies
└── README.md           # Project documentation

````

---

## ▶️ Running Locally

```bash
git clone https://github.com/sgoyal-12/notes-nodejs-ci-cd.git
cd notes-nodejs-ci-cd
npm install
npm start
````

🚀 Now visit: **[http://localhost:3000](http://localhost:3000)**

---

## 🧪 Running Tests

```bash
npm test
```

---

## 🐳 Docker Setup

### Build Image

```bash
docker build -t notes-nodejs-ci-cd .
```

### Run Container

```bash
docker run -d -p 3000:3000 notes-nodejs-ci-cd
```

---

## 🔁 Jenkins CI/CD Pipeline Stages

Defined in `Jenkinsfile`:

1. 📥 Checkout code
2. 📦 Install dependencies
3. 🧪 Run Jest tests
4. 🛠 Build the Docker image
5. 📤 Push image to Docker Hub
6. 🚀 Deploy latest container on AWS EC2

---

## 🚚 Deployment

| Service     | URL                           |
| ----------- | ----------------------------- |
| 💻 Live App | `http://<EC2_PUBLIC_IP>:3000` |
| 🔧 Jenkins  | `http://<EC2_PUBLIC_IP>:8080` |

---

## 🔐 Docker Hub Image

```
docker pull shubhamgoyal1205/notes-nodejs-ci-cd:latest
```

---

## 🔗 GitHub Webhook Setup

Webhook Payload URL:

```
http://<EC2_PUBLIC_IP>:8080/github-webhook/
```

✔ Triggers build automatically on **git push**

---

## 📌 AWS EC2 Setup Summary

| Setting           | Value                |
| ----------------- | -------------------- |
| OS                | Ubuntu               |
| Docker Installed  | ✔                    |
| Jenkins Installed | ✔                    |
| Open Ports        | `22`, `8080`, `3000` |

---

## 🛠 Useful Commands During Setup

```bash
sudo apt update
sudo apt install -y openjdk-17-jdk docker.io nodejs npm
sudo systemctl start docker
sudo usermod -aG docker jenkins
sudo usermod -aG docker ubuntu
sudo systemctl restart docker
sudo systemctl restart jenkins
```

---

## 📈 Future Improvements

* Add MongoDB for persistent storage
* Use Nginx reverse proxy
* Enable HTTPS using SSL
* Slack/Email Jenkins notifications
* SonarQube integration for code quality

---

## 👨‍💻 Author

**Shubham Goyal**
📧 `sgoyal5_be23@thapar.edu`
🔗 GitHub: [sgoyal-12](https://github.com/sgoyal-12)

---

## ⭐ Support

If you liked this project, please consider **starring the repository**.

```bash
⭐ git add ⭐
```

---

## 📣 Contributions

Contributions, feature requests, and suggestions are welcome!

```bash
git clone https://github.com/sgoyal-12/notes-nodejs-ci-cd.git
```
