# Hospital Management React App

## Introduction

This is a simple hospital management application built with React. It allows hospital administrators to manage patients, book appointments, and view billing information.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Run `npm run dev` to start the development server.

## Routes

The app features several routes to handle different aspects of hospital management:

- `/#`: Dashboard page displaying a carousel of hospital images with user testimonials.
- `/#/patient`: List of all patients, allowing for patient creation and deletion.
- `/#/appointments/:patientId`: Form for booking appointments with service selection.
- `/#/billing/:patientId`: Patient billing details, including appointment charges according to service.

## Functionality

### Patients Page

- Displays a list of patients with their names, ages, genders, and avatars.
- Allows administrators to create new patients by clicking "+ Add Patient".
- Allows administrators to delete patients by clicking the red cross icon.

### Appointments Page

- Allows administrators to book appointments for patients by selecting a service type.

### Billing Page

- Displays billing information for patients based on their booked appointments.
- Shows service types, quantities, prices, and total amounts.
- Provides tax and discount information for the final total.

## Responsive Design

The app is fully responsive and adapts to different screen sizes:

- Utilizes a NavModal overlay for navigation on small screen devices.

## Dashboard

The Dashboard page showcases:

- A carousel displaying images related to the hospital.
- Dummy user testimonials praising the hospital's services.

## Note

Please note that the app uses randomly generated patient data using faker-js, which might result in minor inconsistencies between avatars, ages, and genders. This is for demonstration purposes and does not affect the core functionality of the app.

Feel free to explore the app and manage hospital-related tasks efficiently!

