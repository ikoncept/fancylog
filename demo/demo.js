import FancyLog from "../src";

console.log("Basic")

let logger = new FancyLog()
logger.log("log", "Basic log")
logger.info("info", "Never gonna give you up")
logger.warn("warn", "Never gonna run around and desert you")
logger.error("error", "Never gonna run around")
logger.success("success", "Never gonna make you cry")

console.log("\nCustom styling")

logger = new FancyLog({
    'error': { 'badgeBackground': '#F87171', 'background': "#f0f0f0", 'text': "#222" },
    'info': { 'badgeBackground': '#60A5FA', 'background': "#f0f0f0", 'text': "#222" },
    'warn': { 'badgeBackground': '#FBBF24', 'background': "#f0f0f0", 'text': "#222" },
    'success': { 'badgeBackground': '#34D399', 'background': "#f0f0f0", 'text': "#222" },
})
logger.log("log", "Basic log")
logger.info("info", "Never gonna give you up")
logger.warn("warn", "Never gonna run around and desert you")
logger.error("error", "Never gonna run around")
logger.success("success", "Never gonna make you cry")

console.log("\nEven more custom styling")

logger = new FancyLog({
    'default': { 'badgeBackground': '#A78BFA', 'background': "#f0f0f0", 'text': "#222" },
    'error': { 'badgeBackground': '#A78BFA', 'background': "#f0f0f0", 'text': "#F87171" },
    'info': { 'badgeBackground': '#A78BFA', 'background': "#f0f0f0", 'text': "#60A5FA" },
    'warn': { 'badgeBackground': '#A78BFA', 'background': "#f0f0f0", 'text': "#FBBF24" },
    'success': { 'badgeBackground': '#A78BFA', 'background': "#f0f0f0", 'text': "#34D399" },
})
logger.log("log", "Basic log")
logger.info("info", "Never gonna give you up")
logger.warn("warn", "Never gonna run around and desert you")
logger.error("error", "Never gonna run around")
logger.success("success", "Never gonna make you cry")

console.log("\n Other examples")

logger = new FancyLog()
logger.log("log", "Trailing arguments - arrays", [
    'Never gonna give you up, never gonna let you down',
    'Never gonna run around and desert you',
    'Never gonna make you cry, never gonna say goodbye',
    'Never gonna tell a lie and hurt you',
],['Rick','Astley'])
logger.info("info", "Trailing arguments - object + string", {
    first: 'Never gonna give you up, never gonna let you down',
    second: 'Never gonna run around and desert you',
    third: 'Never gonna make you cry, never gonna say goodbye',
    fourth: 'Never gonna tell a lie and hurt you',
},"What's going on here?")
logger.warn("my-cool-app", "Someone might run around and desert you!")
logger.error("error", "Never gonna run around")
logger.success("awesomeApp", "v2.3.4")