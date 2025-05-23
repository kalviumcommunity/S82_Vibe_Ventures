const sequelize = require('./config/database');
const User = require('./model/user');
const ObjectModel = require('./model/object');

const seed = async () => {
  try {
    // Drops existing tables and recreates
    await sequelize.sync({ force: true });
    console.log('✅ Database synced');

    // Insert sample users
    const users = await User.bulkCreate([
      { email: 'user1@example.com', name: 'User One' },
      { email: 'user2@example.com', name: 'User Two' },
      { email: 'user3@example.com', name: 'User Three' },
    ]);
    console.log('👤 Users seeded');

    // Insert sample objects linked to users
    await ObjectModel.bulkCreate([
      { firstName: 'Alice', lastName: 'Green', message: 'Hi there', created_by: users[0].id },
      { firstName: 'Bob', lastName: 'Brown', message: 'Hello!', created_by: users[1].id },
      { firstName: 'Charlie', lastName: 'Blue', message: 'Yo!', created_by: users[0].id },
    ]);
    console.log('📦 Objects seeded');

    console.log('🌱 Seeding complete');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    await sequelize.close();
    process.exit();
  }
};

seed();
