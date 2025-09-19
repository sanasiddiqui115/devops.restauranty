# Compliance Overview

The **Restauranty** project is a demo application created as part of a DevOps learning journey.  
While not intended for production, the project is designed with compliance principles in mind.

## Data Protection

- User data (authentication, items, discounts) is stored in **MongoDB** with restricted network access.
- Sensitive information (API keys, database credentials, Cloudinary secrets) is stored as **Kubernetes Secrets**.
- TLS encryption is enabled via Let’s Encrypt for secure data in transit.

## Logging & Monitoring

- Application logs are collected through Kubernetes and can be aggregated into **Loki** (optional).
- **Prometheus + Grafana** provide metrics and observability for compliance auditing.

## GDPR Principles

- **Data Minimization:** Only required fields are stored in MongoDB.
- **User Consent:** Login is required before accessing personalized data.
- **Right to Erasure (Planned):** Future versions will include endpoints for deleting user data.

## ISO 27001 Principles (Applied at Project Level)

- **Access Control:** Services communicate via **NetworkPolicies**, limiting lateral movement.
- **Key Management:** Secrets managed via Kubernetes, not hardcoded in code.
- **Incident Response:** Vulnerabilities should be reported via `SECURITY.md`.

## Responsible Contacts

- Security: security@sanasiddiquiaws.info
- Compliance: compliance@sanasiddiquiaws.info
