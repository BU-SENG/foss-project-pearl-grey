# PearlGrey — Material Donation Tracker

Small backend for tracking material donations and distributions.

Run locally

1. Build

```powershell
.\mvnw.cmd -DskipTests package
```

2. Run

```powershell
.\mvnw.cmd spring-boot:run
```

API highlights

- POST `/api/auth/login` — body `{ "username": "admin", "password": "admin" }` returns `{ "token": "..." }`.
- POST `/api/donations` — create donation (admin only). Requires `DonationDTO`: `donorName`, `itemName`, `category`, `quantity`, `dateReceived`.
- POST `/api/distributions` — record distribution (admin only).
- GET `/api/inventory` — admin view of inventory.
- GET `/api/public/summary` — public summary (no auth).
- GET `/api/reports/donations/csv` and `/api/reports/donations/pdf` — export reports (admin only).

Notes

- On first run, the application creates a default admin using `app.admin.username`/`app.admin.password` from `application.properties` (defaults to `admin`/`admin`). Update before production.
- For tests, the project uses an in-memory H2 database.
