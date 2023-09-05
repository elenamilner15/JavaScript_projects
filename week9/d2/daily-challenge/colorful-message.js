import chalk from 'chalk';

export function createColorfulMessage(message) {
    return chalk.bold.green(message);
}