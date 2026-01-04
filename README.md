# FlexRate Currency Converter

## Student Information
- **Name:** Adebisi Kayode Abraham  
- **Track:** Front-End Web Development (ALX)  
- **Project:** Front-End Capstone Project (Cohort 07)

---

## Table of Contents
- Project Overview  
- Features  
- Technologies Used  
- Setup Instructions  
- How to Use  
- API Information  
- Deployment  
- Challenges Faced  
- Next Steps  

---

## Project Overview

FlexRate is a modern, responsive web application that allows users to convert currencies in real time using live exchange rate data.  
The application is designed with a clean user interface, supports light and dark modes, and provides a seamless user experience for quick and accurate currency conversion.

This project was built as part of the **ALX Front-End Web Development Capstone**, demonstrating proficiency in React, state management, API consumption, and UI design implementation.

---

## Features

- Real-time currency conversion  
- Support for multiple international currencies  
- Light and dark mode toggle  
- Currency swap functionality  
- Clean, responsive, and accessible UI  
- Error handling and loading states  

---

## Technologies Used

- **React.js** – Component-based UI development  
- **Vite** – Fast development and build tooling  
- **JavaScript (ES6+)** – Application logic  
- **CSS / Tailwind CSS** – Styling and responsive design  
- **Exchange Rate API** – Live currency data  
- **Git & GitHub** – Version control  

---

## Setup Instructions

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/flexrate-currency-converter.git

2. Navigate into the project directory:

   cd flexrate-currency-converter

3. Install dependencies:

   npm install


4. Start the development server:

   npm run dev

## How to Use

1. Select the currency you want to convert from.

2. Enter the amount.

3. Select the currency you want to convert to.

4. Click the Convert button to view the result.

5. Use the swap button to quickly reverse currencies.

6. Toggle between light and dark mode for better viewing preference.

NOTE: Exchange rates are fetched in real time and may vary based on market conditions.


## API Information

This project uses the Frankfurter API to retrieve live currency exchange rates.

- **Base Endpoint:** https://api.frankfurter.app

- **Endpoints Used:**Latest rates: /latest

- **Example request for USD as base:** /latest?from=USD

Convert currency: /latest?amount={amount}&from={base_currency}&to={target_currency}

Example: /latest?amount=100&from=USD&to=EUR

Historical rates: /YYYY-MM-DD?from={base_currency}&to={target_currency}

Example: /2023-12-31?from=USD&to=EUR

- **Authentication:** Not required

- **Response Format:** JSON

## Deployment

The application is deployed and accessible online:

Live URL: (to be added)

Deployment platform: Vercel 

## Challenges Faced

Managing asynchronous API calls and loading states

Handling currency swap logic without data inconsistencies

Implementing dark mode while maintaining design consistency

Structuring components for scalability and readability

## Next Steps

Add historical exchange rate charts

Improve accessibility (ARIA labels, keyboard navigation)

Add currency favorites

Implement offline caching for last known rates

Convert project to TypeScript

## Acknowledgements

ALX Africa Front-End Web Development Program

Open-source React community

