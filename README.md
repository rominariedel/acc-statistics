# Acc Statistics

## Build and Run app

**Back**
`cd acc-statistics-back`
`PORT=3001 node bin/www`

**Front**
`cd acc-statistics-front`
`npm install && npm start`

## Code comments

**Back**
Contains a `/statistics` endpoint that receives no parameters.

**Front (main components)**

- App: Contains general React State with all the data fetched from back and selection behavior.
- StatisticsChart: Renders a bar chart using [Rechart](http://recharts.org/).
- StatisticsTable: Renders a data table using [Material-UI Table](https://material-ui.com/components/tables/).

**TODOs**

- Add tests.
- Handle requests errors.
- Add sort and filtering options to StatisticsTable.
