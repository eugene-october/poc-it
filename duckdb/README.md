# DuckDB: JSON + CSV in Node.js

## Run with Docker

From this directory, with Docker running:

```sh
docker build -t duckdb-files-example .
docker run --rm duckdb-files-example
```

## Run locally

With Node.js 24, from this directory:

```sh
npm ci
npm start
```

## Output

`console.table` displays these results:

| source | category | records | units_sold | revenue |
|--------|----------|---------|------------|---------|
| CSV | Books | 50 | 150 | 1500 |
| CSV | Games | 50 | 150 | 3000 |
| CSV | Tools | 50 | 150 | 4500 |
| JSON | Books | 50 | 150 | 1500 |
| JSON | Games | 50 | 150 | 3000 |
| JSON | Tools | 50 | 150 | 4500 |
