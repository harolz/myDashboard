# Stock Dashboard

Objective: build a data visualization micro-site

Details:
Using a frontend, backend, and database interface, design a small single-page application and
REST API to power a data visualization site. The site should have a page for a live chart
visualization which refreshes every 10 seconds and a page for data entry, which saves updated
data in the database to be visualized. The API should have at least 3 different routes.

Technical requirements:
· Backend: use one of Python (Flask/Django/etc) or Node.js (Express.js)
· Frontend: use one of Vue (preferred), Angular, React for base framework; D3 or other
· charting library for visualization
· Database: MongoDB or MySQL

Bonus points:
· Attention to user experience and design aspects
· Use of style framework (Bootstrap, Material, etc)
· Creative visualization style and data presentation
· Validation and enforcement of schema conformity

Deliverables:

· Well-formatted README file with instructions for running the application
· Source code uploaded to GitHub or similar repository

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/harolz/myDashboard
npm install
```

This will get a copy of the project installed locally. To start each app, follow the instructions below:

To run the mysql database:

```bash
cd db/
```

```bash
docker-compose up 
```

To run the web socket server:

```bash
node ./server/server.js
```

To run the crud express server:

```bash
node ./server/crud_server.js
```

To run the client:

```bash
npm run dev
```

## Use the App

1. go to` http://localhost:8080/#/dashboard` 
2. the large line chart is a live chart a live chart visualization which refreshes every 10 seconds
3. navigate to `http://localhost:8080/#/update`  on the sider bar
4. Fill in the form to add, update and delete data in the live chart visualization