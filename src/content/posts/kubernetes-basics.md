---
title: Kubernetes Basics for Beginners
date: 2026-02-05
description: Get started with Kubernetes - learn pods, deployments, services, and how to deploy your first application.
author: Kumar Saptam
tags:
- devops
- tutorial
featured: false
social: [
    {
        icon: "ri-github-fill",
        path: "https://github.com/sapython",
    }
]
---

# Kubernetes Basics for Beginners

Kubernetes can seem overwhelming. Let's break it down step by step.

## Core Concepts

- **Pod**: Smallest deployable unit
- **Deployment**: Manages pod replicas
- **Service**: Exposes pods to network
- **ConfigMap**: Configuration data
- **Secret**: Sensitive data

## First Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest
        ports:
        - containerPort: 8080
```

## Common Commands

```bash
kubectl get pods
kubectl describe pod my-pod
kubectl logs my-pod
kubectl apply -f deployment.yaml
```

Start your Kubernetes journey today!
