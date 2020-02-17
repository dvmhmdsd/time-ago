# Time Ago package

A package used for displaying the time ago from specific timestamp

# Installation

`flk install @flk/time-ago`

OR

`npm install @flk/time-ago`

OR

`yarn add @flk/time-ago`

## Usage

`hello-world.component.html`

```html
<flk-time-ago [time-format]="this.createdAt.format" [timestamp]="this.createdAt.timestamp"></flk-time-ago>
```

## General Properties

**time-format**: `time-format` | `[time-format]`

The format of the date and time.

**timestamp**: `timestamp` | `[timestamp]`

The timestamp of the creation date.
