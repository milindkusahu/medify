# Medify - Medical Center Slot Booking Platform

## Project Overview

Medify is a React-based web application that allows users to find medical centers in specific states and cities across the USA and book appointments. This project was developed as part of a front-end developer assignment to showcase skills in React development, API integration, and responsive design.

## Site Preview

![Medify Site Screenshot](https://raw.githubusercontent.com/milindkusahu/medify/refs/heads/main/Medify%20Slot%20Booking%20Demo.png)

## Live Demo

[View the live application](https://medify-three-puce.vercel.app/)

## Features

- **Landing Page**: Includes a navigation bar, search section for state and city selection, and other sections as per the Figma design.
- **Search Results**: Displays available medical centers in the selected location.
- **Booking Interface**: Allows users to select a medical center and book appointments up to one week in advance.
- **My Bookings Page**: Shows all user bookings with relevant details.
- **Responsive Design**: Fully responsive and adheres to the provided Figma design standards.

## Technologies Used

- React
- Material-UI
- Swiper (for carousels)
- React Router
- Axios (for API requests)
- LocalStorage (for data persistence)

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/milindkusahu/medify.git
   ```
2. Navigate to the project directory:
   ```
   cd medify
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```

## API Integration

The application integrates with the following backend endpoints:

- List of states: `https://meddata-backend.onrender.com/states`
- Cities in a state: `https://meddata-backend.onrender.com/cities/:state`
- Medical centers: `https://meddata-backend.onrender.com/data?state=<state-name>&city=<city-name>`

## Deployment

This project is deployed on Vercel. The live version can be accessed [here](https://medify-three-puce.vercel.app/).

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/milindkusahu/medify/issues) if you want to contribute.

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## Acknowledgements

- Assignment provided by Crio
- Design inspiration from provided [Figma file](https://www.figma.com/file/BLZw4DOia4hXyqt8X1Yuyl/Desktop-Designs-%3A-Healthcare-Consultation-(Community)?type=design&node-id=0-1&mode=design&t=VgPv59eyp8F6dTev-0)
