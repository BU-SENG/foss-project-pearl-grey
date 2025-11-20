

-----

## pearlGrey: Material Donation Tracker Backend

This is a **Spring Boot** application designed to track material donations and distributions. It provides a secure, token-based API for managing inventory, logging transactions, and generating reports.

-----

##  Tech Stack & Database

  * **Framework:** **Spring Boot** (Java)
  * **Build Tool:** **Maven** (`mvnw`)
  * **Security:** **JSON Web Tokens (JWT)** for authentication.
  * **Database:** **In-memory H2 Database** (for local development/testing)
      * *Note: Can be easily configured for external databases like MySQL or PostgreSQL.*

-----

##  Getting Started

Follow these steps to build and run the application locally.

###  Prerequisites

  * Java Development Kit (JDK) 17+
  * Apache Maven (or use the included Maven Wrapper, `mvnw`)

###  Run Locally

#### 1\. Build the Application

Compile the project and package it into a JAR file, skipping test execution.

```powershell
.\mvnw.cmd -DskipTests package
```

#### 2\. Run the Application

Execute the application using the Spring Boot plugin.

```powershell
.\mvnw.cmd spring-boot:run
```

The server will typically start on `http://localhost:8080`.

-----

##  Security and Authentication

The application uses token-based authentication (JWT). Most administrative endpoints require a valid token.

| Endpoint | Method | Body | Response | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `/api/auth/login` | **POST** | `{ "username": "admin", "password": "admin" }` | `{ "token": "..." }` | Exchange credentials for a JWT. |

> **Note:** The application creates a default admin user on first run (username: `admin`, password: `admin`). Please update credentials defined in `application.properties` before deployment.

-----

##  API Highlights

The table below summarizes the key endpoints. Endpoints marked **(Admin Only)** require a valid JWT in the `Authorization: Bearer <token>` header.

### Data Management

| Endpoint | Method | Description | Authentication | Required Body (DTO) |
| :--- | :--- | :--- | :--- | :--- |
| `/api/donations` | **POST** | Create a new material donation record. | Admin Only | `DonationDTO`: `donorName`, `itemName`, `category`, `quantity`, `dateReceived` |
| `/api/distributions` | **POST** | Record a distribution event (materials given out). | Admin Only | *DistributionDTO* |

### Viewing & Reporting

| Endpoint | Method | Description | Authentication |
| :--- | :--- | :--- | :--- |
| `/api/inventory` | **GET** | View the current consolidated inventory stock. | Admin Only |
| `/api/public/summary` | **GET** | Get a high-level public summary (e.g., total items donated). | None (Public) |
| `/api/reports/donations/csv` | **GET** | Export a report of all donations. | Admin Only |
| `/api/reports/donations/pdf` | **GET** | Export a PDF report of all donations. | Admin Only |

-----

##  Testing

The project uses the **H2 in-memory database** for all tests to ensure rapid, isolated, and reliable testing.

-----

##  Contributing & License

Feel free to submit issues or pull requests to improve the project.

  * **License:** Distributed under the **MIT License**. (See `LICENSE` file for details.)

-----

Would you like me to expand the documentation for the required DTOs (e.g., provide the fields for the `DistributionDTO`)?
