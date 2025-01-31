import { pool } from "./db";

async function migrate() {
  console.log("Starting database migration...");
  try {
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        people INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);

    console.log("Bookings table created successfully.");

    await pool.execute(`
      INSERT INTO bookings (name, phone, date, time, people) VALUES
      ('John Doe', '08123456789', '2025-02-01', '18:00:00', 2),
      ('Jane Smith', '08198765432', '2025-02-02', '19:30:00', 4),
      ('Alice Johnson', '08134567890', '2025-02-03', '12:00:00', 3);
    `);

    console.log("Dummy data inserted successfully.");
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    process.exit();
  }
}

migrate();