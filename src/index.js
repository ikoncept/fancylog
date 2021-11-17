import merge from 'lodash.merge'

export default class FancyLog {
    constructor (options = {}) {
        this.loggers = merge(this.defaults, options)
    }

    get defaults () {
        return {
            'default': {
                'background': '#eee',
                'text': '#222',
                'badgeBackground': '#35495e',
                'badgeText': '#fff'
            },
            'error': {
                'background': '#F87171',
                'text': '#fff',
                'badgeBackground': '#35495e',
                'badgeText': '#fff'
            },
            'warn': {
                'background': '#FBBF24',
                'text': '#fff',
                'badgeBackground': '#35495e',
                'badgeText': '#fff'
            },
            'success': {
                'background': '#34D399',
                'text': '#fff',
                'badgeBackground': '#35495e',
                'badgeText': '#fff'
            },
            'info': {
                'background': '#60A5FA',
                'text': '#fff',
                'badgeBackground': '#35495e',
                'badgeText': '#fff'
            }
        }
    }

    print (title = '', message = '', tailArguments = null, logger = null) {
        if (!logger) {
            logger = this.loggers.default
        }

        console.log(
            `%c ${title} %c ${message} %c`,
            `background:${logger.badgeBackground} ; padding: 1px; border-radius: 3px 0 0 3px;  color: ${logger.badgeText}`,
            `background:${logger.background} ; padding: 1px; border-radius: 0 3px 3px 0;  color: ${logger.text}`,
            `background:transparent`
        )

        if (tailArguments && tailArguments.length) {
            console.log(...tailArguments)
        }
    }

    log (title, message, ...args) {
        this.print(title, message, args)
    }

    info (title, message, ...args) {
        this.print(title, message, args, this.loggers.info)
    }

    warn (title, message, ...args) {
        this.print(title, message, args, this.loggers.warn)
    }

    success (title, message, ...args) {
        this.print(title, message, args, this.loggers.success)
    }

    error (title, message, ...args) {
        this.print(title, message, args, this.loggers.error)
    }
}
