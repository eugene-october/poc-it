import { DuckDBInstance } from '@duckdb/node-api';

const db = await DuckDBInstance.create(':memory:');
const connection = await db.connect();

try {
    // from JSON
    const resultFromJson = await connection.runAndReadAll(`
    SELECT * FROM read_json_auto('data/sales.json') WHERE price > 10 AND category == 'Tools' LIMIT 10;
  `);
    console.log('JSON:');
    console.table(resultFromJson.getRowObjectsJson());

    // from CSV
    const resultFromCsv = await connection.runAndReadAll(`
    SELECT * FROM read_csv_auto('data/sales.csv') WHERE price > 10 AND category == 'Tools' LIMIT 10;
  `);
    console.log('CSV:');
    console.table(resultFromCsv.getRowObjectsJson());
} finally {
    connection.closeSync();
}
