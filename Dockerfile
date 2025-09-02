# Use the official Python image as a base image
FROM python:3.11-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the port that the Flask app will run on
ENV PORT 8080
EXPOSE $PORT

# Run the Flask application
CMD ["python", "app.py"]
