# FancyLog.js
FancyLog is a silly, but fun logging utility for browser `console.log()`. Simply put, it makes badges in the console. 

<img src="screenshot.png" width="320">

## Demo
https://unpkg.com/@ikoncept/fancylog@1.0.2/dist/demo/index.html

## Installation
```sh
$ yarn add @ikoncept/fancylog
```

## Usage
```js
import FancyLog from '@ikoncept/fancylog'

const fancylog = new FancyLog()
fancylog.log('log', 'Basic log')
fancylog.info('info', 'Never gonna give you up')
fancylog.warn('warn', 'Never gonna run around and desert you')
fancylog.error('error', 'Never gonna run around')
fancylog.success('success', 'Never gonna make you cry')
```

## Customization
You can provide an object for any (or all) available fancylog types (`default`, `error`, `info`, `warn`, `success`). This will be merged over default values, so no need to provide all four properties if you just want to nudge background colors.

Available properties per fancylog type: 
- `badgeBackground` - Background for label
- `badgeText` - Text color for label
- `background` - Background for message
- `text` - Text color for message

```js
fancylog = new FancyLog({
    'default': { 
        'badgeBackground': '#A78BFA'
    },
    'error': {  
        'background': '#f0f0f0', 
        'text': '#F87171' 
    },
    'info': { 
        'badgeBackground': '#A78BFA', 
        'background': '#f0f0f0', 
        'text': '#60A5FA' 
    },
    'warn': { 
        'text': '#FBBF24' 
    },
    'success': { 
        'background': '#D1FAE5', 
    }
})
```

## Examples
This is just ridiculous. But it's fun and it looks cool. 
```js
import FancyLog from '../src'

console.log('Basic')

let logger = new FancyLog()
logger.log('log', 'Basic log')
logger.info('info', 'Never gonna give you up')
logger.warn('warn', 'Never gonna run around and desert you')
logger.error('error', 'Never gonna run around')
logger.success('success', 'Never gonna make you cry')

console.log('\nCustom styling')

logger = new FancyLog({
    'error': { 'badgeBackground': '#F87171', 'background': '#f0f0f0', 'text': '#222' },
    'info': { 'badgeBackground': '#60A5FA', 'background': '#f0f0f0', 'text': '#222' },
    'warn': { 'badgeBackground': '#FBBF24', 'background': '#f0f0f0', 'text': '#222' },
    'success': { 'badgeBackground': '#34D399', 'background': '#f0f0f0', 'text': '#222' }
})
logger.log('log', 'Basic log')
logger.info('info', 'Never gonna give you up')
logger.warn('warn', 'Never gonna run around and desert you')
logger.error('error', 'Never gonna run around')
logger.success('success', 'Never gonna make you cry')

console.log('\nEven more custom styling')

logger = new FancyLog({
    'default': { 'badgeBackground': '#A78BFA', 'background': '#f0f0f0', 'text': '#222' },
    'error': { 'badgeBackground': '#A78BFA', 'background': '#f0f0f0', 'text': '#F87171' },
    'info': { 'badgeBackground': '#A78BFA', 'background': '#f0f0f0', 'text': '#60A5FA' },
    'warn': { 'badgeBackground': '#A78BFA', 'background': '#f0f0f0', 'text': '#FBBF24' },
    'success': { 'badgeBackground': '#A78BFA', 'background': '#f0f0f0', 'text': '#34D399' }
})
logger.log('log', 'Basic log')
logger.info('info', 'Never gonna give you up')
logger.warn('warn', 'Never gonna run around and desert you')
logger.error('error', 'Never gonna run around')
logger.success('success', 'Never gonna make you cry')

console.log('\n Other examples')

logger = new FancyLog()
logger.log('log', 'Trailing arguments - arrays', [
    'Never gonna give you up, never gonna let you down',
    'Never gonna run around and desert you',
    'Never gonna make you cry, never gonna say goodbye',
    'Never gonna tell a lie and hurt you'
], ['Rick', 'Astley'])
logger.info('info', 'Trailing arguments - object + string', {
    first: 'Never gonna give you up, never gonna let you down',
    second: 'Never gonna run around and desert you',
    third: 'Never gonna make you cry, never gonna say goodbye',
    fourth: 'Never gonna tell a lie and hurt you'
}, "What's going on here?")
logger.warn('my-cool-app', 'Someone might run around and desert you!')
logger.error('error', 'Never gonna run around')
logger.success('awesomeApp', 'v2.3.4')
```