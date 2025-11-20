# Step 1: Build the application
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy everything
COPY . .

# Build the jar (skip tests for speed)
RUN mvn clean package -DskipTests


# Step 2: Run the application
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy only the built jar from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port Render will use
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]