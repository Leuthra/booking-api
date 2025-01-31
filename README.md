# Booking API

The **Booking API** is a lightweight RESTful API built with **Hono**, **MySQL**, **TypeScript**, and powered by **Bun**. This API allows you to manage bookings, including creating, reading, updating, and deleting reservations.

## Author
- **Romi Muharom**

---

## Features
1. **Create a new booking**
2. **View all bookings**
3. **View booking details by ID**
4. **Update an existing booking**
5. **Delete a booking**

---

## 🛠️ Technology Stack
- [Bun](https://bun.sh/) - A fast JavaScript runtime
- [Hono](https://hono.dev/) - Lightweight web framework for building APIs
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript with static typing
- [MySQL](https://www.mysql.com/) - Relational database management system
- [dotenv](https://www.npmjs.com/package/dotenv) - For managing environment variables

---

## 📂 Project Structure
```bash
booking-api/
├── src/
│   ├── index.ts          # Main server file
│   ├── db.ts             # MySQL database connection
│   ├── migrate.ts        # Database migration script
│   ├── routes/
│   │   └── bookings.ts   # API routes for bookings
│   ├── types.ts          # TypeScript type definitions
├── .env                  # Environment variables configuration
├── .gitignore            # Ignore files for Git
├── package.json          # Bun project configuration
├── tsconfig.json         # TypeScript configuration
├── README.md             # Documentation
```

---

## 🔧 Installation and Usage

### 1. **Clone the Project**
```bash
git clone https://github.com/leuthra/booking-api.git
cd booking-api
```

### 2. **Install Dependencies**
```bash
bun install
```

### 3. **Create a `.env` File**
Add your MySQL database configuration in the `.env` file:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=booking_db
DB_PORT=3306
```

### 4. **Run Database Migration**
To create the necessary tables and insert dummy data, run the migration script:
```bash
bun run src/migrate.ts
```

This will create the **bookings** table and populate it with some dummy data.


---

## 🚀 API Endpoints

### **Base URL**
```
http://localhost:3000/api
```

### **1. GET `/api/bookings`**
Retrieve all bookings.

#### Example Response
```json
{
  "author": "Romi Muharom",
  "status": 200,
  "message": "List of bookings",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "phone": "08123456789",
      "date": "2025-02-01",
      "time": "18:00:00",
      "people": 2
    }
  ]
}
```

---

### **2. POST `/api/bookings`**
Create a new booking.

#### Request Body
```json
{
  "name": "Romi",
  "phone": "08123456789",
  "date": "2025-02-01",
  "time": "18:00:00",
  "people": 2
}
```

#### Example Response
```json
{
  "author": "Romi Muharom",
  "status": 201,
  "message": "Booking created",
  "id": 1,
  "name": "Romi",
  "phone": "08123456789",
  "date": "2025-02-01",
  "time": "18:00:00",
  "people": 2
}
```

---

### **3. GET `/api/bookings/:id`**
Retrieve booking details by ID.

#### Example Response
```json
{
  "author": "Romi Muharom",
  "status": 200,
  "message": "Booking detail",
  "data": {
    "id": 1,
    "name": "John Doe",
    "phone": "08123456789",
    "date": "2025-02-01",
    "time": "18:00:00",
    "people": 2
  }
}
```

---

### **4. PUT `/api/bookings/:id`**
Update a booking by ID.

#### Request Body
```json
{
  "name": "Updated Name",
  "phone": "08198765432",
  "date": "2025-02-02",
  "time": "19:00:00",
  "people": 4
}
```

#### Example Response
```json
{
  "author": "Romi Muharom",
  "status": 200,
  "message": "Booking updated",
  "id": 1,
  "name": "Updated Name",
  "phone": "08198765432",
  "date": "2025-02-02",
  "time": "19:00:00",
  "people": 4
}
```

---

### **5. DELETE `/api/bookings/:id`**
Delete a booking by ID.

#### Example Response
```json
{
  "author": "Romi Muharom",
  "status": 200,
  "message": "Booking deleted",
  "id": 1
}
```

---

## 🧪 Testing
You can test the API using [Postman](https://www.postman.com/) or any API testing tool of your choice.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

If you have any questions or encounter any issues, feel free to reach out! 😊