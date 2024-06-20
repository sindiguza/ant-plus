import * as usb from 'usb';

declare module 'usb' {
    function setDebugLevel(level: number): void;
    function on(event: string, callback: (...args: any[]) => void): void;
}