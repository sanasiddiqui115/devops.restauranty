# 🍽️ Restauranty – Final DevOps Project

Restauranty is a microservices-based application with **3 Node.js backend services**, a **React frontend**, and a **MongoDB database**.  
It demonstrates containerization, orchestration with Kubernetes, and CI/CD automation.

---

## 📂 Project Structure
├── backend
│ ├── auth/ # Authentication & user management
│ ├── discounts/ # Campaigns & coupons
│ └── items/ # Items, categories, orders
├── client/ # React frontend
├── k8s/ # Kubernetes manifests
└── .github/workflows/ci-cd.yaml # CI/CD pipeline


---

## ⚙️ Running Locally

### 1. Start MongoDB
```bash
docker run -d \
  --name my-mongo \
  -p 27017:27017 \
  -v mongo-data:/data/db \
  mongo:latest
2. Run Services

Each service runs on its own port:

Auth → localhost:3001

Discounts → localhost:3002

Items → localhost:3003

Frontend → localhost:3000

cd backend/auth && npm install && npm run dev
cd backend/discounts && npm install && npm run dev
cd backend/items && npm install && npm run dev
cd client && npm install && npm start

3. Local Routing with HAProxy

The frontend expects a single URL.
Use HAProxy to route everything via localhost:80.

/api/auth → auth service
/api/discounts → discounts service
/api/items → items service
/ → frontend

🐳 Containerization

Each service has a Dockerfile.
Example (auth):

docker build -t sanasiddiqui115/restauranty-auth .
docker push sanasiddiqui115/restauranty-auth:<tag>

☸️ Kubernetes Deployment
1. Create Namespace
kubectl create ns restauranty

2. Apply Manifests

All manifests are inside k8s/:

auth-deployment.yaml

discounts-deployment.yaml

items-deployment.yaml

frontend-deployment.yaml

mongo-deployment.yaml

ingress.yaml

Apply with:

kubectl apply -k k8s/

3. Ingress Routing

Ingress exposes services under a single host (e.g. restauranty.local):

/api/auth → auth

/api/discounts → discounts

/api/items → items

/ → frontend

🔄 CI/CD Pipeline

The pipeline lives in .github/workflows/ci-cd.yaml.

Features:

Builds only changed services (dorny/paths-filter).

Pushes images to Docker Hub with commit SHA tags.

Deploys automatically to Azure AKS with:

sed replacement of IMAGE_TAG

kubectl apply -k k8s/

Required Secrets:

DOCKERHUB_USERNAME

DOCKERHUB_TOKEN

AZURE_CREDENTIALS (Service Principal JSON for AKS)

📊 Monitoring & Logging

Containers log to stdout (view via kubectl logs).

Cluster metrics available via Azure Monitor.

Optional: Prometheus + Grafana stack (future enhancement).

🔒 Security

Secrets (MongoDB URI, Cloudinary keys, JWT secret) are injected as environment variables via manifests.

Ingress is the only public entrypoint.

JWT-based authentication handled by auth service.

📝 Final Notes

✅ Fully containerized microservices architecture.

✅ Automated builds & deployments with GitHub Actions.

✅ Unified ingress routing in Kubernetes.

✅ Demonstrates modern DevOps practices (CI/CD, orchestration, cloud-native).

👨‍💻 Author

Sana Siddiqui
Ironhack DevOps Bootcamp – Final Project


---
<img width="709" height="620" alt="image" src="https://github.com/user-attachments/assets/d7228868-2835-4fca-a6c2-d8ece753565c" />


