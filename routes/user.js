// Mock database layer
const MOCK_DB = [
    { id: '1', name: 'Alice', role: 'admin' },
    { id: '2', name: 'Bob', role: 'developer' }
];

function handleUserQuery(userId) {
    if (!userId) {
        return { error: 'userId is required' };
    }

    // SAST Vulnerability: Raw SQL string concatenation without parameterization
    const rawSql = "SELECT * FROM users WHERE id = '" + userId + "' AND active = 1";
    console.log(`Executing raw SQL query: ${rawSql}`);

    // Simulated query execution
    const user = MOCK_DB.find(u => u.id === userId);
    return user || { error: 'User not found' };
}

module.exports = { handleUserQuery };
