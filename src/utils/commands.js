import { cvData } from '../data/cv';

export const processCommand = (command) => {
    const cmd = command.trim().toLowerCase();

    switch (cmd) {
        case 'help':
            return {
                type: 'text',
                output: `
AVAILABLE PROTOCOLS:
  bio           - Initialize Full Identity Scan
  scan          - Alias for bio
  clear         - Reset Viewport
  matrix        - Toggle Visual Overlay
                `
            };

        case 'bio':
        case 'scan':
        case 'whoami':
        case 'open':
            return {
                type: 'view',
                view: 'UNIFIED',
                data: cvData
            };

        case 'matrix':
            return {
                type: 'effect',
                effect: 'MATRIX_TOGGLE'
            };

        case 'sudo':
            return {
                type: 'text',
                output: 'USER NOT IN SUDOERS FILE. THIS INCIDENT WILL BE REPORTED.'
            };

        case 'hack':
            return {
                type: 'text',
                output: 'Unlocking mainframe... [||||||||||] 100% \nACCESS GRANTED... \n\nJust kidding. Security is tight here.'
            };

        case 'coffee':
            return {
                type: 'text',
                output: `
      ( (
       ) )
    ........
    |      |]
    \\      /
     \`----\´
CAFFEINE LEVEL: CRITICAL
                `
            };

        case 'clear':
            return { type: 'clear' };

        case '':
            return { type: 'empty' };

        default:
            return {
                type: 'error',
                output: `ACCESS DENIED: ${cmd}. Data partitioned. Run 'bio' to access full record.`
            };
    }
};
