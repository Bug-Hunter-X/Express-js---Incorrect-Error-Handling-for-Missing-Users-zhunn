# Express.js - Incorrect Error Handling for Missing Users

This repository demonstrates a common error in Express.js applications:  incorrect error handling for missing resources.  The example shows how improper handling of a missing user can lead to unexpected behavior or crashes.

The `bug.js` file contains the buggy code.  `bugSolution.js` provides the corrected version.

## Problem
The initial code lacks proper error handling when a user is not found.  This can lead to unhandled exceptions or inconsistent responses.

## Solution
The solution uses the `res.status()` method to set the appropriate HTTP status code (404 Not Found) and sends a clear message to the client indicating that the user was not found.