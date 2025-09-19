# Security Policy

## Supported Versions

The following versions of **Restauranty** are supported with security updates:

| Version | Supported                |
| ------- | ------------------------ |
| main    | ✅ (actively maintained) |

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not open a public issue**.  
Instead, report it responsibly by contacting us at:

- 📧 security@sanasiddiquiaws.info

We will acknowledge your report within **48 hours**, investigate the issue, and provide an update on remediation steps.

## Security Best Practices

This project follows common Kubernetes and DevOps security practices:

- Secrets are stored using **Kubernetes Secrets**, not plain environment variables.
- **TLS/HTTPS** is enforced at the ingress level via `cert-manager` and Let’s Encrypt.
- **NetworkPolicies** restrict communication between services.
- Only one datasource is marked as default in Grafana provisioning to prevent misconfiguration.

## Scope

- Application vulnerabilities (auth, items, discounts, frontend).
- Infrastructure vulnerabilities (Kubernetes manifests, Helm charts, Dockerfiles).
- Misconfigurations that may lead to data leaks, privilege escalation, or insecure deployments.

## Out of Scope

- Denial of Service (DoS) via overwhelming the demo cluster.
- Vulnerabilities in third-party dependencies (should be reported upstream).
