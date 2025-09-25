H2edge - AgriTech Platform

Overview
Welcome to the AgriTech Platform, a comprehensive solution for modern agriculture designed to transform farming practices. Our platform provides farmers with cutting-edge tools to get personalized crop recommendations, share knowledge with a community, stay updated with market trends, and access expert advice on pest management.

Developed as a solution for the Smart India Hackathon 2025, the platform aims to enhance farmer productivity and resilience through innovative technology.

Features
The AgriTech Platform is built with a focus on delivering specific, actionable insights through its user-friendly interface.

Personalized Dashboard: Upon logging in, users are greeted with a personalized dashboard. This page displays user information, a recommended crop with specific details like variety and expected yield, and daily updates.

Intelligent Crop Recommendations: Based on user input for location, soil type (e.g., Alluvial Soil), and budget, the platform recommends a specific crop (e.g., Wheat) and provides key details such as sowing time, harvest time, and profitability.

Daily Updates: The dashboard includes real-time updates for both weather and pest management.

Weather: Displays current temperature, humidity, rainfall, and a short forecast.

Pest Management Tips: Offers concise, actionable advice for specific crops, such as "Monitor for aphids in wheat crops" and "Check for rust disease symptoms on leaves".

Knowledge Sharing Community: Farmers can contribute to a community knowledge base by submitting blogs and news articles on topics like new subsidies. The platform allows for easy content submission with fields for title, category, and content.

Expert Consultation: For more personalized advice, users can connect with agricultural experts through the platform to "Schedule Consultation" or "Download Report".

Technical Stack
The AgriTech platform is built on a scalable and reliable technology stack.

Frontend: React.js

Backend: Node.js + Express.js

Database: MongoDB

AI/ML Integration: Google Cloud Vision or Hugging Face for pest/disease detection; external APIs for market price forecasting.

APIs:

OpenWeatherMap API (for weather and disaster alerts)

Government agri-market APIs (for trend analysis)

Prototype

Home Page-<img width="1903" height="926" alt="Screenshot 2025-09-25 170423" src="https://github.com/user-attachments/assets/bf674ae7-2554-4292-b020-0262f3a9f509" />
The page welcomes visitors to the "AgriTech Platform", describing it as a "comprehensive solution for modern agriculture".

It highlights four main functions: Crop Recommendations, Knowledge Sharing, Market Updates, and Pest Management.

The page also includes a call to action asking if the user is "Ready to Transform Your Farming?" and provides buttons to "Share Knowledge" or "Get Recommendations".

Blog/News-<img width="1893" height="906" alt="Screenshot 2025-09-25 170616" src="https://github.com/user-attachments/assets/2964a190-f80f-4c86-90a0-85768658171e" />
This page allows users to submit their own blogs or news articles.

The submission form includes fields for a Title, Category, and Content.

A section titled "Recent Entries" displays the latest submissions, with details like the author (e.g., "Anonymous User"), the date, and the content of the post.

One example entry discusses a "new subsidy" from the Union Cabinet of India.

Consultancy-<img width="1889" height="912" alt="Screenshot 2025-09-25 170635" src="https://github.com/user-attachments/assets/89c42fe6-bf85-4df6-9014-b6025b488bf1" />
            <img width="1145" height="233" alt="Screenshot 2025-09-25 170654" src="https://github.com/user-attachments/assets/145c497c-e394-48f1-b68b-1cff73fbbe45" />
User Information: This panel displays the user’s personal details, including their name, email, state (e.g., Punjab), soil type (e.g., Alluvial Soil), and budget.

Recommended Crop: This section provides a crop suggestion, such as Wheat, along with specific details like variety (HD-2967), expected yield, and profitability. It also gives the ideal sowing and harvest times for the recommended crop.

Daily Updates: This part of the page is divided into two sub-sections:

Weather: Provides a current temperature, humidity, and rainfall reading, along with a short forecast.

Pest Management Tips: Offers specific, actionable advice for pest control and crop protection.

Personalized Advice: At the bottom of the page, there is a section for users who need more detailed consultation. It provides two options: "Schedule Consultation" with agricultural experts and "Download Report" for customized farming solutions.

How It Works
The platform's core functionality is powered by a seamless data flow:

User Input: A user provides their farm details (location, soil, crop).

Data Fetching: The backend fetches relevant weather, market, and soil data via APIs.

AI Analysis: An AI module analyzes the data to predict and suggest the best crops.

Advisory: The user receives a personalized advisory on their dashboard.

Real-time Alerts: The system provides continuous real-time alerts for pest, disease, and disaster risks.

Getting Started
To get the project running locally, follow these steps:

Clone the repository:
git clone https://github.com/parthameshdeshmukh/agritech.git

Navigate to the project directory:
cd agritech

Install dependencies:
npm install

Start the application:
npm run dev
