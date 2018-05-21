# v-leave

> A Vue.js project

## Build Setup

``` bash
# serve static file on dist
node run server.js

# install dependencies
npm install

# serve with hot reload at 0.0.0.0:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```


## Feature
- Admin
    - Manage-user
    - Add new user
    - export csv
    - export pdf
    - Connect line with QR code
- Subordinate
    - Request Leave form
    - View Task on their calendar
    - Edit Task status (Doing / Done)
    - Approve / Reject Substitute task
- Supervisor
    - Approve / Reject Leave form
    - View Subordinate Tasks in table
    - View Subordinate Task in calendar
    - Create Subordinate tasks
- User
    - Edit
    - Profile
    - Login