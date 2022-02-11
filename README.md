# cron-check

This module is usefull to check if a datetime is maching cron.

Ex.:

```
* 30 * * *

moment('2022-02-10 22:30:35', 'YYYY-MM-DD HH:mm:ss').utc()

It's returns true beacuse cron is corresponding all seconds, all hours, all days ofweek, all days of month, all days and minute is corresponding 30
```

Supported format

```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7, 1L - 7L) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31, L)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, optional)
```

Usage

```
const cron_check = require('cron-check')

if (cron_check.match('* 30 * * * *', new Date())) {
    console.log('Cron is corresponding')
}
```

Usage with moment

```
const cron_check = require('cron-check')
const moment = require('moment-timezone')

if (cron_check.match_moment('* 30 * * * *', moment('2022-02-10 22:30:35', 'YYYY-MM-DD HH:mm:ss').utc())) {
    console.log('Cron is corresponding')
}
```